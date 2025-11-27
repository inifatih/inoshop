"use server"
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
// You would import bcrypt here if you were hashing the password
// import bcrypt from 'bcryptjs'; 

export async function POST(req: NextRequest) {
  // Check for required environment variables early
  const adminEmail = process.env.EMAIL_USER;
  const adminPass = process.env.EMAIL_PASS;
  
  if (!adminEmail || !adminPass) {
    return new Response(
      JSON.stringify({ success: false, message: "Server email credentials are not configured." }),
      { status: 500 }
    );
  }

  try {
    const data = await req.json();
    // 🛡️ Destructure and remove 'password' from the email context
    const { nama, email, password, kontak, deskripsi, lokasi } = data; 
    
    // (If saving to DB): 
    // const hashedPassword = await bcrypt.hash(data.password, 10);
    // saveUserToDatabase({ email, nama, hashedPassword, ... });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: adminEmail,
        pass: adminPass, // Must be a Gmail App Password
      },
    });

    // 🛡️ REMOVED THE PASSWORD from mailOptions
    const mailOptions = {
      from: adminEmail,
      to: adminEmail, // kirim ke email admin
      subject: "Pendaftar Inovator Baru - Menunggu Persetujuan",
      text: `
        Pendaftaran Inovator Baru membutuhkan persetujuan:
        
        Nama: ${nama}
        Email: ${email}
        Password: ${password}
        
        Data Tambahan:
        Kontak: ${kontak || "-"}
        Deskripsi: ${deskripsi || "-"}
        Lokasi: ${lokasi || "-"}
        
        Silakan verifikasi data ini.
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Pendaftaran berhasil dikirim ke admin untuk diverifikasi." }),
      { status: 200 }
    );
  } catch (err: unknown) {
    // Return a more generic error message to the client for security
    const message = err instanceof Error ? err.message : "Gagal memproses pendaftaran. Coba lagi.";
    return new Response(
      JSON.stringify({ success: false, message: "Gagal mengirim notifikasi pendaftaran." }), 
      { status: 500 }
    );
  }
}