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
    <div className="flex flex-col justify-center items-center w-48 md:w-[26rem] px-8">
      <header className="flex flex-col justify-center items-center">
        <span className={`bg-primary dark:bg-primary-700 rounded-md w-36 px-2 py-1 text-xs md:text-sm mb-2 flex gap-1`}>
          <ClockIcon className={"w-4 text-primary-950 dark:text-primary-50"}/>
          {`${conference.startTime} - ${conference.endTime}`}
        </span>
        <p className={`text-primary-1000 dark:text-primary-50 ${textSizes.sm} font-semibold`}>
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
