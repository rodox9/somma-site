import Link from "next/link";
import { Container, Label, Eyebrow, Button, SectionHeading, Glow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ConnectionMap, Asterisk } from "@/components/somma-graphics";
import { Counter } from "@/components/counter";
import { ContactForm } from "@/components/contact-form";
import { ClientMarquee } from "@/components/client-marquee";
import { services, forces, formula, journey, personas, proofs } from "@/lib/content";

const disconnects = [
  ["Produto", "Comunicação"],
  ["Leads", "Venda"],
  ["Preço", "Margem"],
  ["Canal", "Estratégia"],
  ["Dado", "Decisão"],
];

export default function Home() {
  return (
    <>
      {/* ============ DOBRA 1 — HERO ============ */}
      <section id="inicio" className="somma-noise somma-hero-bg relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-28">
        <Glow className="-top-32 right-0 sm:right-20" color="var(--somma-accent)" opacity={0.38} size={540} />
        <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-50" />
        <Container className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-7">
              <Reveal>
                <Eyebrow>INTELIGÊNCIA DE RESULTADO · MERCADO IMOBILIÁRIO</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display text-[2.5rem] font-bold leading-[0.98] tracking-[-0.04em] text-paper sm:text-6xl lg:text-[4.2rem]">
                  Sua operação pode estar perdendo resultado porque as partes não{" "}
                  <span className="text-accent">conversam.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="max-w-xl text-lg leading-relaxed text-paper/65 sm:text-xl">
                  A SOMMA conecta produto, preço, comunicação, leads, canais, vendas e governança em
                  uma operação só — e transforma potencial imobiliário em performance comercial.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <Button href="#diagnostico">Diagnosticar minha operação</Button>
                  <Button href="#frentes" variant="ghost">
                    Ver as 7 frentes
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={300}>
              <ConnectionMap className="mx-auto w-full max-w-lg" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ FAIXA DE CLIENTES (marquee, logo abaixo do hero) ============ */}
      <ClientMarquee />

      {/* ============ DOBRA 2 — DIAGNÓSTICO DO PROBLEMA ============ */}
      <section id="problema" className="relative bg-paper py-24 text-graphite sm:py-32">
        <Container>
          <SectionHeading
            light
            eyebrow="O PROBLEMA"
            title="O problema raramente está em uma frente isolada."
            intro="Existe produto, mídia, equipe, dado e oportunidade. Mas quando as pontas decidem separadas, o resultado escapa no meio do caminho."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disconnects.map(([a, b], i) => (
              <Reveal key={a} delay={i * 70}>
                <div
                  className="front-card flex flex-col gap-5 rounded-xl border border-graphite/15 bg-graphite/[0.02] p-6"
                  style={{ transform: `rotate(${(i % 2 ? 1 : -1) * (0.6 + (i % 3) * 0.4)}deg)` }}
                >
                  <span className="mono-label text-graphite/40">DESCONECTADO</span>
                  <div className="flex items-center justify-between gap-3">
                    <span className="display text-lg font-semibold text-graphite">{a}</span>
                    <svg width="48" height="12" viewBox="0 0 48 12" aria-hidden className="shrink-0">
                      <line x1="0" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" className="text-graphite/30" />
                      <line x1="30" y1="6" x2="48" y2="6" stroke="currentColor" strokeWidth="1.5" className="text-graphite/30" />
                      <line x1="20" y1="1" x2="28" y2="11" stroke="#0198ff" strokeWidth="1.5" />
                    </svg>
                    <span className="display text-lg font-semibold text-graphite">{b}</span>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={350}>
              <div className="flex h-full flex-col justify-center rounded-xl border border-accent/30 bg-accent/[0.05] p-6">
                <p className="serif-italic text-xl leading-snug text-blue">
                  Cada desconexão dessas custa margem, ritmo e venda.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ DOBRA 3 — VIRADA SOMMA ============ */}
      <section id="virada" className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <Glow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.22} size={520} />
        <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-30" />
        <Container className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <ConnectionMap className="mx-auto w-full max-w-lg" />
            </Reveal>
            <div className="flex flex-col gap-6">
              <Eyebrow>A VIRADA</Eyebrow>
              <h2 className="display text-3xl font-semibold leading-[1.08] text-paper sm:text-4xl lg:text-[2.9rem]">
                A SOMMA não faz só uma parte. Organiza o{" "}
                <span className="text-accent">sistema.</span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-paper/65">
                As mesmas pontas que andavam soltas passam a trabalhar juntas, com a SOMMA no centro
                como camada de inteligência. Resultado comercial nasce da operação inteira
                funcionando melhor.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ DOBRA 4 — SETE FRENTES ============ */}
      <section id="frentes" className="relative bg-paper py-24 text-graphite sm:py-32">
        <Container>
          <SectionHeading
            light
            eyebrow="ONDE A SOMMA ATUA"
            title="Sete frentes. Uma operação."
            intro="Cada frente resolve um ponto da operação. Governança é a camada que organiza o sistema inteiro."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 70}>
                <Link
                  href={`/casos`}
                  className={`front-card group flex h-full flex-col gap-4 rounded-xl border border-graphite/15 bg-graphite/[0.02] p-7 ${
                    s.id === "governanca" ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-8" : ""
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="mono-label text-accent">{s.n}</span>
                      {s.id === "governanca" && <Asterisk size={14} className="text-accent/70" />}
                    </div>
                    <h3 className="display text-xl font-semibold text-graphite">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-graphite/70">{s.short}</p>
                    <div className="card-detail flex flex-wrap gap-x-3 gap-y-1">
                      {s.kw.map((k) => (
                        <span key={k} className="mono-label text-graphite/45">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ DOBRA 5 — MÉTODO SOMMA ============ */}
      <section id="metodo" className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <Glow className="-top-20 right-1/4" opacity={0.26} size={520} />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="O SISTEMA PROPRIETÁRIO"
            title="Método, dado e presença."
            intro="Não é opinião solta. É inteligência aplicada — três forças que, juntas, formam um sistema único."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {forces.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <div className="somma-card somma-elevated flex h-full flex-col gap-4 rounded-2xl p-8">
                  <span className="big-number text-4xl text-accent/80">{`0${i + 1}`}</span>
                  <h3 className="display text-2xl font-semibold text-paper">{p.title}</h3>
                  <p className="text-base leading-relaxed text-paper/65">{p.desc}</p>
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

      {/* ============ DOBRA 6 — JORNADA DE TRABALHO ============ */}
      <section id="jornada" className="relative bg-paper py-24 text-graphite sm:py-32">
        <Container>
          <SectionHeading
            light
            eyebrow="COMO TRABALHAMOS"
            title="Do diagnóstico à correção de rota."
            intro="Um processo claro, operacional — não uma metodologia pesada. A SOMMA entra junto e acompanha."
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-graphite/12 bg-graphite/10 md:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal key={j.n} delay={i * 90}>
                <div className="group flex h-full flex-col gap-3 bg-paper p-7 transition-colors hover:bg-blue/[0.03]">
                  <span className="big-number text-4xl text-blue/25 transition-colors group-hover:text-accent">
                    {j.n}
                  </span>
                  <h3 className="display text-lg font-semibold text-graphite">{j.title}</h3>
                  <p className="text-sm leading-relaxed text-graphite/70">{j.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ DOBRA 7 — PARA QUEM ============ */}
      <section id="para-quem" className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="PARA QUEM É"
            title="Decisores do mercado imobiliário."
            intro="O tom muda conforme o público. O método não."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {personas.map((p, i) => (
              <Reveal key={p.role} delay={i * 90}>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-paper/10 bg-paper/[0.03] p-8">
                  <div className="flex flex-col gap-1">
                    <h3 className="display text-2xl font-semibold text-paper">{p.role}</h3>
                    <span className="mono-label text-paper/40">{p.context}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-paper/65">
                    <span className="text-accent">Dor · </span>
                    {p.pain}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 border-t border-paper/10 pt-4">
                    {p.fronts.map((f) => (
                      <span key={f} className="mono-label text-paper/50">
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="serif-italic mt-auto text-base leading-snug text-blue-light/90">
                    → {p.outcome}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ DOBRA 8 — PROVAS E AUTORIDADE ============ */}
      <section id="provas" className="relative bg-paper py-24 text-graphite sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading
              light
              eyebrow="PROVA"
              title="Evidência, não propaganda."
              intro="O sistema SOMMA aparece em diagnósticos reais — casos anonimizados que mostram o antes, o que foi feito e o impacto."
            />
            <Button href="/casos" variant="ghost-dark" className="shrink-0">
              Ver os casos
            </Button>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-graphite/12 bg-graphite/10 sm:grid-cols-3">
            {proofs.map((s) => (
              <div key={s.label} className="bg-paper p-8">
                <Counter
                  value={Number(s.value)}
                  suffix={s.suffix}
                  className="text-5xl text-graphite sm:text-6xl"
                />
                <p className="mt-3 text-sm font-medium text-graphite/75">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ DOBRA 9 — MANIFESTO CURTO ============ */}
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-30" />
        <Glow className="left-1/2 -translate-x-1/2 -top-10" color="var(--somma-blue)" opacity={0.2} size={520} />
        <Container className="relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
            <Reveal>
              <p className="display text-3xl font-semibold leading-[1.15] text-paper sm:text-4xl lg:text-[3rem]">
                A SOMMA não entra para fazer barulho.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="display text-3xl font-semibold leading-[1.15] text-paper/50 sm:text-4xl lg:text-[3rem]">
                Entra para fazer <span className="text-accent">sentido.</span>
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-paper/60">
                Quando produto, preço, comunicação, leads, canais, vendas e governança trabalham como
                sistema, a decisão ganha clareza — e o resultado aparece com mais consistência.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ DOBRA 10 — CTA FINAL ============ */}
      <section id="diagnostico" className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <Glow className="-top-32 left-1/2 -translate-x-1/2" opacity={0.32} size={560} />
        <Container className="relative z-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div className="flex flex-col gap-6">
              <Eyebrow>DIAGNÓSTICO</Eyebrow>
              <h2 className="display text-3xl font-bold leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                Sua operação está perdendo resultado em alguma ponta?
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-paper/65">
                Conte onde a operação parece travar. A SOMMA olha o sistema inteiro e retorna com um
                diagnóstico — não com discurso pronto.
              </p>
              <div className="mt-2 flex flex-col gap-2 border-t border-paper/10 pt-6">
                <Label tone="muted">CANAL DIRETO</Label>
                <a
                  href="https://wa.me/5500000000000"
                  className="display text-lg text-paper transition-colors hover:text-accent"
                >
                  WhatsApp →
                </a>
                <a href="mailto:contato@somma.com.br" className="text-sm text-paper/55 transition-colors hover:text-accent">
                  contato@somma.com.br
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-paper/10 bg-paper/[0.025] p-8 backdrop-blur-sm sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
