import React from "react";
import { Section } from "@/components/common/containers";
import { SectionTitle, SectionSubtitle } from "@/components/common/text";

export default function Hero() {
  return (
    <Section>
      <SectionTitle title={"Sobre Nosotros"} />
      <SectionSubtitle subtitle={"No dudes en contactarnos"} />
    </Section>
  );
}
