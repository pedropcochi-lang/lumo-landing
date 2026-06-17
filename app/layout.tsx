import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Lumo — Ilumine o caminho entre quem você é e quem quer se tornar",
  description: "App de desenvolvimento pessoal com hábitos, metas, finanças e agentes de IA. Para quem quer evoluir de verdade.",
  openGraph: {
    title: "Lumo — Desenvolvimento pessoal com IA",
    description: "Hábitos, metas e finanças em um só lugar. Com agentes de IA que te conhecem.",
    url: "https://lumoapp.site",
    siteName: "Lumo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
