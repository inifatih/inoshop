"use server";

import { createClient } from "@/lib/supabase/server";

interface SignUpInput {
  email: string;
  password: string;
  nama: string;
  kontak?: string;
  deskripsi?: string;
  lokasi?: string;
  is_admin?: boolean;
}

export async function actionSignUp(input: SignUpInput) {
  const supabase = await createClient();

  // 1. Sign up user
  const { data: userData, error: signUpError } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
  });

  if (signUpError) {
    return { success: false, message: signUpError.message };
  }

  const user = userData.user;
  if (!user) {
    return {
      success: true,
      message: "Pendaftaran berhasil. Silakan cek email untuk verifikasi.",
    };
  }

  // 2. Insert additional profile data
  const { error: insertError } = await supabase.from("Innovators").insert({
    id: user.id,
    nama: input.nama,
    kontak: input.kontak ?? "",
    deskripsi: input.deskripsi ?? "",
    lokasi: input.lokasi ?? "",
    email: input.email,
    is_admin: input.is_admin ?? false,
  });

  if (insertError) {
    return { success: false, message: insertError.message };
  }

  return {
    success: true,
    message: "Pendaftaran berhasil!",
  };
}
