import React from "react";
import { TeamMember } from "./team.type";
import { InstagramLink, LinkedInLink } from "@/components/common/links";
import Image from "next/image";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="p-8 flex flex-col justify-start w-80 min-w-[150px] min-h-[250px] max-w-[450px] max-h-[600px] gap-8">
      <div className="flex justify-center items-center">
        <p className="text-3xl font-semibold">{member.title}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image
          src={member.img}
          width={100}
          height={100}
          className="w-60 h-60 text-large rounded-full"
          alt={`${member.name} picture`}
        />
        <p className="text-xl font-medium">{member.name}</p>
        <div className="flex flex-row gap-2">
          <InstagramLink href={member.linkedin} />
          <InstagramLink href={member.instagram} />
        </div>
      </div>
      <div className="flex-col justify-center items-center">
        <p className="text-center italic">{member.bio}</p>
      </div>
    </div>
  );
}
