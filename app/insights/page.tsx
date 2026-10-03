import type { Metadata } from "next";
import { Container, Label, Eyebrow, Button, Glow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { PeakBarChart } from "@/components/somma-graphics";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Análises de mercado, leituras de praça e diagnósticos comerciais da SOMMA. Inteligência imobiliária aplicada ao mercado real.",
};

export default function Insights() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="ANÁLISES E DIAGNÓSTICOS"
        title={
          <>
            O que a SOMMA enxerga{" "}
            <span className="text-accent">antes de virar consenso.</span>
          </>
        }
        intro="Análises de praça, diagnósticos comerciais, estudos de canal e leitura de dados imobiliários — dirigidos a quem decide."
      />

      {/* DESTAQUE */}
      <section className="relative bg-paper py-20 text-graphite sm:py-24">
        <Container>
          <Reveal>
            <article className="relative overflow-hidden rounded-3xl border border-accent/30 bg-navy p-10 text-paper sm:p-14">
              <Glow className="-top-20 -right-10" opacity={0.3} size={420} />
              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex max-w-xl flex-col gap-5">
                  <Label>{featured.tag}</Label>
                  <h2 className="display text-3xl font-semibold leading-tight sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-paper/70">{featured.excerpt}</p>
                  <span className="mono-label mt-2 text-paper/40">SMA · {featured.date}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <PeakBarChart className="w-full" />
                  <span className="mono-label text-paper/40">
                    MÉDIO E ALTO PADRÃO · VARIAÇÃO 12 MESES
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      {/* GRID */}
      <section className="relative bg-paper pb-24 text-graphite sm:pb-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.title} delay={i * 80}>
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-graphite/12 bg-graphite/[0.02] p-8 transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <Label tone="blue">{post.tag}</Label>
                    <span className="mono-label text-graphite/35">{post.date}</span>
                  </div>
                  <h3 className="display text-xl font-semibold leading-snug text-graphite">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-graphite/65">{post.excerpt}</p>
                  <span className="mono-label mt-auto pt-3 text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    ABRIR ANÁLISE →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* LINKEDIN BAND */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
        <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-40" />
        <Container className="relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-paper/10 bg-paper/[0.03] p-10 sm:flex-row sm:items-center sm:p-12">
            <div className="flex max-w-xl flex-col gap-4">
              <Eyebrow>CANAL PRIMÁRIO</Eyebrow>
              <h2 className="display text-2xl font-semibold text-paper sm:text-3xl">
                As análises mais completas vivem no LinkedIn.
              </h2>
              <p className="text-base leading-relaxed text-paper/65">
                Thought-leadership B2B, leituras long-form e diagnósticos de mercado — 1 a 2 análises
                editoriais por semana.
              </p>
            </div>
            <Button href="https://www.linkedin.com/" variant="ghost" className="shrink-0">
              Seguir no LinkedIn
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
