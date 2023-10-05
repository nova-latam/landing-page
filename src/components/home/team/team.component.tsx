"use client";

import React from "react";
import { nanoid } from "nanoid";

import TeamCard from "./team-card.component";
import { teamMembers } from "./team.lib";

export default function Team() {
  return (
    <section className="min-h-screen min-w-screen flex flex-col justify-center items-center p-6 gap-4">
      <p className="text-4xl font-bold">Nuestro Equipo</p>
      <p className="text-xl font-medium mb-4">Personas apasionadas</p>
      <div className="flex flex-row justify-center flex-wrap gap-6">
        {teamMembers.map((member) => (
          <TeamCard member={member} key={nanoid()} />
        ))}
      </div>
    </section>
  );
}
