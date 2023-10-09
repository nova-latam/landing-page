import React from "react";

import { EventTemplate } from "@/components/views/events";

const eventData = {
  title: "Encuentro juvenil de emprendedores",
  subtitle: "Participación de empresarios juveniles",
  day: "11",
  month: "Octubre",
  year: "2023",
  hour: "16h30",
  location: "Escuela Politécnica Nacional",
  locationAddress: "Toledo y Madrid",
  locationSpace: "Auditorio 1",
  locationURL: "https://maps.app.goo.gl/ZtTPK9c8cUb71gjJ8",
  date: "Octubre 11, 2023, 16:30:00",
};

export default function Eventos() {
  return (
    <>
      <EventTemplate eventData={eventData} />
    </>
  );
}
