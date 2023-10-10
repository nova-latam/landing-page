"use client"
import { Hero } from "@/components/views/events";
import React from "react";
import { useRouter } from "next/navigation";

export default function Eventos() {
  const router = useRouter();

  router.push("/eventos/agenda-juvenil-de-emprendedores");
  return <Hero />;
}
