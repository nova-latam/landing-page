import React from "react";

export default function Button({
  variant = "primary",
  children,
  ...props
}: {
  variant?: "primary" | "secondary" | "alternative";
  children: React.ReactNode;
}) {
  const textColors = {};

  const colors = {
    primary: {
      light:
        "bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 text-primary-50",
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
      className={`text-contrast focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ${colors[variant].light} ${colors[variant].dark}`}
      {...props}
    >
      {children}
    </button>
  );
}
