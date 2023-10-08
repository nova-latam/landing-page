import React from "react";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`py-4 w-screen min-h-screen flex flex-col justify-center items-center bg-primary-50 dark:bg-primary-950 
    transition-colors duration-1000 ${className}`}
    >
      {children}
    </section>
  );
}
