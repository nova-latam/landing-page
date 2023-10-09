import { Section } from "@/components/common/containers";
import { CalendarIcon } from "@/components/common/icons/events";
import {
  SectionSubtitle,
  SectionTitle,
  textSizes,
} from "@/components/common/text";
import React from "react";
import { EventData } from "./types/event.type";

export default function About({ eventData }: { eventData: EventData }) {
  const {
    title,
    subtitle,
    location,
    locationSpace,
    locationAddress,
    day,
    hour,
    month,
    year,
  } = eventData;
  return (
    <Section id="sobre-el-evento">
      <SectionTitle title={title} className="mb-4" />
      <SectionSubtitle subtitle={subtitle} className="mb-2 md:mb-8" />
      <article className="p-4 flex flex-col md:flex-row justify-center items-start h-full gap-8">
        <div
          className={`w-full md:w-1/2 text-justify text-primary-1000 dark:text-primary-50 ${textSizes.sm}`}
        >
          Ven, acompáñanos a este encuentro con el objetivo de fomentar la
          participación de empresarios juveniles, construiremos una agenda que
          beneficie a los emprendedores del país
          <br />
          <br />
          Aprovecha este espacio para relacionarte con otros empresarios como tú
          y generar una red de contactos estratégicos.
        </div>
        <div className="w-full md:w-1/2 flex flex-row md:flex-col justify-center items-center gap-4">
          <div className="text-primary-50 flex flex-col md:flex-row items-center">
            <CalendarIcon className="w-20 h-20" />
            <div>
              <p
                className={`${textSizes.md}`}
              >{`${day} de ${month}, ${year}`}</p>
              <p className={`${textSizes.sm}`}>{hour}</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31918.333648376865!2d-78.5248454!3d-0.2092757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a10272763ed%3A0x9061a4db6b6ed50c!2sCenter%20for%20Continuing%20Education%20-EPN!5e0!3m2!1sen!2sec!4v1696830046829!5m2!1sen!2sec"
            className="w-1/2 md:w-full h-48 rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </article>
    </Section>
  );
}
