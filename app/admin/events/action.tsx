"use server";

import { createClient } from "@/lib/supabase/server";

// Create
export async function createEvent({
  judul_event,
  category_event,
  tanggal_event,
  lokasi_event,
  deskripsi_event,
}: {
  judul_event: string;
  category_event?: string;
  tanggal_event?: Date;
  lokasi_event?: string;
  deskripsi_event?: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("Events")
    .insert([
      {
        judul_event: judul_event,
        category_event: category_event,
        tanggal_event: tanggal_event,
        lokasi_event: lokasi_event,
        deskripsi_event: deskripsi_event,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}

// // Read
// export async function getAllEvent() {
//   const { data, error } = await supabase
//     .from("Events")
//     .select(`
//       id,
//       created_at,
//       judul_event,
//       cat_event,
//       tanggal_event,
//       lokasi_event,
//       deskripsi_event,
//     `)
//     .order("created_at", { ascending: false })
//     .eq("id", id)
//     .select();

//   if (error) throw error;
//   return data;
// }

// // Update
// export async function updateEvent(
//   id: string | number,
//   { judul_event, cat_event, tanggal_event, lokasi_event, deskripsi_event }: {
//     judul_event?: string;
//     cat_event?: string;
//     tanggal_event?: string;
//     lokasi_event?: string;
//     deskripsi_event?: string | number;
//   }
// ) {
//   const { data, error } = await supabase
//     .from("Events")
//     .update({
//       judul_event: judul_event,
//       tanggal_event: tanggal_event,
//       cat_event: cat_event,
//       lokasi_event: lokasi_event,
//       deskripsi_event: deskripsi_event,
//     })
//     .eq("id", id)
//     .select();

//   if (error) throw error;
//   return data;
// }

// // Delete
// export async function deleteEvent(id: string | number) {
//   const { error } = await supabase
//     .from("Events")
//     .delete()
//     .eq("id", id);

//   if (error) throw error;
// }



