import { Section } from "@/components/common/containers";
import { SectionSubtitle, SectionTitle } from "@/components/common/text";
import React from "react";
import OrganizationsCards from "./organizations-cards.component";
import { OrganizationProps } from "./organization.type";

const hosts: OrganizationProps[] = [
  {
    name: "EPN",
    description: "Club de Innovacion",
    logo: "/logo.png",
    website: "",
  }
]

export default function Organizations() {
  return (
    <Section>
      <div>
        <SectionTitle title="Hosts" />
        <OrganizationsCards organizations={hosts} /> 
      </div>
      <div>
        <SectionTitle title="Organizadores" />
        <OrganizationsCards organizations={hosts} />
      </div>
      <div>
        <SectionTitle title="Patrocinadores" />
        <OrganizationsCards organizations={hosts} />
      </div>
      <div>
        <SectionTitle title="Colaboradoes" />
        <OrganizationsCards organizations={hosts} />
      </div>
    </Section>
  );
}
