"use client";

import React, { useEffect } from "react";
import Button from "./button.component";

export default function DarkModeButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return <Button onClick={onClick}>Toggle</Button>;
}
