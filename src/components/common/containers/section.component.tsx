import React from "react";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`min-h-screen min-w-screen flex flex-col justify-center items-center p-6 gap-4 ${className}`}>
      {children}
    </section>
  );
}
