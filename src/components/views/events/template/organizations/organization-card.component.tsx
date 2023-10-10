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
  const {
    logo: { height, width },
  } = organization;

  return (
    <div className="flex items-center justify-center hover:scale-105 h-[6rem] w-[10rem]">
      <Link href={organization.website} target="_blank">
        <Image
          src={organization.logo.src}
          alt={organization.name + " logo"}
          height={organization.logo.height}
          width={organization.logo.width}
        />
      </Link>
    </div>
  );
}
