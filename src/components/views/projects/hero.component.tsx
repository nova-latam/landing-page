import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { eventsData } from "@/lib/projects/projects.data";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <Section className={"bg-[url('/images/hero/bg.jpg')]"}>
      <SectionTitle title="Proyectos" />
      <SectionSubtitle subtitle="Para mejorar el mundo" />
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        {eventsData.map((event) => (
          <Card
            key={nanoid()}
            className="w-72 hover:scale-105 transition-all duration-300"
          >
            <Link href={event.link} target="_blank" rel="norefer noopener">
              <CardHeader className="items-center">
                <CardTitle className="h-12 flex justify-center items-center text-center">
                  {event.name}
                </CardTitle>
                <CardDescription className="text-justify line-clamp-3">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <Image
                  src={event.cover}
                  alt=""
                  height={400}
                  width={400}
                  className="w-60 h-60 object-cover rounded-md"
                />
              </CardContent>
              <CardFooter className="text-center italic justify-center">
                {event.reach}
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
