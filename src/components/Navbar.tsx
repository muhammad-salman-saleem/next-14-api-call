"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home"/>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Categories">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/movies/animation">Animation</HoveredLink>
            <HoveredLink href="/movies/classic">Clasic</HoveredLink>
            <HoveredLink href="/movies/comedy">Comedy</HoveredLink>
            <HoveredLink href="/movies/drama">Drama</HoveredLink>
            <HoveredLink href="/movies/horror">Horror</HoveredLink>
            <HoveredLink href="/movies/family">Family</HoveredLink>
            <HoveredLink href="/movies/mystery">Mystery</HoveredLink>
            <HoveredLink href="/movies/western">Western</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contect"}>
        <MenuItem setActive={setActive} active={active} item="Contect Us"/>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
