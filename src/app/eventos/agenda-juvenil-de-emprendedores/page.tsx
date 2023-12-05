import React from "react";

import { EventTemplate } from "@/components/views/events";
import { Speaker } from "@/components/views/events/template/types/schedule.type";
import { eventData } from "@/lib/events/agenda-juvenil-de-emprendedores";

export default function Eventos() {
  return (
    <>
      <EventTemplate eventData={eventData} />
    </>
  );
}
