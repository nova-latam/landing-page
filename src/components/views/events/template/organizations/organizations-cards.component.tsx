import React from "react";
import { OrganizationProps } from "./organization.type";
import OrganizationCard from "./organization-card.component";
import { nanoid } from "nanoid";

export default function OrganizationsCards({
  organizations,
}: {
  organizations: OrganizationProps[];
}) {
  return (
    <div className="w-full flex flex-row gap-1 md:gap-4 justify-center items-center flex-wrap p-8">
      {organizations.map((organization) => (
        <OrganizationCard key={nanoid()} organization={organization} />
      ))}
    </div>
  );
}
