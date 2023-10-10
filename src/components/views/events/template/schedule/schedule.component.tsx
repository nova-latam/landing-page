import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import React from "react";
import { Conference } from "../types/schedule.type";
import ConferenceCard from "./cards/conference.component";
import { nanoid } from "nanoid";

export default function Schedule({
  conferences,
}: {
  conferences: Conference[];
}) {
  return (
    <Section>
      <SectionTitle title="Cronograma" />
      <SectionSubtitle subtitle="Miércoles, 11 de Octubre" className="mt-2" />

      <div className="grid grid-row gap-6 mt-8">
        {conferences.map((conference) => (
          <ConferenceCard key={nanoid()} conference={conference} />
        ))}
      </div>
    </Section>
  );
}
