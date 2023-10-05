import React from "react";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`min-h-screen min-w-screen flex flex-col justify-center items-center p-6 gap-4 bg-primary-50 dark:bg-primary-950 ${className}`}>
      {children}
    </section>
  );
}
