"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-16 shadow bg-white/90 backdrop-blur fixed flex justify-center items-center px-5 xl:px-0 z-50">
      <div className="w-[70rem] flex justify-between items-center">
        <Link
          href={"/"}
          className="w-24 flex items-center gap-2 cursor-pointer"
        >
          <Image
            src="/images/logo-klaten.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="object-cover w-7 h-auto"
          />
          <h1 className="font-black text-zinc-700 text-xl tracking-tighter leading-4">
            Desa Jetis
          </h1>
        </Link>
        <div className="flex items-center">
          <ul className="gap-10 text-zinc-600 text-lg font-medium hidden lg:flex">
            <Link href={"/"}>
              <li>Beranda</li>
            </Link>
            <Link href={"/profile"}>
              <li>Profil Desa</li>
            </Link>
            <Link href={"/news"}>
              <li className="relative">
                Berita
                <span className="h-4 px-1 text-white rounded-full flex items-center text-[10px] absolute bg-red-400 font-bold -right-4 -top-2">
                  News
                </span>
              </li>
            </Link>
            <Link href={"/#tentangkami"}>
              <li>UMKM</li>
            </Link>
          </ul>
        </div>
        <div className="md:flex hidden">
          <Button>Hubungi</Button>
        </div>
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden bg-white border-0 w-full"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="flex flex-col">
              <ul className="space-y-8 text-zinc-600 text-lg font-medium">
                <Link href={"/"}>
                  <li>Beranda</li>
                </Link>
                <Link href={"/profile"}>
                  <li>Profil Desa</li>
                </Link>
                <Link href={"/news"}>
                  <li className="relative">
                    Berita
                    <span className="h-4 px-1 text-white rounded-full flex items-center text-[10px] absolute bg-red-400 font-bold -right-4 -top-2">
                      News
                    </span>
                  </li>
                </Link>
                <Link href={"/#tentangkami"}>
                  <li>UMKM</li>
                </Link>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
