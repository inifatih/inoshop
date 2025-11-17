// app/authentication/logout/action.ts
"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function logoutAction() {
  const supabase = createServerActionClient({ cookies });
  await supabase.auth.signOut();
  return { success: true };
}