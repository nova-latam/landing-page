import { Section } from "@/components/common/containers";
import { CalendarIcon } from "@/components/common/icons/events";
import {
  SectionSubtitle,
  SectionTitle,
  textSizes,
} from "@/components/common/text";
import React from "react";
import { EventData } from "./types/event.type";
import { Schedule } from "./schedule";
import { nanoid } from "nanoid";
import ConferenceCard from "./schedule/cards/conference.component";

export default function About({ eventData }: { eventData: EventData }) {
  const {
    about: { title },
  } = eventData;
  return (
    <Section id="sobre-el-evento">
      <SectionTitle title={title} className="mb-10" />
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-2 lg:gap-4">
        <div className="md:w-1/2">
          <article className="px-8 flex flex-col justify-center items-center h-full gap-4 md:gap-8">
            <div
              className={`text-justify text-primary-1000 dark:text-primary-50 ${textSizes.md}`}
            >
              Este evento está diseñado para facilitar la participación de
              jóvenes emprendedores y desarrollar una agenda que brinde
              beneficios sustanciales a la comunidad empresarial.
              <br />
              <br />
              Destacados ponentes principales, talleres interactivos y sesiones de
              presentación ofrecerán a los asistentes una oportunidad única para
              ampliar sus conocimientos y establecer conexiones dentro del
              ecosistema empresarial.
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31918.333648376865!2d-78.5248454!3d-0.2092757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a10272763ed%3A0x9061a4db6b6ed50c!2sCenter%20for%20Continuing%20Education%20-EPN!5e0!3m2!1sen!2sec!4v1696830046829!5m2!1sen!2sec"
              className="w-56 h-32 md:w-96 md:h-48 rounded-2xl mt-4"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              {/* <div className="text-primary-50 flex flex-col md:flex-row gap-4 items-center">
            <CalendarIcon className="w-20 h-20" />
            <div>
              <p
                className={`${textSizes.md} text-primary-1000 dark:text-primary-50 font-semibold`}
              >{`${day} de ${month}, ${year}`}</p>
              <p className={`${textSizes.sm} text-primary-950 dark:text-primary-100 font-medium`}>{hour}</p>
            </div>
          </div> */}
            </div>
          </article>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <SectionTitle title="Cronograma" className="mb-4" />
          <SectionSubtitle
            subtitle="Miércoles, 11 de Octubre"
            className="mb-4 md:mb-8"
          />

          <div className="flex flex-col w-full gap-5">
            {eventData.conferences.map((conference) => (
              <ConferenceCard key={nanoid()} conference={conference} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
