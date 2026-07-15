import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import "@/styles/design-system.scss";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jhosue Osuna | Gerencia de Informática y Sistemas POS",
  description:
    "Portafolio profesional de Jhosue Osuna, especializado en administración tecnológica, gestión de sistemas POS, operaciones comerciales y asesoría de proyectos digitales.",
  keywords: [
    "Jhosue Osuna",
    "gerente de informática",
    "administración de sistemas POS",
    "gestión tecnológica",
    "operaciones comerciales",
    "asesoría tecnológica",
    "gestión de inventarios",
    "administración de puntos de venta",
    "soporte tecnológico",
    "coordinación de proyectos digitales",
  ],
  openGraph: {
    type: "website",
    title: "Jhosue Osuna | Gerencia de Informática y Sistemas POS",
    description:
      "Administración tecnológica, gestión de sistemas POS, operaciones comerciales y asesoría de proyectos digitales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
