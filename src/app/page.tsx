import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Benefit } from "@/components/sections/benefit";
import { Demo } from "@/components/sections/demo";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Product } from "@/components/sections/product";
import { Scopes } from "@/components/sections/scopes";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="flex-1">
        <Hero />
        <Experience />
        <Benefit />
        <Product />
        <Method />
        <Scopes />
        <Demo />
      </main>
      <SiteFooter />
    </>
  );
}
