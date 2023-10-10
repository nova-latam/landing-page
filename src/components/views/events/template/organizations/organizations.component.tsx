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
      <span className="w-full p-[0.024rem] mb-10 bg-primary-0"></span>
      <div>
        <SectionTitle title="Speakers" />
        <Speakers speakers={speakers} />
      </div>
      <span className="w-full p-[0.024rem] mt-0 mb-10 md:my-10 bg-primary-0"></span>
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
