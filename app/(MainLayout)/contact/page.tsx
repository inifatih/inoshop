"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

// ✅ Zod Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactSchema = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactSchema) => {
    console.log("Form submitted:", values);
  };

  return (
    <main>
      {/* Cover */}
      <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden shadow-2xl border-b-gray-600">
        <Image
          src="/images/Acer1.jpg"
          alt="Innovation Cover"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-md">Hubungi Kami</h1>
          <p className="text-lg sm:text-xl max-w-2xl drop-shadow-sm">
            Silahkan berikan pertanyaan kepada BRIDA Jawa Timur.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="flex justify-center items-center py-20">
        <div className="w-11/12">
          <div>
            <h1 className="text-3xl font-bold">Kami siap Membantu Anda</h1>
            <p className="text-gray-600 mt-2">
              Silahkan isi formulir di bawah ini dan tim kami akan menghubungi Anda sesegera mungkin.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-4"
            >

              {/* 2 COLUMN FLEX */}
              <div className="flex flex-col md:flex-row gap-6 w-full">

                {/* LEFT COLUMN */}
                <div className="flex-1 space-y-6">
                  
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12 rounded-xl text-base"
                            placeholder="John Doe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Company */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Organisation</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12 rounded-xl text-base"
                            placeholder="Your organisation"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </div>

                {/* RIGHT COLUMN */}
                <div className="flex-1 space-y-6">

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12 rounded-xl text-base"
                            placeholder="example@mail.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12 rounded-xl text-base"
                            placeholder="+62..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </div>

              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 rounded-xl text-base"
                        placeholder="Subject of your enquiry"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* FULL WIDTH MESSAGE */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-40 rounded-xl text-base"
                        placeholder="Tell us how we can help you..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* FULL WIDTH BUTTON */}
              <Button
                type="submit"
                className="w-full h-12 text-lg font-medium rounded-xl"
              >
                Submit Enquiry
              </Button>

            </form>
          </Form>

        </div>
      </section>

    </main>
  );
}
