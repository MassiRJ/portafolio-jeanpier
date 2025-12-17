import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";
import Spotlight from "@/components/ui/Spotlight"; // <--- 1. IMPORTAR

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeanpier Rios | Ing. de Sistemas",
  description: "Portafolio profesional de desarrollo web y sistemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {/* 2. AGREGAR AQUÍ. El Spotlight vive detrás de todo */}
        <Spotlight />
        
        <div className="relative z-10">
          {children}
        </div>
        
        <WhatsAppBtn />
      </body>
    </html>
  );
}