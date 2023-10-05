import React from "react";
import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";

export default function AboutUs() {
  return (
    <Section>
      <SectionTitle title={"¿Quiénes somos?"} />
      <SectionSubtitle subtitle={"Un ecosistema de aprendizaje y crecimiento"} />
    </Section>
  );
}
