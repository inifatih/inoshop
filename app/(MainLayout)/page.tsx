"use client";

import About from "@/components/About";
import { CarouselComponent } from "@/components/Carousel";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";

export default function HomePage() {
  return (
    <main className="flex-1 min-h-screen">
      <CarouselComponent />
      <About />
      <Hero />
      <Section1 />
    </main>
  );
}