import type { Metadata } from "next";
import { Container, Label, SectionHeading, Glow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { services, forces } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frentes",
  description:
    "As sete frentes da SOMMA: produto, preço, comunicação, leads, canais, vendas e governança — integradas como uma operação só.",
};

export default function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="O QUE A SOMMA FAZ"
        title={
          <>
            Sete frentes. <span className="text-accent">Uma operação.</span>
          </>
        }
        intro="A SOMMA atua nas pontas que definem a performance comercial do mercado imobiliário. Cada frente resolve um ponto da operação — e nenhuma decide isolada da outra."
      />

      {/* LISTA DE FRENTES */}
      <section className="relative bg-paper py-20 text-graphite sm:py-28">
        <Container>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 60}>
                <article
                  id={s.id}
                  className="group grid scroll-mt-28 grid-cols-1 gap-6 border-t border-graphite/12 py-10 last:border-b sm:grid-cols-[auto_1fr] sm:gap-12"
                >
                  <span className="big-number text-5xl text-blue/25 transition-colors group-hover:text-accent sm:text-7xl">
                    {s.n}
                  </span>
                  <div className="flex max-w-2xl flex-col justify-center gap-3">
                    <h2 className="display text-2xl font-semibold text-graphite sm:text-3xl">
                      {s.title}
                    </h2>
                    <p className="text-base leading-relaxed text-graphite/70 sm:text-lg">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* COMO ENTREGAMOS — método/dado/presença */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <Glow className="-top-20 right-1/4" opacity={0.24} size={500} />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="COMO ENTREGAMOS"
            title="Não entregamos diagnóstico para o cliente resolver sozinho."
            intro="A SOMMA entra junto: estrutura, acompanha e ajusta. Cada frente é trabalhada com a mesma fórmula."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {forces.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-paper/10 bg-paper/[0.03] p-8">
                  <Label>{`0${i + 1}`}</Label>
                  <h3 className="display mt-5 text-xl font-semibold text-paper">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-paper/65">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="ESCOPO"
        title="Qual frente o seu negócio precisa primeiro?"
        text="Raramente é só uma. Olhamos a operação inteira e priorizamos onde a inteligência move resultado mais rápido."
      />
    </>
  );
}
