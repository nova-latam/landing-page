"use client";

import React, { useEffect } from "react";

export default function DarkModeButton() {
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

  const colors= {
    light: "bg-primary-800 hover:bg-primary-800 focus:ring-primary-300 text-primary-50",
    dark: "dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-300 text-primary-50",
  };

  return (
    <button
      className={`focus:outline-none focus:ring-4 font-semibold rounded-full text-sm px-5 py-2.5 text-center ${colors.light} ${colors.dark}}`}
      onClick={toggleDarkMode}
    >
      Toggle Dark
    </button>
  );
}
