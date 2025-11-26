"use server";

import { createClient } from "@/lib/supabase/server";
import { id } from "zod/v4/locales";

const supabase = await createClient();

// Create
export async function createInnovation({
  nama_inovasi,
  cat_inovasi,
  deskripsi_inovasi,
  lokasi_inovasi,
  id_inovator,
}: {
  nama_inovasi: string;
  cat_inovasi?: string;
  deskripsi_inovasi?: string;
  lokasi_inovasi?: string;
  id_inovator?: string | number;
}) {
  const { data, error } = await supabase
    .from("Innovations")
    .insert([
      {
        nama_inovasi: nama_inovasi,
        deskripsi_inovasi: deskripsi_inovasi,
        cat_inovasi: cat_inovasi,
        lokasi_inovasi: lokasi_inovasi,
        id_inovator: id_inovator,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}

// Read
export async function getAllInnovations() {
  const { data, error } = await supabase
    .from("Innovations")
    .select(`
      id,
      created_at,
      nama_inovasi,
      cat_inovasi,
      deskripsi_inovasi,
      lokasi_inovasi,
      id_inovator,
    `)
    .order("created_at", { ascending: false })
    .eq("id", id)
    .select();

  if (error) throw error;
  return data;
}

// Update
export async function updateInnovation(
  id: string | number,
  { nama_inovasi, cat_inovasi, deskripsi_inovasi, lokasi_inovasi, id_inovator }: {
    nama_inovasi?: string;
    cat_inovasi?: string;
    deskripsi_inovasi?: string;
    lokasi_inovasi?: string;
    id_inovator?: string | number;
  }
) {
  const { data, error } = await supabase
    .from("Innovations")
    .update({
      nama_inovasi: nama_inovasi,
      deskripsi_inovasi: deskripsi_inovasi,
      cat_inovasi: cat_inovasi,
      lokasi_inovasi: lokasi_inovasi,
      id_inovator: id_inovator,
    })
    .eq("id", id)
    .select();

  if (error) throw error;
  return data;
}

// Delete
export async function deleteInnovation(id: string | number) {
  const { error } = await supabase
    .from("Innovations")
    .delete()
    .eq("id", id);

  if (error) throw error;
}



