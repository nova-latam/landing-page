import React from "react";

import { textSizes } from "./text-sizes.lib";
import { twMerge } from "tailwind-merge";

export default function SectionSubtitle({
  subtitle,
  className,
}: {
  subtitle: string;
  className?: string;
}) {
  return (
    <h2
      className={twMerge(
        `font-medium text-primary-900 dark:text-primary-100 text-center ${textSizes["lg"]}`,
        className
      )}
    >
      {subtitle}
    </h2>
  );
}
