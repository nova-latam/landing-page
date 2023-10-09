"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  onClick,
  className,
  children,
  variant = "primary",
}: {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const colors = {
    primary: {
      light:
        "bg-primary-500 hover:bg-primary-600 text-primary-50",
      dark: "dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-600 text-primary-50",
    },
    secondary: {
      light:
        "bg-primary-800 hover:bg-primary-900 text-primary-50",
      dark: "dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-600 text-primary-50",
    },
  };

  return (
    <button
      className={twMerge(
        `focus:outline-none font-semibold rounded-full px-4 py-2 text-center ${colors[variant].light} ${colors[variant].dark}`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
