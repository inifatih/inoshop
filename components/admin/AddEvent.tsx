"use client";

import { createEvent } from "@/app/admin/events/action";
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
const EventsSchema = z.object({
  judul_event: z.string().min(1, "Isi judul berita"),
  category_event: z.string().min(1, "Isi kategori berita"),
  tanggal_event: z.string(),
  lokasi_event: z.string().min(1, "Isi deskripsi berita"),
  deskripsi_event: z.string().min(1, "Isi penulis berita"),
});

type EventsFormInput = {
  judul_event: string;
  category_event: string;
  tanggal_event: string;
  lokasi_event: string;
  deskripsi_event: string;
};

interface AddEventsProps {
  onSuccess?: () => void;
}

export default function AddEvent({ onSuccess}: AddEventsProps) {

  const [status, setStatus] = useState<"success" | "error" | "">("");

  // form handler
    const form = useForm<EventsFormInput>({
      resolver: zodResolver(EventsSchema),
      defaultValues: {
        judul_event: "",
        category_event: "",
        tanggal_event: "", // string
        lokasi_event: "",
        deskripsi_event: "",
      },
    });

  // submit handler
    const onSubmit = async (values: EventsFormInput) => {
      try {
        await createEvent({
          ...values,
          tanggal_event: new Date(values.tanggal_event), // aman, Zod juga sudah memastikan valid
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
        <CardTitle className="text-orange-600 text-xl font-semibold">
          Tambah Acara
        </CardTitle>
      </CardHeader>

      <CardContent className="mt-6">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>

            {/* Judul Acara */}
            <FormField
              control={form.control}
              name="judul_event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800">Judul Acara</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-50 focus-visible:ring-orange-500"
                      placeholder="Judul acara"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    Masukkan judul acara yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Kategori Acara */}
            <FormField
              control={form.control}
              name="category_event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800">Kategori Acara</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-50 focus-visible:ring-orange-500"
                      placeholder="Kategori acara"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    Masukkan kategori acara yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tanggal Acara */}
            <FormField
              control={form.control}
              name="tanggal_event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800">Tanggal Acara</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="bg-white border-gray-300"
                      {...field}
                      value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    Masukkan tanggal acara yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Lokasi Acara */}
            <FormField
              control={form.control}
              name="lokasi_event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800">Lokasi Acara</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-50 focus-visible:ring-orange-500"
                      placeholder="Lokasi acara"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    Masukkan lokasi acara yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Deskripsi Acara */}
            <FormField
              control={form.control}
              name="deskripsi_event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800">Deskripsi Acara</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-50 focus-visible:ring-orange-500"
                      placeholder="Deskripsi acara"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    Masukkan deskripsi acara yang dibuat
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
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
                  <p className="text-green-600 font-medium">Acara berhasil disimpan!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium">Gagal menyimpan acara!</p>
                )}
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
