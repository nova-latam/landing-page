import React from "react";

import { EventTemplate } from "@/components/views/events";
import { Speaker } from "@/components/views/events/template/types/schedule.type";
import { eventData } from "@/lib/events/agenda-juvenil-de-emprendedores";

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

export default function Eventos() {
  return (
    <>
      <EventTemplate eventData={eventData} />
    </>
  );
}
