import Link from "next/link";
import React from "react";

export default function ApplyButton() {
  const colors = {
    light:
      "bg-primary-800 hover:bg-primary-800 focus:ring-primary-300 text-primary-50",
    dark: "dark:bg-primary dark:hover:bg-primary-700 dark:focus:ring-primary-300 text-primary-50",
  };

  return (
    <Link href={"/postulaciones"}>
      <button
        className={`focus:outline-none focus:ring-4 font-semibold rounded-full text-md px-4 py-2 text-center ${colors.light} ${colors.dark}`}
      >
        Postula
      </button>
    </Link>
  );
}
