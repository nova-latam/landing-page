"use client";
import React from "react";

import { InstagramIcon, LinkedinIcon } from "@/components/common/icons/social";
import { textSizes } from "../common/text/text-sizes.lib";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-primary dark:bg-primary-1000 text-primary-0 
    w-full py-6 flex flex-col justify-center items-center gap-4"
    >
      <div className="flex gap-4">
        <Link
          href={"https://www.instagram.com/nova.epn/"}
          target="_blank"
        >
          <InstagramIcon className="w-7 h-7"/>
        </Link>
        <Link
          href={"https://www.linkedin.com/company/nova-club/"}
          target="_blank"
        >
          <LinkedinIcon className="w-7 h-7"/>
        </Link>
      </div>
      <p className={`${textSizes.xs}`}>Copyright © 2023 Club Nova</p>
    </footer>
  );
}
