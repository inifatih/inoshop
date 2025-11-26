import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Cek login
  if (!user) redirect("/");

  // Cek role dari database
  const { data: users } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!users || users.is_admin !== false) {
    redirect("/");
  }

  return (
    <div className="flex">
      <aside className="w-64">Admin Sidebar</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
