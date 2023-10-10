import React from "react";
import { nanoid } from "nanoid";
import { Speaker } from "@/lib/people/speaker.type";
import SpeakerCard from "./speaker-card.component";

export default function Speakers({
  speakers,
}: {
  speakers: Speaker[];
}) {
  return (
    <div className="flex flex-row gap-1 md:gap-4 justify-center items-center flex-wrap py-8">
      {speakers.map((speaker) => (
        <SpeakerCard key={nanoid()} speaker={speaker} />
      ))}
    </div>
  );
}
