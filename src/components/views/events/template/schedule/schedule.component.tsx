import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import React from "react";
import { Conference } from "../types/schedule.type";
import ConferenceCard from "./cards/conference.component";
import { nanoid } from "nanoid";

export default function Schedule({
  conferences,
}: {
  conferences: Conference[];
}) {
  return (
    <Section>
      <SectionTitle title="Cronograma" />
      <SectionSubtitle subtitle="Miércoles, 11 de Octubre" className="mt-2" />

      <table className="table-auto text-primary-1000 dark:text-primary-0">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Ponente</th>
            <th>Inicio</th>
            <th>Final</th>
          </tr>
        </thead>
        <tbody className="text-primary-950 dark:text-primary-50">
          {conferences.map((conference) => (
            <tr key={nanoid()}>
              <td>{conference.name}</td>
              <td>
                {conference.speakers?.map((speaker) => (
                  <span key={nanoid()} className="">
                    <p>{speaker.name}</p>
                    <p>{speaker.position}</p>
                  </span>
                ))}
              </td>
              <td>{conference.startTime}</td>
              <td>{conference.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="grid grid-row grid-cols-3 mt-8 divide-x">
        {conferences.map((conference) => (
          <ConferenceCard key={nanoid()} conference={conference} />
        ))}
      </div> */}
    </Section>
  );
}
