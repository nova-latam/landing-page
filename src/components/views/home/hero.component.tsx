"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Section } from "@/components/common/containers";

export default function Hero() {
  return (
    <Section className="bg-[url('/images/hero/bg.jpg')]">
      <Image
        src={"/images/logos/full.png"}
        alt="Nova Club full logo"
        className=""
        height={1000}
        width={600}
      />
      <Button
          asChild
          className="bg-[#119AAD] text-white h-0 py-5 rounded-xl text-lg ml-2
          hover:scale-105 hover:bg-[#119AAD]/90 transition-all duration-300"
        >
          <Link href={"/aplica"} target="_blank" rel="noreferrer">Aplica Ahora</Link>
        </Button>
    </Section>
  );
}
