import React from "react";

export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="px-2 pb-10">{children}</main>;
}
