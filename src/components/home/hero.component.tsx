"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Section } from "@/components/common/containers";

export default function Hero() {
  return (
    <Section>
      <Image
        src={"/images/logos/nova-full-1000x600.png"}
        alt="Nova Club full logo"
        height={1000}
        width={600}
      />
      <Button size="lg" color="primary" variant="shadow">
        Aplica ahora
      </Button>
    </Section>
  );
}
