import React from "react";
import { TeamMember } from "./team.type";
import { InstagramLink, LinkedInLink } from "@/components/common/links";
import Image from "next/image";
import { Text } from "@/components/common/text";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="p-8 flex flex-col justify-start w-80 min-w-[150px] min-h-[250px] max-w-[450px] max-h-[600px] 
    rounded-xl gap-8 bg-primary-400 dark:bg-primary-800 shadow-lg">
      <div className="flex justify-center items-center">
        <Text
          className="font-semibold text-primary-1000 dark:text-primary-0"
          size="md"
        >
          {member.title}
        </Text>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image
          src={member.img}
          width={100}
          height={100}
          className="w-60 h-60 text-large rounded-full"
          alt={`${member.name} picture`}
        />
        <Text
          className="font-medium text-primary-950 dark:text-primary-50"
          size="md"
        >
          {member.name}
        </Text>
        <div className="flex flex-row gap-2">
          <InstagramLink href={member.linkedin} />
          <InstagramLink href={member.instagram} />
        </div>
      </div>
      <div className="flex-col justify-center items-center">
        <Text
          className="text-center italic text-primary-950 dark:text-primary-50"
          size="sm"
        >
          {member.bio}
        </Text>
      </div>
    </div>
  );
}
