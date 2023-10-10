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
      //speakers: [speakers.CarlosZaldumbide],
    },
    {
      name: "Bienvenida Nova",
      description: "",
      startTime: "17h00",
      endTime: "17h05",
    },
    {
      name: "Bienvenida Innova",
      description: "",
      startTime: "17h05",
      endTime: "17h10",
    },
    {
      name: "Panelistas - Mesa Redonda",
      description: "",
      startTime: "17h15",
      endTime: "18h10",
    },
    {
      name: "Presentación Esquel y Ecuador Jóven",
      description: "",
      startTime: "18h10",
      endTime: "18h15",
    },
    {
      name: "Workshop - Mesas de Trabajo",
      description: "",
      startTime: "18h15",
      endTime: "19h40",
    },
    {
      name: "Presentación - Pitchs",
      description: "",
      startTime: "19h40",
      endTime: "20h20",
    },
    {
      name: "Networking",
      description: "",
      startTime: "20h20",
      endTime: "21h00",
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


// import { Hero } from "@/components/views/events";
// import React from "react";
// import { useRouter } from "next/navigation";

// export default function Eventos() {
//   const router = useRouter();

//   router.push("/eventos/agenda-juvenil-de-emprendedores");

//   return <Hero />;
// }
