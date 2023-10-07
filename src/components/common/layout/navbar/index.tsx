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
      <nav className="p-4 w-full z-40 h-16 grid grid-cols-[1fr,3fr,1fr] justify-center content-center fixed top-0 bg-primary dark:bg-primary-950 shadow-md">
        <div className="col-start-1 col-end-1">
          <Button aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}>
            -
          </Button>
        </div>

        <div className="col-span-3 px-24">
          <DesktopItems menuItems={menuItems} />
        </div>

        <div className="flex flex-row gap-2 col-start-5 col-end-5">
          <DarkModeButton />
          <ApplyButton />
        </div>
      </nav>
    </header>
  );
}
