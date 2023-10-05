import React from "react";
import { TextProps } from "./text.type";

export default function Text({ children, className, size = "md" }: TextProps) {
  const sizes = {
    sm: "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
    md: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",
    lg: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
    xl: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
    "2xl":
      "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
    "3xl":
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
  };

  return <p className={`${sizes[size]} ${className}`}>{children}</p>;
}
