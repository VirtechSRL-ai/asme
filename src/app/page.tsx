import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Mantieni } from "@/components/sections/mantieni";
import { Ottieni } from "@/components/sections/ottieni";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="flex-1">
        <Hero />
        <Ottieni />
        <Mantieni />
      </main>
      <SiteFooter />
    </>
  );
}
