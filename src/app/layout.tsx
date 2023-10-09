import "./globals.css";

import type { Metadata } from "next";

import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Nova Club | Creadores del futuro",
  description:
    "Nova Club es una comunidad de estudiantes apasionados por la innovación y la tecnología. Creemos que la innovación es la clave para resolver los problemas más urgentes del mundo, y estamos comprometidos a desarrollar la próxima generación de innovadores.",
  icons: {
    icon: {
      url: "/icon.svg",
      type: "image/svg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        <Layout>
          <main className="bg-primary-50 dark:bg-primary-950 transition-colors duration-1000">
            {children}
          </main>
        </Layout>
      </body>
    </html>
  );
}
