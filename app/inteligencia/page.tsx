import type { Metadata } from "next";
import { Container, Eyebrow, Label, SectionHeading, Glow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { MaturityLine } from "@/components/somma-graphics";
import { method, forces, formula } from "@/lib/content";

export const metadata: Metadata = {
  title: "Inteligência",
  description:
    "Como a SOMMA pensa: método, dado e presença aplicados a produto, preço, comunicação, leads, canais, vendas e governança.",
};

export default function Inteligencia() {
  return (
    <>
      <PageHero
        eyebrow="COMO A SOMMA PENSA"
        title={
          <>
            Inteligência que vira <span className="text-accent">decisão.</span>
          </>
        }
        intro="Não vendemos opinião. Organizamos produto, preço, comunicação, leads, canais, vendas e governança com método, dado e presença — para a decisão comercial ter chão."
      />

      {/* ESTRUTURA DE PENSAMENTO */}
      <section className="relative bg-paper py-24 text-graphite sm:py-32">
        <Container>
          <SectionHeading
            light
            eyebrow="ESTRUTURA DE PENSAMENTO"
            title="De verdade de mercado a decisão."
            intro="Todo diagnóstico e todo conteúdo da SOMMA seguem a mesma sequência. É o que separa leitura de palpite."
          />
          <div className="mt-16 flex flex-col">
            {method.map((m, i) => (
              <Reveal key={m.n} delay={i * 60}>
                <div className="group grid grid-cols-[auto_1fr] gap-6 border-t border-graphite/12 py-8 last:border-b sm:gap-10">
                  <span className="big-number text-5xl text-blue/25 transition-colors group-hover:text-accent sm:text-6xl">
                    {m.n}
                  </span>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="display text-2xl font-semibold text-graphite sm:text-3xl">
                      {m.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-relaxed text-graphite/70">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* A FÓRMULA */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <Glow className="top-10 -right-20" opacity={0.26} size={520} />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="A FÓRMULA SOMMA"
            title="Método, dado e presença."
            intro="O diferencial não está numa promessa grande. Está na combinação de três forças."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {forces.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-paper/10 bg-paper/[0.03] p-8">
                  <span className="mono-label text-accent">{`0${i + 1}`}</span>
                  <h3 className="display mt-5 text-2xl font-semibold text-paper">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-paper/65">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-1 border-l-2 border-accent/40 pl-6">
            {formula.map((line) => (
              <p key={line} className="text-base text-paper/60">
                {line}
              </p>
            ))}
            <p className="mt-2 text-base font-medium text-paper">
              A SOMMA é a soma dos três. É isso que transforma potencial em performance.
            </p>
          </div>
        </Container>
      </section>

      {/* MATURIDADE */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <Glow className="-bottom-24 left-1/4" color="var(--somma-blue)" opacity={0.22} size={460} />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="DIAGNÓSTICO DE MATURIDADE"
            title="Em que estágio está a sua operação?"
            intro="Toda operação comercial está em algum ponto desta linha. O diagnóstico começa identificando onde — porque o próximo passo depende disso."
          />
          <div className="mt-16 rounded-2xl border border-paper/10 bg-paper/[0.03] px-4 py-10 sm:px-10">
            <Reveal>
              <MaturityLine active={2} className="w-full" />
            </Reveal>
          </div>
          <p className="mono-label mt-6 text-paper/40">
            EXEMPLO · O ESTÁGIO IDENTIFICADO EM DIAGNÓSTICO REAL VARIA POR OPERAÇÃO
          </p>
        </Container>
      </section>

      {/* TESE */}
      <section className="relative overflow-hidden bg-navy py-28 sm:py-36">
        <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-40" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>PRINCÍPIO</Eyebrow>
            <blockquote className="serif-italic mt-7 text-3xl leading-snug text-paper sm:text-4xl">
              Dado não decide sozinho. Mas decisão sem dado custa caro.
            </blockquote>
            <p className="mx-auto mt-7 max-w-xl text-lg text-paper/60">
              Por isso a SOMMA não atua de longe: presença é estar onde a decisão acontece.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="DIAGNÓSTICO"
        title="Vamos olhar a sua operação juntos?"
        text="Produto, preço, comunicação, leads, canais, vendas e governança. Mostramos onde existe oportunidade de clareza, ritmo e resultado."
      />
    </>
  );
}
