import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda Juvenil de Emprendedores",
  description:
    "Ven, acompáñanos a este encuentro con el objetivo de fomentar la participación de empresarios juveniles, construiremos una agenda que beneficie a los emprendedores del país",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
