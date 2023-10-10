import React from "react";

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
      className={`px-4 sm:px-8 md:px-10 lg:px-24 py-4 w-full min-h-screen relative flex flex-col justify-center items-center bg-primary-50 dark:bg-primary-950 
    transition-colors duration-1000 ${className} bg-[url('/images/hero/bg.jpg')]`}
      id={id}
    >
      {children}
    </section>
  );
}
