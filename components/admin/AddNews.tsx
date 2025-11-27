"use client";

import { createNews } from "@/app/admin/news/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

// ---------------------------
// ZOD SCHEMA
// ---------------------------
const NewsSchema = z.object({
  judul_news: z.string().min(1, "Isi judul berita"),
  category_news: z.string().min(1, "Isi kategori berita"),
  tanggal_news: z.string(),
  deskripsi_news: z.string().min(1, "Isi deskripsi berita"),
  penulis_news: z.string().min(1, "Isi penulis berita"),
});

type NewsFormInput = {
  judul_news: string;
  category_news: string;
  tanggal_news: string;
  deskripsi_news: string;
  penulis_news: string;
};

interface AddNewsProps {
  onSuccess?: () => void;
}

export default function AddNews({ onSuccess }: AddNewsProps) {
  const [status, setStatus] = useState<"success" | "error" | "">("");
    
  // form handler
  const form = useForm<NewsFormInput>({
    resolver: zodResolver(NewsSchema),
    defaultValues: {
      judul_news: "",
      category_news: "",
      tanggal_news: "", // string
      deskripsi_news: "",
      penulis_news: "",
    },
  });

  // submit handler
  const onSubmit = async (values: NewsFormInput) => {
    try {
      await createNews({
        ...values,
        tanggal_news: new Date(values.tanggal_news), // aman, Zod juga sudah memastikan valid
      });
      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setStatus("error")
    }
  };


  return (
    <Card className="w-full max-w-2xl border-orange-300 bg-white shadow-md rounded-xl">
      <CardHeader className="bg-orange-50 border-b">
        <CardTitle className="text-orange-600 text-xl font-semibold">Tambah Berita</CardTitle>
      </CardHeader>

      <CardContent className="mt-6">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Judul */}
            <FormField
              control={form.control}
              name="judul_news"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judul Berita</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan judul berita"
                      className="bg-white border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukan judul berita yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Kategori */}
            <FormField
              control={form.control}
              name="category_news"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kategori Berita</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan kategori"
                      className="bg-white border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukan kategori berita yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tanggal */}
            <FormField
              control={form.control}
              name="tanggal_news"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Berita</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="bg-white border-gray-300"
                      {...field}
                      value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukan tanggal berita yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />


            {/* Deskripsi */}
            <FormField
              control={form.control}
              name="deskripsi_news"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi Berita</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan deskripsi berita"
                      className="bg-white border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukan deskripsi berita yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Penulis */}
            <FormField
              control={form.control}
              name="penulis_news"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penulis Berita</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan nama penulis"
                      className="bg-white border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukan penulis berita yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6"
              >
                Simpan
              </Button>
              {/* Status message */}
              <div className="pt-2">
                {status === "success" && (
                  <p className="text-green-600 font-medium">Berita berhasil disimpan</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium">Gagal menyimpan berita</p>
                )}
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
