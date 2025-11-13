"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

export function CarouselComponent() {
  const [current, setCurrent] = React.useState(0)
  const [progress, setProgress] = React.useState(0)
  const duration = 5000 // waktu per slide (ms)

  const slides = [
    { image: "/images/Acer1.jpg" },
    { image: "/images/Acer2.jpg" },
  ];

  // Autoplay logic
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setProgress(0)
    }, duration)

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / (duration / 100)))
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [slides.length])

  return (
    <section className="w-full h-screen overflow-hidden">
      <div className="max-w-11/12 flex flex-col items-center mx-auto h-full">

      {/* Carousel dan progress bar */}
        <div className="flex-1 flex items-center justify-center">
          {/* Carousel gambar container */}
          <div className="absolute inset-0 -z-10">
            <Carousel opts={{ align: "center", loop: true }} >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem
                    key={index}
                    className={cn(
                      "flex items-center justify-center min-w-screen h-screen shrink-0 transition-opacity duration-700",
                      current === index ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                    )}
                  >
                    <div className="flex items-center justify-center">
                      <Card className="border-none shadow-none">
                        <CardContent>
                          <Image
                            src={slide.image} // URL gambar dari array slides
                            alt={`Slide ${index + 1}`}
                            fill
                            priority={index === 0} // optimasi untuk slide pertama
                            className="w-full h-full"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Progress bar di bawah carousel */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Breadcrumb di bawah progress bar */}
        <div className="mt-6 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-2 w-8 rounded-full transition-all cursor-pointer",
                index === current
                  ? "bg-white w-14"
                  : "bg-white/40 hover:bg-white/60"
              )}
              onClick={() => {
                setCurrent(index)
                setProgress(0)
              }}
            />
          ))}
        </div>

        {/* Berita di bawah carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mt-6">
          {[
            {
              title: "Lihat",
              desc: "Inovasi Terbaru",
              link: "/inovation",
            },
            {
              title: "Ikuti",
              desc: "Berita Terbaru",
              link: "/",
            },
            {
              title: "Kunjungi",
              desc: "Media Informasi Kami",
              link: "/",
            },
            {
              title: "Baca",
              desc: "Tentang Kami",
              link: "/",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-none bg-transparent hover:bg-white/50 transition rounded-none"
            >
              <CardContent className="text-black p-6">
                <Link
                  href={item.link}
                  className="text-lg font-semibold hover:text-blue-600 transition-colors"
                >
                  <div className="text-xl">
                      {item.title}
                  </div>
                  <div className="text-2xl">{item.desc}</div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
