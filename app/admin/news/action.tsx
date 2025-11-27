"use server";

import { createClient } from "@/lib/supabase/server";

// Create
export async function createNews({
  judul_news,
  category_news,
  tanggal_news,
  deskripsi_news,
  penulis_news,
}: {
  judul_news: string;
  category_news?: string;
  tanggal_news?: Date;
  deskripsi_news?: string;
  penulis_news?:string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("News")
    .insert([
      {
        judul_news: judul_news,
        category_news: category_news,
        tanggal_news: tanggal_news,
        deskripsi_news: deskripsi_news,
        penulis_news: penulis_news,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}

// // Read
// export async function getAllNews() {
//   const { data, error } = await supabase
//     .from("News")
//     .select(`
//       id,
//       created_at,
//       judul_news,
//       category_news,
//       tanggal_news,
//       deskripsi_news,
//       penulis_news,
//     `)
//     .order("created_at", { ascending: false })
//     .eq("id", id)
//     .select();

//   if (error) throw error;
//   return data;
// }

// // Update
// export async function updateNews(
//   id: string | number,
//   { judul_news, category_news, tanggal_news, deskripsi_news, penulis_news }: {
//     judul_news?: string;
//     category_news?: string;
//     tanggal_news?: Date;
//     deskripsi_news?: string;
//     penulis_news?:string;
//   }
// ) {
//   const { data, error } = await supabase
//     .from("News")
//     .update({
//       judul_news: judul_news,
//       category_news: category_news,
//       tanggal_news: tanggal_news,
//       deskripsi_news: deskripsi_news,
//       penulis_news: penulis_news,
//     })
//     .eq("id", id)
//     .select();

//   if (error) throw error;
//   return data;
// }

// // Delete
// export async function deleteNews(id: string | number) {
//   const { error } = await supabase
//     .from("News")
//     .delete()
//     .eq("id", id);

//   if (error) throw error;
// }



