"use client";
import React from "react";

import { Text } from "@/components/common/text";
import { InstagramLink } from "../links";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary-950 text-primary-0">
      <section className="min-w-screen h-[150px] flex flex-col justify-center items-center gap-4">
        <InstagramLink href="https://www.instagram.com/nova.epn/">
          <Text size="sm">@nova.epn</Text>
        </InstagramLink>
        <Text size="md">Copyright © 2023 Club Nova</Text>
      </section>
    </footer>
  );
}
