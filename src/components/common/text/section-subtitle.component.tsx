import React from "react";

import Text from "./text.component";

export default function SectionSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <Text
      className="font-medium mb-4 text-primary-900 dark:text-primary-100"
      size="lg"
    >
      {subtitle}
    </Text>
  );
}
