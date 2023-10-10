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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31918.333648376865!2d-78.5248454!3d-0.2092757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a10272763ed%3A0x9061a4db6b6ed50c!2sCenter%20for%20Continuing%20Education%20-EPN!5e0!3m2!1sen!2sec!4v1696830046829!5m2!1sen!2sec"
        className="w-56 h-56 md:w-96 md:h-96 rounded-2xl mt-4"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Section>
  );
}
