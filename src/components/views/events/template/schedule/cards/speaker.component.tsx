import React from "react";
import Image from "next/image";
import { Speaker } from "../../types/schedule.type";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div>
      <Image
        src={speaker.url}
        alt={`Speaker ${speaker.name} photo`}
        width={50}
        height={50}
      />
      <div>
        <p>{speaker.name}</p>
        <p>{speaker.position}</p>
      </div>
    </div>
  );
}
