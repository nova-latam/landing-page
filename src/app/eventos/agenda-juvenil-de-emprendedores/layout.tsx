import type { Metadata } from "next";
//Faltan algunos detalles pero si la tendremos lista jajaj https://www.novaclub.tech/eventos/agenda-juvenil-de-emprendedores
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
