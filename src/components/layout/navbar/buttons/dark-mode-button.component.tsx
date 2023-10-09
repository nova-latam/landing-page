"use client";

import React from "react";
import { Button } from "@/components/common/buttons";
import { MoonIcon, SunIcon } from "@/components/common/icons/navbar";

export default function DarkModeButton({
  darkMode,
  onClick,
}: {
  darkMode: boolean;
  onClick: () => void;
}) {
  return (
    <Button className="px-2 rounded-lg" onClick={onClick}>
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
