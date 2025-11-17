// components/Section1.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Layers of London",
    description:
      "Layers of London is a ground-breaking crowd-sourced mapping project that charts the rich layers of London's past.",
    image:
      "/images/Acer1.jpg",
  },
  {
    title: "Victoria County History",
    description:
      "The Victoria County History is one of the world's longest-running research projects, exploring England's rich local history.",
    image:
      "/images/Acer2.jpg",
  },
  {
    title: "Red Boxes Gallery",
    description:
      "To celebrate the VCH’s 120th anniversary in 2019, counties filled a special VCH Red Box with historical objects.",
    image:
      "/images/Acer1.jpg",
  },
  {
    title: "Historical Archives",
    description:
      "A digital collection preserving the stories and documents of England’s communities for future generations.",
    image:
      "/images/Acer2.jpg",
  },
]

export default function Events() {
  return (
    <main>
        <section className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
					<Image
							src="/images/Acer1.jpg"
							alt="Innovation Cover"
							fill
							className="object-cover brightness-75"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
							<h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-md">Events</h1>
							<p className="text-lg sm:text-xl max-w-2xl drop-shadow-sm">
								Temukan acara - acara menarik yang ingin kamu ikuti.
							</p>
					</div>
        </section>
        <section className="w-full h-screen py-20 bg-white">
					<div className="max-w-11/12 mx-auto">
							{/* Heading */}
							<h2 className="text-4xl font-bold tracking-tight text-[#1A1333] mb-12">
							Events
							</h2>

							{/* Grid layout */}
							<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
							{projects.map((project, index) => (
									<Card
									key={index}
									className="overflow-hidden border-0 shadow-none hover:shadow-md transition-shadow duration-300"
									>
									<div className="relative w-full h-56">
											<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover"
											/>
									</div>
									<CardHeader className="pb-2">
											<CardTitle className="text-lg font-semibold text-[#1A1333]">
											{project.title}
											</CardTitle>
									</CardHeader>
									<CardContent>
											<p className="text-sm text-gray-600 mb-3">
											{project.description}
											</p>
									</CardContent>
									</Card>
							))}
							</div>
					</div>
        </section>
    </main>
    
  )
}
