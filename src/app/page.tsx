import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Applicativo } from "@/components/sezioni/applicativo";
import { Fascia } from "@/components/sezioni/fascia";
import { Hero } from "@/components/sezioni/hero";
import { Mantieni } from "@/components/sezioni/mantieni";
import { Ottieni } from "@/components/sezioni/ottieni";
import { Pubblico } from "@/components/sezioni/pubblico";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="flex-1">
        <Hero />
        {/* Porta il verde della hero dentro la sezione successiva */}
        <Fascia />
        <Ottieni />
        <Mantieni />
        <Applicativo />
        <Pubblico />
      </main>
      <SiteFooter />
    </>
  );
}
