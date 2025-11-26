"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export default function AddInnovator() {
  const form = useForm(
    
  )

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <Form {...form}>
        <FormField
          control={form.control}
          name="namaInovator"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Nama Inovator</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan nama inovator yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="kontakInovator"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Kontak Inovator</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan kontak inovator yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deskripsiInovator"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Deskripsi Inovator</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan deskripsi inovator yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lokasiInovator"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Lokasi Inovator</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan lokasi inovator yang dibuat</FormDescription>
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