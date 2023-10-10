"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { menuItems } from "./navbar.lib";
import { Button } from "@/components/common/buttons";
import DesktopItems from "./items/desktop-items.component";
import DarkModeButton from "./buttons/dark-mode-button.component";
import { LogoWords } from "@/components/common/logos";
import { HamburgerMenu } from "@/components/common/icons/navbar";
import { textSizes } from "@/components/common/text";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [background, setBackground] = React.useState(
    "bg-transparent dark:bg-transparent"
  );

  const [scroll, setScroll] = React.useState(0);
  // const [darkMode, setDarkMode] = React.useState(false);

  function handleScroll() {
    const newScroll = window.scrollY;
    setScroll(newScroll);
    if (newScroll > 50) {
      setBackground("bg-primary dark:bg-primary-1000");
    } else {
      setBackground("bg-transparent dark:bg-transparent");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     document.documentElement.classList.remove("light");
  //     setDarkMode(true);
  //   } else {
  //     document.documentElement.classList.add("light");
  //     document.documentElement.classList.remove("dark");
  //     setDarkMode(false);
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);

  //   if (darkMode) {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.theme = "light";
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.theme = "dark";
  //   }
  // };

  return (
    <header className="w-screen">
      <nav
        className={`px-4 sm:px-8 md:px-10 lg:px-24 w-screen z-40 h-16 flex flex-row items-center fixed top-0 bg-primary dark:bg-primary-1000 shadow-md transition-colors duration-1000 ${background}`}
      >
        <div className="w-[30%] md:[20%] flex justify-start items-center">
          <Link href={"/"}>
            <LogoWords isDark={true} />
          </Link>
        </div>

        <div className="w-[40%] md:w-[60%] flex justify-center items-center">
          <DesktopItems menuItems={menuItems} />
          <div className="flex sm:hidden justity-center items-center gap-2">
            <button className={"h-12 w-12"}>
              <HamburgerMenu />
            </button>
          </div>
        </div>

        <div className="w-[30%] md:[20%] flex flex-row gap-4 justify-end items-center">
          <span className="hidden md:block">
            {/* <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode} /> */}
          </span>
          <Link href={"https://forms.gle/v48Mjw5RXTApBeCK9"} target="_blank">
            <Button>
              <span className={textSizes.sm}>Únete</span>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
