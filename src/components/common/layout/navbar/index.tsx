"use client";

import React from "react";
import { Logo } from "@/components/common/logos";
import { menuItems } from "./navbar.lib";
import { Button } from "@/components/common/buttons";
import DesktopItems from "./items/desktop-items.component";
import DarkModeButton from "./buttons/dark-mode-button.component";
import ApplyButton from "./buttons/apply-button.component";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-screen">
      <nav className="p-4 flex w-full z-40 h-16 items-center justify-between fixed top-0 bg-primary dark:bg-primary-950 shadow-md">
        <Button aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}>
          -
        </Button>

        <DesktopItems menuItems={menuItems} />

        <div className="flex flex-row gap-2">
          <DarkModeButton />
          <ApplyButton />
        </div>
      </nav>
    </header>
  );
}
