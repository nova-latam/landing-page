import React from "react";
import Image from "next/image";
import { Speaker } from "../../types/schedule.type";
import { textSizes } from "@/components/common/text";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="p-4 flex gap-4">
      <Image
        src={speaker.linkedin}
        alt={`Speaker ${speaker.name} photo`}
        className="rounded-full"
        width={50}
        height={50}
      />
      <div className="">
        <p className={`text-primary-1000 dark:text-primary-50 ${textSizes.sm}`}>{speaker.name}</p>
        <p className={`text-primary-950 dark:text-primary-100 ${textSizes.xs}`}>{speaker.position}</p>
      </div>
    </div>
  );
}
