"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
// import { z, zodResolver } from "@hookform/resolvers/zod";

// const newsSchema = z.object({
//   judulBerita: z.string().min(1, "Judul berita wajib diisi"),
//   kategoriBerita: z.string().min(1, "Kategori berita wajib diisi"),
//   tanggalBerita: z.string().min(1, "Tanggal berita wajib diisi"),
//   deskripsiBerita: z.string().min(1, "Deskripsi berita wajib diisi"),
//   penulisBerita: z.string().min(1, "Penulis berita wajib diisi"),
// });

export default function AddNews() {
  const form = useForm(
  )

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <Form {...form}>
        <FormField
          control={form.control}
          name="judulBerita"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Judul Berita</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan judul berita yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="kategoriBerita"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Kategori Berita</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan kategori berita yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="tanggalBerita"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Tanggal Berita</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan tanggal berita yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deskripsiBerita"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Deskripsi Berita</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan deskripsi berita yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="penulisBerita"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Penulis Berita</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan penulis berita yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <div className="mt-4">
          <Button type="submit">
            Simpan
          </Button>
        </div>
      </Form>
      
    </div>
  )
}