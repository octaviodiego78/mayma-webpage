import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-gd-grio",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayma Construcciones | Remodelaciones a Gran Escala",
  description: "Remodelamos tu hogar con precisión y orgullo. Especialistas en cocinas, baños, ampliaciones y remodelaciones integrales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
