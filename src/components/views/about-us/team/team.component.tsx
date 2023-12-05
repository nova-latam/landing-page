"use client";

import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/people/team";

import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import { Section } from "@/components/common/containers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";

export default function Team() {
  return (
    <Section>
      <SectionTitle title={"Nuestro Equipo"} />
      <SectionSubtitle subtitle={"Personas apasionadas por cambiar el mundo"} 
      className="mb-4"/>
      <div className="flex flex-row gap-5 justify-center flex-wrap mt-2 md:mt-4 lg:mt-6">
        {teamMembers.map((member) => (
          <Card key={`team-${member.name}`} className="w-72">
            <CardHeader className="items-center">
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="">{member.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <Image
                src={member.img}
                width={100}
                height={100}
                className="w-40 h-40 md:w-60 md:h-60 text-large rounded-full"
                alt={`${member.name} picture`}
              />
            </CardContent>
            <CardFooter className="flex-col justify-center">
              <div className="w-full flex justify-center">
                <Link
                  key={nanoid()}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="" />
                </Link>
              </div>
              <p className="mt-2 italic text-center">&quot;{member.bio}&quot;</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
