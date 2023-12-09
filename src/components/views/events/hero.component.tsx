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
import { eventsData } from "@/lib/events/events.data";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <Section className={"bg-[url('/images/hero/bg.jpg')]"}>
      <SectionTitle title="Eventos" />
      <SectionSubtitle subtitle="Alcanza tu siguiente nivel" />
      <div className="mt-10 flex gap-4">
        {eventsData.map((event) => (
          <Card key={nanoid()} className="w-72">
            <Link href={event.link} target="_blank">
              <CardHeader>
                <CardTitle className="text-center">{event.name}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={""} alt="" height={200} width={200} className="" />
              </CardContent>
              <CardFooter></CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
