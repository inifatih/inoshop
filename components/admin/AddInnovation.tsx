"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export default function AddInnovation() {
  const form = useForm(
    
  )

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <Form {...form}>
        <FormField
          control={form.control}
          name="namaInovasi"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Nama Inovasi</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan nama inovasi yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deskripsiInovasi"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Deskripsi Inovasi</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan deskripsi inovasi yang dibuat</FormDescription>
              <FormMessage />
              </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="asalInovasi"
          render={({ field }) => (
              <FormItem>
              <FormLabel>Asal Inovasi</FormLabel>
              <FormControl>
                  <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Masukan asal inovasi yang dibuat</FormDescription>
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