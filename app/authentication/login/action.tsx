// app/authentication/login/action.ts
"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function loginAction({ email, password }: { email: string; password: string; }) {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return { error: error.message };

  return { success: true };
}