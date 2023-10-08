"use client";
import React from "react";

import { SocialLink } from "../common/links";
import { socialLinksData } from "@/components/common/links";
import { InstagramIcon } from "@/components/common/icons/social";
import { textSizes } from "../common/text/text-sizes.lib";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary-1000 text-primary-0 
    w-full h-[10rem] flex flex-col justify-center items-center gap-4">
      <SocialLink socialLinkData={socialLinksData.instagram}>
        <p className={`${textSizes.sm}`}>@nova.epn</p>
      </SocialLink>
      <p className={`${textSizes.sm}`}>Copyright © 2023 Club Nova</p>
    </footer>
  );
}
