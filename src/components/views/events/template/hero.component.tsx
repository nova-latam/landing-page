import React from "react";
import Countdown from "./countdown"
import { Section } from "@/components/common/containers";
import {
  SectionSubtitle,
  SectionTitle,
  textSizes,
} from "@/components/common/text";
import Link from "next/link";
import { Button } from "@/components/common/buttons";
import { TwoArrows } from "@/components/common/icons/events";

export default function Hero({
  title,
  subtitle,
  date,
  location,
  description,
  image,
  link,
}: any) {
  return (
    <Section className="bg-[url('/images/hero/bg.jpg')]">
      <SectionTitle title={title} className={`mb-4 ${textSizes["2xl"]}`} />
      <SectionSubtitle subtitle={subtitle} className={`mb-8 ${textSizes["xl"]}`}/>
      <Countdown date={date}/>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Link
          className="mt-9"
          href={"https://forms.gle/Kjhukr1uzwgUDW4Q8"}
          target="_blank"
        >
          <Button className={`${textSizes.md} rounded-2xl px-6 py-3`}>
            Regístrate
          </Button>
        </Link>
      </div>
      <Link
        href={"#sobre-el-evento"}
        className="absolute bottom-8 animate-bounce"
      >
        <TwoArrows className="text-primary-50 dark:text-primary-50 " />
      </Link>
    </Section>
  );
}
