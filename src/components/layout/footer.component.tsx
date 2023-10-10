"use client";
import React from "react";

import { InstagramIcon } from "@/components/common/icons/social";
import { textSizes } from "../common/text/text-sizes.lib";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-primary dark:bg-primary-1000 text-primary-0 
    w-full h-[10rem] flex flex-col justify-center items-center gap-4"
    >
      <Link href={"https://www.instagram.com/nova.epn/"}>
        <InstagramIcon />
        <p className={`${textSizes.sm}`}>@nova.epn</p>
      </Link>
      <p className={`${textSizes.sm}`}>Copyright © 2023 Club Nova</p>
    </footer>
  );
}
