"use client";

import React from "react";
import { nanoid } from "nanoid";

import TeamCard from "./team-card.component";
import { teamMembers } from "@/lib/people/team";

import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import { Section } from "@/components/common/containers";

export default function Team() {
  return (
    <Section>
      <SectionTitle title={"Nuestro Equipo"} />
      <SectionSubtitle subtitle={"Personas apasionadas"} />
      <div className="flex flex-row gap-5 justify-center flex-wrap mt-2 md:mt-4 lg:mt-6">
        {teamMembers.map((member) => (
          <TeamCard member={member} key={nanoid()} />
        ))}
      </div>
    </Section>
  );
}
