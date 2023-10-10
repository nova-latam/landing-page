import { Section } from "@/components/common/containers";
import { SectionTitle } from "@/components/common/text";
import React from "react";
import OrganizationsCards from "./organizations-cards.component";
import {
  hosts,
  organizers,
  partners,
  speakers,
  sponsors,
} from "@/lib/events/agenda-juvenil-de-emprendedores";
import Speakers from "../speakers/speakers.component";

export default function Organizations() {
  return (
    <Section className="flex flex-col gap-4">
      <div>
        <SectionTitle title="Speakers" />
        <Speakers speakers={speakers} />
      </div>
      <div>
        <SectionTitle title="Hosts" />
        <OrganizationsCards organizations={hosts} />
      </div>
      <div>
        <SectionTitle title="Organizadores" />
        <OrganizationsCards organizations={organizers} />
      </div>
      <div>
        <SectionTitle title="Patrocinadores" />
        <OrganizationsCards organizations={sponsors} />
      </div>
      <div>
        <SectionTitle title="Partners" />
        <OrganizationsCards organizations={partners} />
      </div>
    </Section>
  );
}
