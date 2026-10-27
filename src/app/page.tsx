import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Applicativo } from "@/components/sezioni/applicativo";
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
        <Ottieni />
        <Mantieni />
        <Applicativo />
        <Pubblico />
      </main>
      <SiteFooter />
    </>
  );
}
