import Layout from "@/components/common/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos | Nova Club",
  description:
    "El Club de Innovación NOVA EPN es una comunidad de estudiantes apasionados por la innovación y la tecnología. Creemos que la innovación es la clave para resolver los problemas más urgentes del mundo, y estamos comprometidos a desarrollar la próxima generación de innovadores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
