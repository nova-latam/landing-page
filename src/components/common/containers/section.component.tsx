import React from "react";
import { twMerge } from "tailwind-merge";

export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      className={twMerge(
        `px-8 md:px-16 lg:px-24 py-8 w-full min-h-screen relative flex flex-col justify-center items-center bg-primary-50 dark:bg-primary-950 
        transition-colors duration-1000 bg-[url('/images/hero/bg.jpg')]`,
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
}
