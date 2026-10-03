import { Container, Eyebrow, Glow } from "@/components/ui";
import { Asterisk } from "@/components/somma-graphics";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  meta = "SMA · 2026 · INTELIGÊNCIA",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: string;
}) {
  return (
    <section className="somma-noise somma-hero-bg relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <Glow className="-top-28 right-0" opacity={0.32} size={500} />
      <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-40" />
      <span className="mono-label absolute right-6 top-28 hidden text-paper/30 sm:block lg:right-12">
        {meta}
      </span>
      <Asterisk
        size={16}
        className="absolute bottom-10 right-6 hidden text-accent/40 sm:block lg:right-12"
      />
      <Container className="relative z-10">
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.8rem]">
            {title}
          </h1>
          {intro && (
            <p className="max-w-2xl text-lg leading-relaxed text-paper/65 sm:text-xl">{intro}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
