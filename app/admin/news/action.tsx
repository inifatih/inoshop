"use server";

import { createClient } from "@/lib/supabase/server";
import { id } from "zod/v4/locales";

const supabase = await createClient();

// Create
export async function createNews({
  judul_news,
  cat_news,
  tanggal_news,
  deskripsi_news,
}: {
  judul_news: string;
  cat_news?: string;
  tanggal_news?: Date;
  deskripsi_news?: string;
}) {
  const { data, error } = await supabase
    .from("News")
    .insert([
      {
        judul_news: judul_news,
        cat_news: cat_news,
        tanggal_news: tanggal_news,
        deskripsi_news: deskripsi_news,},
    ])
    .select();

  if (error) throw error;
  return data;
}

// Read
export async function getAllNews() {
  const { data, error } = await supabase
    .from("News")
    .select(`
      id,
      created_at,
      judul_news,
      cat_news,
      tanggal_news,
      deskripsi_news,,
    `)
    .order("created_at", { ascending: false })
    .eq("id", id)
    .select();

  if (error) throw error;
  return data;
}

// Update
export async function updateNews(
  id: string | number,
  { judul_news, cat_news, tanggal_news, deskripsi_news }: {
    judul_news?: string;
    cat_news?: string;
    tanggal_news?: Date;
    deskripsi_news?: string;
  }
) {
  const { data, error } = await supabase
    .from("News")
    .update({
      judul_news: judul_news,
      cat_news: cat_news,
      tanggal_news: tanggal_news,
      deskripsi_news: deskripsi_news,
    })
    .eq("id", id)
    .select();

  if (error) throw error;
  return data;
}

// Delete
export async function deleteNews(id: string | number) {
  const { error } = await supabase
    .from("News")
    .delete()
    .eq("id", id);

  if (error) throw error;
}



