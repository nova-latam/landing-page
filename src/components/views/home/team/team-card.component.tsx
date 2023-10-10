import React from "react";
import { TeamMember } from "./team.type";
import Image from "next/image";
import { Card } from "@/components/common/cards";
import { textSizes } from "@/components/common/text/text-sizes.lib";
import Link from "next/link";
import { LinkedinIcon } from "@/components/common/icons/social";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="flex flex-col justify-between items-center gap-4 md:gap-6 h-[24rem] w-[16rem] md:h-[36rem] md:w-[18rem] bg-blend-darken shadow-lg hover:scale-105 ease-linear duration-300">
      <div>
        <p
          className={`font-semibold text-center text-primary-1000 dark:text-primary-0 ${textSizes.lg}`}
        >
          {member.title}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-x-4 gap-y-3">
        <Image
          src={member.img}
          width={100}
          height={100}
          className="w-40 h-40 md:w-60 md:h-60 text-large rounded-full"
          alt={`${member.name} picture`}
        />
        <p
          className={`font-medium text-primary-950 dark:text-primary-50 ${textSizes.md}`}
        >
          {member.name}
        </p>
        <div className="flex flex-row gap-2">
          <Link
            className="flex justify-center items-center gap-2"
            href={member.linkedin}
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
      <div className="flex-col justify-center items-center">
        <p
          className={`text-center italic text-primary-950 dark:text-primary-50 ${textSizes.xs}`}
        >
          {member.bio}
        </p>
      </div>
    </Card>
  );
}
