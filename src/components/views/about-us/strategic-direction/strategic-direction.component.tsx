import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import React from "react";
import Card from "./card.component";

import { mission, vision, values } from "@/lib/about-us/about-us.data";

export default function StrategicDirection() {
  return (
    <>
      <Section>
        <SectionTitle title={"Nuestra Misión"} />
        <SectionSubtitle subtitle={"Construir un mundo mejor"} />

        <div className="flex flex-col gap-8 mt-8">
          <Card title={"Misión"} description={mission.text} image={mission.image} />
          <Card
            title={"Visión"}
            description={vision.text}
            image={vision.image}
            className="md:flex-row-reverse"
          />
        </div>
      </Section>
    </>
  );
}
