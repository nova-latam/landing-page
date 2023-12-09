import React from "react";

import { EventTemplate, Hero } from "@/components/views/events";
import { eventData } from "@/lib/events/agenda-juvenil-de-emprendedores";
import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";


export default function Eventos() {
  return (
    <>
      <Hero/>
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
