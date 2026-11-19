import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Intro, SCRIPT_INTRO } from "@/components/intro";
import { ardPath, description, productName, siteStructuredData, siteTitle, siteUrl, socialImage } from "../lib/discovery";
import "./globals.css";

// Una sola famiglia tipografica per tutto il sito: la gerarchia nasce dai pesi.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s — ${productName}` },
  description,
  applicationName: productName,
  openGraph: {
    title: siteTitle,
    description,
    url: "/",
    siteName: productName,
    locale: "it_IT",
    type: "website",
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: siteTitle, description, images: [socialImage] },
};

export const viewport: Viewport = {
  themeColor: "#001011",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: lo script dell'intro marca <html> prima che
    // React idrati, quindi server e client differiscono di proposito.
    //
    // data-scroll-behavior: da Next 16 il router non sospende più lo
    // scroll-behavior smooth del CSS durante i cambi di pagina, quindi il
    // reset dello scroll diventava una scorsa animata e la nuova pagina
    // si apriva dal fondo. Con l'attributo, Next torna a passare ad "auto"
    // per il reset e le àncore interne restano fluide.
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <link rel="ard" href={`${siteUrl}${ardPath}`} />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
