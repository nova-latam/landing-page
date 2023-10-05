import React from "react";

export default function SectionTitle({ subtitle }: { subtitle: string }) {
  return <p className="text-xl font-medium mb-4">{subtitle}</p>;
}
