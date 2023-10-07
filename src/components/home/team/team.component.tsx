"use client";

import React from "react";
import { nanoid } from "nanoid";

import TeamCard from "./team-card.component";
import { teamMembers } from "./team.lib";

import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import { Section } from "@/components/common/containers";

export default function Team() {
  return (
    <Section>
      <SectionTitle title={"Nuestro Equipo"} />
      <SectionSubtitle subtitle={"Personas apasionadas"} />
      <div className="flex flex-row justify-center flex-wrap gap-6">
        {teamMembers.map((member) => (
          <TeamCard member={member} key={nanoid()} />
        ))}
      </div>
    </Section>
  );
}
