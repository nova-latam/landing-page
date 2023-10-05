"use client";
import React from "react";
import { InstagramLink } from "../links";

export default function Footer() {
  return (
    <footer className="bg-primary-50 dark:bg-primary-950">
      <section className="min-w-screen h-[150px] flex flex-col justify-center items-center gap-4">
        <InstagramLink href="https://www.instagram.com/nova.epn/">
          <span>@nova.epn</span>
        </InstagramLink>
        <p>Copyright © 2023 Club Nova</p>
      </section>
    </footer>
  );
}
