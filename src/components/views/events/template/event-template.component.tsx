import Hero from "./hero.component";
import { EventData } from "./types/event.type";
import AboutEvent from "./about.component";
import Organizations from "./organizations/organizations.component";
import Schedule from "./schedule/schedule.component";
import Speakers from "./speakers/speakers.component";
import { speakers } from "@/lib/events/agenda-juvenil-de-emprendedores";

export default function EventTemplate({ eventData }: { eventData: EventData }) {
  return (
    <>
      <Hero
        title={eventData.title}
        subtitle={eventData.subtitle}
        date={eventData.date}
      />

      <AboutEvent eventData={eventData} />
      <Organizations />
    </>
  );
}
