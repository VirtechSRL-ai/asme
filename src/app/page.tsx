import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Links } from "@/components/sections/links";
import { Method } from "@/components/sections/method";
import { Problem } from "@/components/sections/problem";
import { Scopes } from "@/components/sections/scopes";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="flex-1">
        <Hero />
        <Problem />
        <Method />
        <Links />
        <Scopes />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
