import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Speaker } from "@/lib/people/speaker.type";
import { textSizes } from "@/components/common/text";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className=" hover:scale-105  ">
      <Link
        href={speaker.linkedin}
        target="_blank"
        className="flex flex-col items-center justify-start text-primary-0 p4 h-64 w-56"
      >
        <Image
          src={speaker.image}
          alt={speaker.name + " logo"}
          className="h-[10rem] w-[10rem] rounded-lg"
          height={100}
          width={100}
        />
        <div className="w-full text-center mt-2">
          <p className={`mt-2 font-semibold ${textSizes.sm}`}>{speaker.name}</p>
          <p className={`mt-1 ${textSizes.xs}`}>{speaker.position}</p>
        </div>
      </Link>
    </div>
  );
}
