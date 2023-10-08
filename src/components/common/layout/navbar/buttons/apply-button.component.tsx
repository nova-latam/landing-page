import Link from "next/link";
import React from "react";
import Button from "./button.component";

export default function ApplyButton() {
  return (
    <Button>
      <Link href={"/postulaciones"}>Postula</Link>
    </Button>
  );
}
