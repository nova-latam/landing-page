"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Hero() {
  return (
    <section className="min-h-screen min-w-screen flex flex-col justify-center items-center">
      <Image
        src={"/images/logos/nova-full-1000x600.png"}
        alt="Nova Club full logo"
        height={1000}
        width={600}
      />
      <Button size="lg" color="primary" variant="shadow">
        Aplica ahora
      </Button>
    </section>
  );
}
