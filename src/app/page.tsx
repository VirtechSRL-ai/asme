import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Applicativo } from "@/components/sezioni/applicativo";
import { Hero } from "@/components/sezioni/hero";
import { Mantieni } from "@/components/sezioni/mantieni";
import { Ottieni } from "@/components/sezioni/ottieni";
import { Pubblico } from "@/components/sezioni/pubblico";
import { Transizione } from "@/components/sezioni/transizione";

export default function Home() {
  return (
    <>
      <SiteHeader />
      {/* Un solo fondale per tutte le sezioni chiare: le sfumature
          attraversano i confini invece di fermarsi a ogni stacco. */}
      <main id="contenuto" className="ambiente flex-1">
        <Hero />
        <Transizione />
        <Ottieni />
        <Mantieni />
        <Applicativo />
        <Pubblico />
      </main>
      <SiteFooter />
    </>
  );
}
