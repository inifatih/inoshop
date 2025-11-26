"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { actionSignUp } from "@/app/auth/register/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

// =========================
//  ZOD REGISTRATION SCHEMA
// =========================
const registerSchema = z
  .object({
    email: z.string().email("Email tidak valid"),
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    password: z.string().min(6, "Password minimal 6 karakter"),

    kontak: z.string().optional(),
    deskripsi: z.string().optional(),
    lokasi: z.string().optional(),
  })

type RegisterSchema = z.infer<typeof registerSchema>;

export function RegisterDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState(""); // State untuk pesan sukses

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      nama: "",
      kontak: "",
      deskripsi: "",
      lokasi: "",
    },
  });

  const onSubmit = async (values: RegisterSchema) => {
    setLoading(true);
    setServerError("");
    setRegistrationMessage("");

    const result = await actionSignUp({
      email: values.email,
      password: values.password,
      nama: values.nama,
      kontak: values.kontak,
      deskripsi: values.deskripsi,
      lokasi: values.lokasi,
      is_admin: false,
    });

    if (!result.success) {
      // Jika gagal, tampilkan pesan error dari server
      setServerError(result.message || "Pendaftaran gagal");
      setLoading(false);
      return;
    }

    // Jika berhasil
    setRegistrationMessage(result.message); // Tampilkan pesan sukses
    // opsional: tutup dialog setelah beberapa detik atau tunggu user klik OK
    // onOpenChange(false);
    form.reset();
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white shadow-2xl border-0 rounded-2xl">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>Silakan isi data Anda untuk menjadi Inovator.</DialogDescription>
        </DialogHeader>

        {/* Tambahkan tampilan pesan sukses */}
        {registrationMessage ? (
          <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
            <p>{registrationMessage}</p>
            <Button onClick={() => onOpenChange(false)} className="mt-4">Tutup</Button>
          </div>
        ) : (
          <Form {...form}>
            <form className="space-y-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
              
              {/* ... (Field Email, Full Name, Password tetap sama) ... */}
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="you@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Full Name */}
              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Nama lengkap" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="••••••••" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Kontak */}
              <FormField
                control={form.control}
                name="kontak"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kontak</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="08xxxxxxxxxx" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Deskripsi */}
              <FormField
                control={form.control}
                name="deskripsi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Deskripsi singkat tentang Anda" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Lokasi */}
              <FormField
                control={form.control}
                name="lokasi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lokasi</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Domisili Anda" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Server Error */}
              {serverError && (
                <p className="text-sm text-red-500 text-center font-medium">
                  {serverError}
                </p>
              )}

              <Button
                type="submit"
                className="w-full rounded-xl h-10 bg-amber-600 hover:bg-amber-200 hover:cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" /> Registering...
                  </span>
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}