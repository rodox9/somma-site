import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { TagLabel } from "@/components/editorial";
import { cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Diagnósticos da SOMMA — leituras reais de operação imobiliária. Contexto, tensão, leitura, direção e resultado.",
};

export default function Casos() {
  return (
    <>
      <PageHero
        eyebrow="DIAGNÓSTICOS"
        title={
          <>
            Leituras reais de <span className="text-accent">operação.</span>
          </>
        }
        intro="Casos anonimizados que seguem a mesma espinha: contexto, tensão, leitura, direção e resultado. O que a SOMMA enxergou e o que mudou na operação."
        meta="SMA · CASOS · 2026"
      />

      <section className="relative bg-paper py-20 text-graphite sm:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-graphite/12 bg-graphite/10 sm:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/casos/${c.slug}`}
                  className="group flex h-full flex-col gap-4 bg-paper p-8 transition-colors duration-300 hover:bg-blue/[0.03] sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <TagLabel light>{c.tag}</TagLabel>
                    <span className="text-graphite/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                      →
                    </span>
                  </div>
                  <h2 className="display text-2xl font-semibold leading-tight text-graphite sm:text-3xl">
                    {c.title}
                  </h2>
                  <p className="serif-italic text-lg text-blue">{c.lede}</p>
                  <p className="mono-label mt-auto pt-4 text-graphite/40">{c.meta}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="SUA OPERAÇÃO"
        title="O próximo caso pode ser o seu."
        text="Vamos olhar produto, preço, comunicação, leads, canais, vendas e governança — e mostrar onde está a oportunidade."
      />
    </>
  );
}
