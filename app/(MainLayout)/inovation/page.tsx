"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

const mockData = [
  { id: 1, title: "AI Assistant", desc: "Membantu otomatisasi pekerjaan dengan AI.", category: "Technology", image: "/images/Acer1.jpg" },
  { id: 2, title: "Smart Farming", desc: "Pertanian presisi dengan sensor IoT.", category: "Agriculture", image: "/images/Acer2.jpg" },
  { id: 3, title: "Solar Energy Grid", desc: "Energi terbarukan berbasis panel surya.", category: "Energy", image: "/images/Acer1.jpg" },
  { id: 4, title: "FinTech Analytics", desc: "Analitik keuangan untuk UMKM.", category: "Finance", image: "/images/Acer2.jpg" },
  { id: 5, title: "Urban Mobility", desc: "Transportasi ramah lingkungan di perkotaan.", category: "Transportation", image: "/images/Acer1.jpg" },
  { id: 6, title: "Healthcare IoT", desc: "Pemantauan kesehatan jarak jauh.", category: "Health", image: "/images/Acer2.jpg" },
  { id: 7, title: "Eco Packaging", desc: "Kemasan biodegradable ramah lingkungan.", category: "Environment", image: "/images/Acer1.jpg" },
  { id: 8, title: "Neural Computing", desc: "Pemrosesan data besar dengan jaringan saraf.", category: "Technology", image: "/images/Acer2.jpg" },
];

const categories = [
  "All",
  "Technology",
  "Agriculture",
  "Energy",
  "Finance",
  "Transportation",
  "Health",
  "Environment",
];

export default function InovasiPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredData = mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
  );

  return (
    <main className="min-h-screen flex flex-col">
      {/* 🖼️ Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
        <Image
          src="/images/Acer1.jpg"
          alt="Innovation Cover"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-md">Inovasi Kami</h1>
          <p className="text-lg sm:text-xl max-w-2xl drop-shadow-sm">
            Temukan ide-ide kreatif dan inovatif yang mendukung kemajuan teknologi, lingkungan, dan masyarakat.
          </p>
        </div>
      </section>

      {/* 🔍 Filter Bar */}
      <section className="bg-white shadow-sm z-10">
        <div className="w-11/12 py-4 flex gap-3 items-center mx-auto">
          {/* Search bar */}
          <div className="flex-1">
            <Input
              placeholder="Cari inovasi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-gray-400 focus:border-none"
            />
          </div>
          {/* Filter dropdown */}
          <div className="flex items-center gap-3">
            <Select value={category} onValueChange={(val) => setCategory(val)}>
              <SelectTrigger className="w-[180px] border-gray-400">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="secondary" onClick={() => { setSearch(""); setCategory("All"); }}>
              Reset
            </Button>
          </div>
        </div>
      </section>

      {/* 💡 Inovasi Grid */}
      <section className="flex-1 py-10 bg-linear-to-br from-white to-indigo-50">
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Tidak ada inovasi ditemukan.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-11/12 mx-auto">
            {filteredData.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border-none shadow-sm hover:shadow-lg transition-shadow duration-300 pt-0"
              >
                <div className="relative w-full h-80 rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-[#1A1333]">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
