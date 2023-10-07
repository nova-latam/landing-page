import React from "react";

import Text from "./text.component";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Text className="font-bold text-primary-950 dark:text-primary-50" size="2xl">
      {title}
    </Text>
  );
}
