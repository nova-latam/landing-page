import React from "react";
import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";

export default function AboutUs() {
  return (
    <Section>
      <SectionTitle title={"Sobre Nosotros"} />
      <SectionSubtitle subtitle={"¿Quiénes somos?"} />
    </Section>
  );
}
