"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/common/containers";
import { Button } from "@/components/common/buttons";
import Link from "next/link";

export default function Hero() {
  return (
    <Section>
      <Image
        src={"/images/logos/nova-full-1000x600.png"}
        alt="Nova Club full logo"
        className=""
        height={1000}
        width={600}
      />
      <Link href={"/postulaciones"}>
        <Button>Aplica Ahora</Button>
      </Link>
    </Section>
  );
}
