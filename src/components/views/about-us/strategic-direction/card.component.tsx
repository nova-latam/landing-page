import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type StrategicDirectionCard = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

export default function Card({
  title,
  description,
  image,
  className,
}: StrategicDirectionCard) {
  return (
    <article
      className={cn(
        "flex flex-col-reverse md:flex-row md:h-96 w-full max-w-6xl gap-4",
        className
      )}
    >
      <div className="flex-[1] h-full flex flex-col px-4">
        <header className="text-xl font-bold md:text-3xl">{title}</header>
        <div className="mt-2 md:mt-4 flex justify-center items-center">
          <p className="text-sm md:text-xl text-justify">{description}</p>
        </div>
      </div>
      <div className="flex-[1] h-full px-4">
        <Image
          src={image}
          alt={`${title}`}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </article>
  );
}
