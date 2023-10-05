import React from "react";

export default function Button({
  variant = "primary",
  children,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "alternative";
  onClick?: () => void;
}) {
  const textColors = {};

  const colors = {
    primary: {
      light:
        "bg-primary-800 hover:bg-primary-800 focus:ring-primary-300 text-primary-50",
      dark: "dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-300 text-primary-50",
    },
    secondary: {
      light:
        "bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 text-primary-950",
      dark: "dark:bg-primary-50 dark:hover:bg-primary-200 dark:focus:ring-primary-100 text-primary-950",
    },
    alternative: {
      light:
        "bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 text-primary-950",
      dark: "dark:bg-primary-50 dark:hover:bg-primary-200 dark:focus:ring-primary-100 text-primary-950",
    },
  };

  return (
    <button
      className={`focus:outline-none focus:ring-4 font-semibold rounded-full text-sm px-5 py-2.5 text-center ${colors[variant].light} ${colors[variant].dark}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
