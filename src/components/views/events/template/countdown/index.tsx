"use client";

import { useState, useEffect } from "react";
import CountdownText from "./countdown-text.component";

interface CountdownState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function Countdown({ date }: { date: string }) {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(date);

      const totalSeconds = (eventDate.getTime() - now.getTime()) / 1000;

      const days = Math.floor(totalSeconds / 86400)
      const hours = Math.floor((totalSeconds % 86400) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = Math.floor(totalSeconds % 60)

      setCountdown({
        days: Math.max(days, 0).toString().padStart(2, "0"),
        hours: Math.max(hours, 0).toString().padStart(2, "0"),
        minutes: Math.max(minutes, 0).toString().padStart(2, "0"),
        seconds: Math.max(seconds, 0).toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="md:mt-10 flex items-center justify-center space-x-5 sm:space-x-10 lg:space-x-20">
      <CountdownText title="días" text={countdown.days} />
      <CountdownText title="horas" text={countdown.hours} />
      <CountdownText title="minutos" text={countdown.minutes} />
      <CountdownText title="segundos" text={countdown.seconds} />
    </div>
  );
}
