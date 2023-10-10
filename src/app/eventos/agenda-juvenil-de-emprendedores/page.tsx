import React from "react";

import { EventTemplate } from "@/components/views/events";
import { EventData } from "@/components/views/events/template/types/event.type";
import { Speaker } from "@/components/views/events/template/types/schedule.type";

const speakers = {
  CarlosZaldumbide: {
    name: "Carlos Zaldumbide",
    position: "Director Ejecutivo CCQ",
    bio: "",
    image:
      "/images/events/agenda-juvenil-de-emprendimiento/speakers/carlos-zaldumbide.jpg",
    url: "",
  },
};

const eventData: EventData = {
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
  conferences: [
    {
      name: "Recepción de Invitados",
      description: "",
      startTime: "16h30",
      endTime: "16h30",
      speakers: [speakers.CarlosZaldumbide],
    },
    {
      name: "Bienvenida",
      description: "",
      startTime: "16h30",
      endTime: "16h30",
    },
    {
      name: "Panelistas",
      description: "",
      startTime: "16h30",
      endTime: "16h30",
    },
    {
      name: "Esquel y Ecuador Jóven",
      description: "",
      startTime: "16h30",
      endTime: "16h30",
    },
    {
      name: "Mesas de Trabajo",
      description: "",
      startTime: "16h30",
      endTime: "16h30",
    },
  ],
};

export default function Eventos() {
  return (
    <>
      <EventTemplate eventData={eventData} />
    </>
  );
}
