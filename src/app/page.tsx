import { WebMcpTools } from "../components/WebMcpTools";
import { profile } from "../lib/discovery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Scena } from "@/components/scena";
import { Applicativo } from "@/components/sezioni/applicativo";
import { Hero } from "@/components/sezioni/hero";
import { Mantieni } from "@/components/sezioni/mantieni";
import { Ottieni } from "@/components/sezioni/ottieni";
import { Pubblico } from "@/components/sezioni/pubblico";
import { Settori } from "@/components/sezioni/settori";
import { Team } from "@/components/sezioni/team";

/**
 * L'ordine risponde, una domanda alla volta, a ciò che il visitatore si chiede:
 * che cos'è, che cosa ottengo, come restano collegate le informazioni, com'è
 * fatto il prodotto, a chi serve, per quale settore, chi mi accompagna e come
 * chiedere una demo.
 */
export const metadata = {
  alternates: { canonical: "/", types: { "text/markdown": "/index.md" } },
};

export default function Home() {
  return (
    <>
      <WebMcpTools productProfile={profile} />
      <SiteHeader />
      {/* Un solo fondale per tutte le sezioni chiare: le sfumature
          attraversano i confini invece di fermarsi a ogni stacco. */}
      <Scena>
      <main id="contenuto" className="ambiente flex-1">
        <Hero />
        <Ottieni />
        <Mantieni />
        <Applicativo />
        <Pubblico />
        <Settori />
        <Team />
      </main>
      </Scena>
      <SiteFooter />
    </>
  );
}
