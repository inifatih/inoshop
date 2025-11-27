"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  is_admin: z.boolean(),

  nama: z.string().optional(),
  kontak: z.string().optional(),
  lokasi: z.string().optional(),
  deskripsi: z.string().optional(),
});

export async function createNewUser(values: z.infer<typeof FormSchema>) {
  const parsed = FormSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, message: "Input tidak valid" };
  }

  const data = parsed.data;

  try {
    // 1. Buat user auth dengan service_role
    const { data: userData, error: createError } =
      await supabaseAdmin.auth.admin.createUser({
        email: data.email,
        password: data.password,
        email_confirm: true,
      });

    if (createError || !userData?.user) {
      return { success: false, message: createError?.message };
    }

    const userId = userData.user.id;

    // 2. Insert ke table profiles dengan supabase server (RLS ON)
    const { error: profileError } = await supabaseAdmin.from("profiles").insert({
      id: userId,
      is_admin: data.is_admin,
      nama: data.nama || null,
      kontak: data.kontak || null,
      lokasi: data.lokasi || null,
      deskripsi: data.deskripsi || null,
    });

    if (profileError) {
      return { success: false, message: profileError.message };
    }

    return { success: true, message: "User berhasil dibuat" };
  } catch (err) {
    console.error("Create user error:", err);
    return { success: false, message: "Terjadi kesalahan di server" };
  }
}
