"use client";
import React from "react";

import { Text } from "@/components/common/text";
import { SocialLink } from "../links";
import { socialLinksData } from "@/components/common/links";
import { InstagramIcon } from "../links/social-links/icons";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary-1000 text-primary-0">
      <section className="min-w-screen h-[150px] flex flex-col justify-center items-center gap-4">
        <SocialLink socialLinkData={socialLinksData.instagram}>
          <Text size="sm">@nova.epn</Text>
        </SocialLink>
        <Text size="md">Copyright © 2023 Club Nova</Text>
      </section>
    </footer>
  );
}
