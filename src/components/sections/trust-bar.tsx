import { site } from "@/content/site";
import { Container } from "../ui";

const { trustBar } = site;

export function TrustBar() {
  return (
    <section className="border-y border-line bg-paper-alt py-12">
      <Container>
        <p className="text-center text-[0.9375rem] font-medium tracking-[-0.02em] text-muted">
          {trustBar.titolo}
        </p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {trustBar.loghi.map((logo) => (
            <li
              key={logo}
              className="text-center text-[1.0625rem] font-semibold tracking-[-0.03em] text-muted/70"
            >
              {logo}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
