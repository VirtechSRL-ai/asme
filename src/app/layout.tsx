import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-ui",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} — ${site.payoff}`,
    template: `%s — ${site.nome}`,
  },
  description: site.descrizione,
  openGraph: {
    title: `${site.nome} — ${site.payoff}`,
    description: site.descrizione,
    url: site.url,
    siteName: site.nome,
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${inter.variable} ${mono.variable} h-full`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
