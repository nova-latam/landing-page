import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda Juvenil de Emprendedores",
  description:
    "Nova Club es una comunidad de estudiantes apasionados por la innovación y la tecnología. Creemos que la innovación es la clave para resolver los problemas más urgentes del mundo, y estamos comprometidos a desarrollar la próxima generación de innovadores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
