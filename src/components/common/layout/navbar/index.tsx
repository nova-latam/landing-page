"use client";

import React, { useEffect } from "react";
import { menuItems } from "./navbar.lib";
import { Button } from "@/components/common/buttons";
import DesktopItems from "./items/desktop-items.component";
import DarkModeButton from "./buttons/dark-mode-button.component";
import ApplyButton from "./buttons/apply-button.component";
import { LogoWords } from "@/components/common/logos";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setDarkMode(true);
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);

    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <header className="w-screen">
      <nav className="p-4 w-full z-40 h-16 grid grid-cols-[1fr,3fr,1fr] justify-center content-center fixed top-0 bg-primary dark:bg-primary-1000 shadow-md">
        <div className="flex justify-center items-center col-start-1 col-end-1">
          <Link href={"/"}>
            <LogoWords isDark={darkMode} />
          </Link>
          <div className="flex sm:hidden">
            <Button aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}>
              -
            </Button>
          </div>
        </div>

        <div className="col-span-3 px-24 flex items-center">
          <DesktopItems menuItems={menuItems} />
        </div>

        <div className="flex flex-row gap-2 col-start-5 col-end-5 justify-center items-center">
          <DarkModeButton onClick={toggleDarkMode} />
          <ApplyButton />
        </div>
      </nav>
    </header>
  );
}
