import React from "react";
import { textSizes } from "./text-sizes.lib";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h3
      className={`font-bold text-primary-950 dark:text-primary-50 text-center ${textSizes.xl}`}
    >
      {title}
    </h3>
  );
}
