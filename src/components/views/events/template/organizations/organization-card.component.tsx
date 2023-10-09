import React from "react";
import { OrganizationProps } from "./organization.type";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/common/cards";

export default function OrganizationCard({
  organization,
}: {
  organization: OrganizationProps;
}) {
  return (
    <div className="hover:scale-105 h-60 w-60">
      <Link href={organization.website} target="_blank">
        <Image
          src={organization.logo}
          alt={organization.name + " logo"}
          height={100}
          width={100}
          className="w-full h-full"
        />
      </Link>
    </div>
  );
}
