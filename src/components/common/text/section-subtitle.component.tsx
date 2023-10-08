import React from "react";

import { textSizes } from "./text-sizes.lib";

export default function SectionSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <h2
      className={`font-medium text-primary-900 dark:text-primary-100 text-center ${textSizes.lg}`}
    >
      {subtitle}
    </h2>
  );
}
