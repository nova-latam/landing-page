import React from "react";
import { Section } from "@/components/common/containers";
import { SectionTitle, SectionSubtitle } from "@/components/common/text";

export default function Applications() {
  return (
    <Section className="bg-[url('/images/hero/bg.jpg')]">
      <SectionTitle title={"Postulaciones"} />
      <SectionSubtitle subtitle={"En construcción..."} />
    </Section>
  );
}
