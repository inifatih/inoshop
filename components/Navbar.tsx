"use client"

import Link from "next/link"
import * as React from "react"
import { motion } from "framer-motion"
import { Lightbulb, FlaskConical, BookOpen, Box, CircleUser, Megaphone, CalendarDays } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { useIsMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useIsMobile()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Inoshop
        </Link>

        {/* Navigation */}
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="flex-wrap">

            {/* ===========================
                Innovation Marketplace
            ============================ */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Innovation Marketplace
              </NavigationMenuTrigger>

              <MenuContent>
                <MenuList>
                  <ListItem
                    href="#"
                    title="Approved Innovations"
                  >
                    <span className="block text-xs text-muted-foreground">
                      Katalog inovasi terbaru yang sudah diverifikasi dan dikurasi 
                      dari berbagai bidang teknologi dan riset terapan.
                    </span>
                  </ListItem>

                  <ListItem href="#" title="Innovation Matching">
                      Sistem pencocokan inovasi yang menghubungkan industri dengan solusi riset dan teknologi.
                  </ListItem>

                  <ListItem href="#" title="Innovation Funding">
                    Informasi pendanaan, hibah, dan program akselerasi untuk pengembangan inovasi.
                  </ListItem>
                </MenuList>
              </MenuContent>
            </NavigationMenuItem>

            {/* ===========================
                Research Partner
            ============================ */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-sky-500" />
                Research Partner
              </NavigationMenuTrigger>

              <MenuContent>
                <MenuList>
                  <ListItem href="#" title="Technology Needs">
                    Daftar kebutuhan teknologi dari industri, pemerintah, atau organisasi yang mencari solusi spesifik.
                  </ListItem>

                  <ListItem href="#" title="Technology Offers">
                    Katalog penawaran teknologi dari tim riset, laboratorium, startup, atau inventor, termasuk prototipe, metode, AI model, dan solusi.
                  </ListItem>

                  <ListItem
                    href="#"
                    title="Innovator & Expert Directory"
                  >
                    Basis data ahli, peneliti, dan inovator yang siap terlibat dalam kolaborasi penelitian, dan konsultasi teknologi.
                  </ListItem>
                </MenuList>
              </MenuContent>
            </NavigationMenuItem>

            {/* ===========================
                NEWS & EVENTS
            ============================ */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-gray-600" />
                News & Events
              </NavigationMenuTrigger>

              <MenuContent>
                <MenuList>
                  <ListItem href="#" title="News & Media">
                    Berita dan publikasi terbaru seputar kegiatan kami.
                  </ListItem>

                  <ListItem href="#" title="Events">
                    Informasi mengenai acara, workshop, dan agenda kegiatan yang akan datang.
                  </ListItem>

                  <ListItem href="#" title="Gallery">
                    Koleksi foto dan dokumentasi kegiatan.
                  </ListItem>
                </MenuList>
              </MenuContent>
            </NavigationMenuItem>

            {/* ===========================
                Product Development
            ============================ */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-gray-100/70"
                >
                  <Megaphone className="w-4 h-4 text-orange-500" />
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* ===========================
                About Us
            ============================ */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-gray-100/70"
                >
                  <CircleUser className="w-4 h-4 text-emerald-500" />
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
/* ===================================================
   Minimal Premium: NavigationMenuContent
=================================================== */
function MenuContent({ children }: { children: React.ReactNode }) {
  return (
    <NavigationMenuContent
      className="
        rounded-xl 
        p-5
        bg-white/80
        backdrop-blur-lg
        border border-gray-200/50
        shadow-lg
      "
      
    >
      {children}
    </NavigationMenuContent>
  );
}

/* ===================================================
   Minimal Premium: Menu List Wrapper
=================================================== */
function MenuList({ children }: { children: React.ReactNode }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="grid gap-4 w-[320px] md:w-[380px]"
    >
      {children}
    </motion.ul>
  );
}

/* ===================================================
   Minimal Premium: ListItem Component
=================================================== */
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="
            group 
            block 
            rounded-lg 
            p-3 
            transition-all
            hover:bg-gray-100/70
          "
        >
          {/* Title */}
          <div
            className="
              text-sm 
              font-medium
              group-hover:font-semibold
              transition-all
            "
          >
            {title}
          </div>

          {/* Description */}
          <p
            className="
              text-xs 
              text-gray-500
              mt-0.5
              leading-snug
              group-hover:text-gray-700
              transition-colors
              line-clamp-2
            "
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
