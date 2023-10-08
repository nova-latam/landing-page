"use client";

import React, { useEffect } from "react";

export default function Button({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const colors = {
    light:
      "bg-primary-800 hover:bg-primary-800 focus:ring-primary-700 text-primary-50",
    dark: "dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-600 text-primary-50",
  };

  return (
    <button
      className={`focus:outline-none focus:ring-4 font-semibold rounded-full px-5 py-2 text-center ${colors.light} ${colors.dark}}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
