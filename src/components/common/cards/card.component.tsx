import React from "react";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-6 rounded-xl bg-primary dark:bg-primary-800
      ${className}`}
    >
      {children}
    </div>
  );
}
