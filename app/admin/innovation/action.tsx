"use server";

import { createClient } from "@/lib/supabase/server";

// CREATE INNOVATION
export async function createInnovation({
  nama_inovasi,
  asal_inovasi,
  deskripsi_inovasi,
  id_inovator,
}: {
  nama_inovasi: string;
  asal_inovasi: string;
  deskripsi_inovasi?: string;
  id_inovator?: string | number;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Innovations")
    .insert({
      nama_inovasi,
      asal_inovasi,
      deskripsi_inovasi,
      id_inovator,
    })
    .select();

  if (error) throw error;
  return data;
}

// GET INNOVATORS FROM TABLE PROFILES WHERE IS_ADMIN == FALSE
export async function getInovators() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("id, nama")
    .eq("is_admin", false)
    .order("nama", { ascending: true });

  if (error) {
    console.error("Error fetching inovators:", error);
    return [];
  }

  return data.map((item) => ({
    id: item.id,
    name: item.nama ?? ""
  }));
}

// READ INNOVATION (Fetch into Table)
// tipe asli yang dikembalikan Supabase join profiles
export async function getAllInnovations() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Innovations")
    .select(`
      id,
      created_at,
      nama_inovasi,
      deskripsi_inovasi,
      asal_inovasi,
      id_inovator,
      profiles(id, nama)
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;

  // Map supaya frontend lebih mudah
  const mapped = data.map(item => ({
    id: item.id,
    nama_inovasi: item.nama_inovasi,
    deskripsi_inovasi: item.deskripsi_inovasi,
    asal_inovasi: item.asal_inovasi,
    created_at: item.created_at,
    profiles: Array.isArray(item.profiles) ? item.profiles[0] ?? null : item.profiles ?? null, // ambil object pertama jika ada
  }));

  return mapped;
}





