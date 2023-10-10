import React from "react";

import { EventTemplate } from "@/components/views/events";
import { eventData } from "@/lib/events/agenda-juvenil-de-emprendedores";


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
