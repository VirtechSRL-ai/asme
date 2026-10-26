import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Audience } from "@/components/sections/audience";
import { CaseStudies } from "@/components/sections/case-studies";
import { Catalog } from "@/components/sections/catalog";
import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Partners } from "@/components/sections/partners";
import { Pillars } from "@/components/sections/pillars";
import { Platform } from "@/components/sections/platform";
import { Process } from "@/components/sections/process";
import { Resources } from "@/components/sections/resources";
import { Sectors } from "@/components/sections/sectors";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBar } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Pillars />
        <Team />
        <Platform />
        <Audience />
        <Metrics />
        <Catalog />
        <Sectors />
        <Process />
        <Partners />
        <CaseStudies />
        <Testimonials />
        <CtaBand />
        <Resources />
      </main>
      <SiteFooter />
    </>
  );
}
