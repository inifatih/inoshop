"use client"

import Link from "next/link"
import * as React from "react"
import { useState } from "react"

import { logoutAction } from "@/app/authentication/logout/action"
import { LoginDialog } from "@/components/auth/LoginDialog"
import { RegisterDialog } from "@/components/auth/RegisterDialog"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "./ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "News and Media",
    href: "/news",
    description:
      "Berita terbaru dan informasi media terkini seputar inovasi dan teknologi.",
  },
  {
    title: "Calendar of Events",
    href: "/events",
    description:
      "Daftar acara mendatang, seminar, dan workshop terkait inovasi.",
  },
  // {
  //   title: "Media Gallery",
  //   href: "/media",
  //   description: "Temukan berbagai galeri media inovasi kami yang memiliki banyak manfaat.",
  // }
]

export default function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleLogout = async () => {
    await logoutAction();
    window.location.href = "/";
  };

  const isMobile = useIsMobile()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 shadow-lg">
      <div className="mx-auto flex max-w-11/12 items-center justify-between px-2 py-4 md:px-4">

        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold">
          Inoshop
        </Link>

        {/* Navigation menu */}
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="flex-wrap">
            {/* Inovasi */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-white/50">Innovation Marketplace</NavigationMenuTrigger>
              <NavigationMenuContent className="border border-none backdrop-blur-md">
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-5">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6 hover:bg-white/50"
                        href="/innovation"
                      >
                        <div className="mb-2 text-2xl font-medium sm:mt-4">
                          All Innovation
                        </div>
                        <p className="text-muted-foreground leading-tight">
                          Temukan semua Inovasi BRIDA Jawa Timur dari berbagai kategori.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Technology" className="hover:bg-white/50 transition rounded">
                    Inovasi dengan kategori Teknologi.
                  </ListItem>
                  <ListItem href="#" title="Agriculture" className="hover:bg-white/50 transition rounded">
                    Inovasi dengan kategori Agrikultur.
                  </ListItem>
                  <ListItem href="#" title="Energy" className="hover:bg-white/50 transition rounded">
                    Inovasi dengan kategori Energi.
                  </ListItem>
                  <ListItem href="#" title="Health" className="hover:bg-white/50 transition rounded">
                    Inovasi dengan kategori Kesehatan.
                  </ListItem>
                  <ListItem href="#" title="Transportation" className="hover:bg-white/50 transition rounded">
                    Inovasi dengan kategori Transportation.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Berita dan Acara */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-white/50">News & Events</NavigationMenuTrigger>
              <NavigationMenuContent className="border border-none backdrop-blur-md">
                <ul className="grid sm:w-[300px] gap-2 md:w-[400px] lg:w-[500px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className="hover:bg-white/50 transition rounded"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="hover:bg-white/50">Events</NavigationMenuTrigger>
              <NavigationMenuContent className="border border-none backdrop-blur-md">
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            
            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about" className="hover:bg-white/50">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact" className="hover:bg-white/50">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Profile */}
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className="hover:bg-white/50">Profile</NavigationMenuTrigger>
              <NavigationMenuContent className="border border-none backdrop-blur-md">
                <ul className="grid w-fit gap-4">
                  <li>
                    <Button
                      variant="ghost"
                      className="w-full hover:bg-white/50 font-medium justify-start"
                      onClick={() => setOpenLogin(true)}
                    >
                      Masuk
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full hover:bg-white/50 font-medium justify-start"
                      onClick={() => setOpenRegister(true)}
                    >
                      Register
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full hover:bg-white/50 font-medium justify-start"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <LoginDialog open={openLogin} onOpenChange={setOpenLogin}/>
        <RegisterDialog open={openRegister} onOpenChange={setOpenRegister}/>
      </div>
    </nav>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
