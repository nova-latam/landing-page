"use client";
import React from "react";
import Image from "next/image";

export default function LogoWords({ isDark }: { isDark: boolean }) {
  const src = isDark
    ? "/images/logos/only-words/light-500x135.png"
    : "/images/logos/only-words/dark-500x135.png";

  return (
    <Image src={src} alt="Nova Club Logo Only Words" width={110} height={30} />
  );
}
