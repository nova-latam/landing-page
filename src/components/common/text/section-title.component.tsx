import React from "react";
import { textSizes } from "./text-sizes.lib";
import { twMerge } from "tailwind-merge";

export default function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3
      className={twMerge(
        `font-bold text-primary-950 dark:text-primary-50 text-center ${textSizes["xl"]}`,
        className
      )}
    >
      {title}
    </h3>
  );
}
