"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function registerAction({ email, password, fullName, is_admin }: {
  email: string;
  password: string;
  is_admin?: boolean;
  fullName: string;
}) {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { fullName: fullName, role: is_admin ? "admin" : "user", is_admin: Boolean(is_admin) },
    },
  });

  if (error) return { error: error.message };

  return { success: true };
}