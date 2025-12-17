import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn"; // <--- 1. Importar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JPier | Desarrollador Web Full Stack",
  description: "Desarrollo de software a medida en Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <WhatsAppBtn /> {/* <--- 2. Poner aquí, justo antes de cerrar el body */}
      </body>
    </html>
  );
}