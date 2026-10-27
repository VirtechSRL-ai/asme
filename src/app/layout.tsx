import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Intro, SCRIPT_INTRO } from "@/components/intro";
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
  themeColor: "#001011",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: lo script dell'intro marca <html> prima che
    // React idrati, quindi server e client differiscono di proposito.
    <html lang="it" className={`${manrope.variable} h-full`} suppressHydrationWarning>
      <head>
        {/* Senza JavaScript gli ingressi allo scroll non scattano: i contenuti
            devono restare visibili comunque. */}
        <noscript>
          <style>{`.entra,.entra-cascata>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/* Deve girare prima del primo paint, altrimenti il velo lampeggia
            anche a chi l'ha già visto in questa sessione. */}
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_INTRO }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-pill focus:bg-scuro focus:px-5 focus:py-3 focus:text-chiaro"
        >
          Vai al contenuto
        </a>
        {/* Il sito è già montato sotto: l'apertura è un velo, non un loader */}
        <Intro />
        {children}
      </body>
    </html>
  );
}
