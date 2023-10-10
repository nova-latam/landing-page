import React from "react";
import { Conference } from "../../types/schedule.type";
import SpeakerCard from "./speaker.component";
import { textSizes } from "@/components/common/text";
import { nanoid } from "nanoid";
import { ClockIcon } from "@/components/common/icons/events";

export default function ConferenceCard({
  conference,
}: {
  conference: Conference;
}) {
  const { name, speakers } = conference;
  return (
    <div className="flex flex-col justify-center items-start w-full px-8 md:px-16 lg:px-20">
      <header className="flex flex-row gap-4 justify-center items-center">
        <span
          className={`bg-primary dark:bg-primary rounded-md px-2 py-1 text-xs md:text-sm flex flex-row gap-1 justify-center items-center`}
        >
          <ClockIcon className={"w-4 text-primary-950 dark:text-primary-50"} />
          <div className="flex flex-col sm:flex-row gap-1 md:gap-3 md:w-28">
            <p>{conference.startTime}</p>
            <span className="hidden sm:inline">-</span>
            <p>{conference.endTime}</p>
          </div>
        </span>
        <p
          className={`text-primary-1000 dark:text-primary-50 ${textSizes.sm} font-semibold`}
        >
          {name}
        </p>
      </header>
      {speakers &&
        speakers.map((speaker) => (
          <SpeakerCard key={nanoid()} speaker={speaker} />
        ))}
    </div>
  );
}
