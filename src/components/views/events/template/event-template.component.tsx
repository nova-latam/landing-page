import Hero from "./hero.component";
import { EventData } from "./types/event.type";
import AboutEvent from "./about.component";
import Organizations from "./organizations/organizations.component";

export default function EventTemplate({ eventData }: { eventData: EventData }) {
  return (
    <>
      <Hero
        title="Encuentro juvenil de emprendedores"
        subtitle="Participación de empresarios juveniles"
        date="Octubre 11, 2023, 16:30:00"
      />
      <AboutEvent eventData={eventData} />
      <Organizations />
    </>
  );
}
