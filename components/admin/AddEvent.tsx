"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export default function AddEvent() {
  const form = useForm()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <Form {...form}>
        <FormField
          control={form.control}
          name="judulAcara"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Judul Acara</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan judul acara yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryAcara"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Kategori Acara</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan kategori acara yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tanggalAcara"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Tanggal Acara</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan tanggal acara yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lokasiAcara"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Lokasi Acara</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan lokasi acara yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deskripsiAcara"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Deskripsi Acara</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan deskripsi acara yang dibuat</FormDescription>
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