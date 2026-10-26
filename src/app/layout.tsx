import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// Una sola famiglia tipografica per tutto il sito: la gerarchia nasce dai pesi.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} — ${site.payoff}`,
    template: `%s — ${site.nome}`,
  },
  description: site.descrizione,
  applicationName: site.nome,
  openGraph: {
    title: `${site.nome} — ${site.payoff}`,
    description: site.descrizione,
    url: site.url,
    siteName: site.nome,
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome} — ${site.payoff}`,
    description: site.descrizione,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d302d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${manrope.variable} h-full`}>
      <head>
        {/* Senza JavaScript gli ingressi allo scroll non scattano: i contenuti
            devono restare visibili comunque. */}
        <noscript>
          <style>{`.reveal,.reveal-stagger>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Vai al contenuto
        </a>
        {children}
      </body>
    </html>
  );
}
