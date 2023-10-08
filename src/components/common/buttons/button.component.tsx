"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  onClick,
  className,
  children,
}: {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  const colors = {
    light:
      "bg-primary-800 hover:bg-primary-900 focus:ring-primary-700 text-primary-50",
    dark: "dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-600 text-primary-50",
  };

  return (
    <button
      className={twMerge(
        `focus:outline-none font-semibold rounded-full px-4 py-2 text-center ${colors.light} ${colors.dark}`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
