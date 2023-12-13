import React from "react";
import { Section } from "@/components/common/containers";
import { SectionTitle, SectionSubtitle } from "@/components/common/text";
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

export default function Hero() {
  return (
    <Section className="bg-[url('/images/hero/bg.jpg')]">
      <SectionTitle title={"Recursos"} />
      <SectionSubtitle subtitle={"Mira lo que está disponible para ti"} />

      <div className="mt-10 flex gap-4 flex-wrap justify-center">

        <Card className="w-72 hover:scale-105 transition-all duration-300" key={"pasantias"}>
          <Link href="/pasantias" target="_blank" rel="norefer noopener">
            <CardHeader className="items-center">
              <CardTitle className="h-12 flex justify-center items-center text-center">
                Pasantias
              </CardTitle>
              <CardDescription className="text-justify line-clamp-3">
              <Image
                  src="/images/resources/icons8-internship-100.png"
                  alt="Pasantias"
                  height={100}
                  width={100}
                  className="w-20 object-cover rounded-md"
                  key={"pasantias"}
                />
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>


        <Card className="w-72 hover:scale-105 transition-all duration-300" key={"fondos"}>
          <Link href="/fondos" target="_blank" rel="norefer noopener">
            <CardHeader className="items-center">
              <CardTitle className="h-12 flex justify-center items-center text-center">
                Fondos/Apoyo Económico
              </CardTitle>
              <CardDescription className="text-justify line-clamp-3">
              <Image
                  src="/images/resources/icons8-funding-64.png"
                  alt="Fondos"
                  height={100}
                  width={100}
                  className="w-20 object-cover rounded-md"
                  key={"fondos"}
                />
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

      </div>
    </Section>
  );
}
