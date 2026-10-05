import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sommainc.com.br"),
  title: {
    default: "SOMMA — Inteligência de Resultado para o Mercado Imobiliário",
    template: "%s · SOMMA",
  },
  description:
    "Transformamos potencial imobiliário em performance comercial. A SOMMA conecta produto, preço, comunicação, leads, canais, vendas e governança em uma operação só.",
  keywords: [
    "inteligência de resultado",
    "mercado imobiliário",
    "performance comercial",
    "incorporadora",
    "governança comercial",
  ],
  openGraph: {
    title: "SOMMA — Inteligência de Resultado para o Mercado Imobiliário",
    description:
      "Transformamos potencial imobiliário em performance comercial. Produto, preço, comunicação, leads, canais, vendas e governança como uma operação só.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${dmSans.variable} ${plexMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper pb-16 md:pb-0">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
