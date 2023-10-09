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
    <div className="w-full flex flex-row justify-center items-center pt-2 pb-4">
      {organizations.map((organization) => (
        <OrganizationCard key={nanoid()} organization={organization} />
      ))}
    </div>
  );
}
