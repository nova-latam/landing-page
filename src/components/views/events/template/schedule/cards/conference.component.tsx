import React from "react";
import { Conference } from "../../types/schedule.type";
import SpeakerCard from "./speaker.component";
import { textSizes } from "@/components/common/text";

export default function ConferenceCard({
  conference,
}: {
  conference: Conference;
}) {
  const { name, speakers } = conference;
  return (
    <div></div>
    // <div className="flex flex-col justify-start items-start w-96 px-8">
    //   <header>
    //     <span className={`bg-primary rounded-md px-2 py-1 ${textSizes.xs}`}>{conference.time}</span>
    //     <p className={`text-primary-1000 dark:text-primary-50 ${textSizes.md}`}>{name}</p>
    //   </header>
    //   {speakers.map((speaker) => (
    //     <SpeakerCard speaker={speaker} />
    //   ))}
    // </div>
  );
}
