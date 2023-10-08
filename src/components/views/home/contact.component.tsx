import React from "react";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import { Section } from "@/components/common/containers";

export default function Contact() {
  return (
    <Section>
      <SectionTitle title={"¿Cómo podemos ayudarte?"} />
      <SectionSubtitle subtitle={"No dudes en contactarnos"} />
    </Section>
  );
}
