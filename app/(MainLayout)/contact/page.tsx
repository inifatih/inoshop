"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact <span className="text-orange-500">INOShop Platform</span>
          </h1>
          <p className="text-gray-700 mt-3 text-lg">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        {/* FORM SECTION */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* FORM LEFT */}
            <div>
              <Card className="shadow-xl border border-gray-100 rounded-xl">
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl font-semibold">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">
                    Please provide your details below.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6 mt-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label className="font-medium">Full Name *</Label>
                    <Input placeholder="John Doe" className="h-12 text-base rounded-xl" />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label className="font-medium">Company / Organisation</Label>
                    <Input placeholder="Enter your organisation name" className="h-12 text-base rounded-xl" />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label className="font-medium">Email Address *</Label>
                    <Input type="email" placeholder="example@mail.com" className="h-12 text-base rounded-xl" />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label className="font-medium">Phone Number *</Label>
                    <Input type="text" placeholder="+62..." className="h-12 text-base rounded-xl" />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label className="font-medium">Your Message *</Label>
                    <Textarea placeholder="Tell us how we can help you..." className="min-h-40 text-base rounded-xl" />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button className="w-full h-12 text-lg font-medium rounded-xl hover:opacity-90 transition">
                      Submit Enquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* IMAGE RIGHT */}
            <div className="hidden md:block">
              <img
                src="/images/contact-image.jpg"
                alt="Contact INOShop"
                className="rounded-xl shadow-md object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
