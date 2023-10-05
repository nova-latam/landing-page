"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/logos";
import { nanoid } from "nanoid";
import { menuItems } from "./navbar.lib";
import { Button } from "@/components/common/buttons";
import DesktopItems from "./desktop-items.component";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header>
      <nav className="flex z-40 h-16 items-center justify-between sticky top-0 bg-primary-50 dark:bg-primary-950">
        <Button aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}>
          -
        </Button>

        <DesktopItems menuItems={menuItems} />

        <Link href={"postulaciones"}>
          <Button variant="alternative">Postúlate</Button>
        </Link>
      </nav>
    </header>
  );
}
