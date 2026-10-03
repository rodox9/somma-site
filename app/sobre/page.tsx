import type { Metadata } from "next";
import { Container, Eyebrow, Label, SectionHeading, Glow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "A SOMMA",
  description:
    "Quem é a SOMMA: empresa de Inteligência de Resultado para o Mercado Imobiliário. Entende a operação por dentro — método, dado e presença.",
};

const ehList = [
  "Entra para estruturar e organizar.",
  "Dá método e qualifica decisões.",
  "Conecta as pontas que fazem a operação performar.",
  "Transforma potencial imobiliário em performance comercial.",
];

const naoEhList = [
  "Não é agência de publicidade — comunicação isolada não sustenta venda.",
  "Não é consultoria de slide — não entrega diagnóstico para o cliente resolver sozinho.",
  "Não é treinamento motivacional — não vende energia momentânea.",
  "Não é apenas empresa de lançamento — a atuação é mais ampla.",
  "Não é estética — marketing bonito sozinho não sustenta venda.",
];

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="A SOMMA"
        title={
          <>
            Entendemos a operação <span className="text-accent">por dentro.</span>
          </>
        }
        intro="Empresa de Inteligência de Resultado para o Mercado Imobiliário. Não nascemos para deixar o mercado mais bonito — nascemos para tornar decisões comerciais mais inteligentes, operações mais claras e resultados mais consistentes."
      />

      {/* É / NÃO É */}
      <section className="relative bg-paper py-24 text-graphite sm:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-graphite/12 bg-graphite/[0.02] p-9">
                <Label tone="blue">O QUE A SOMMA É</Label>
                <ul className="mt-6 flex flex-col divide-y divide-graphite/10">
                  {ehList.map((t) => (
                    <li key={t} className="py-3.5 text-base text-graphite/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-graphite/12 bg-graphite/[0.02] p-9">
                <Label tone="muted">O QUE A SOMMA NÃO É</Label>
                <ul className="mt-6 flex flex-col divide-y divide-graphite/10">
                  {naoEhList.map((t) => (
                    <li key={t} className="py-3.5 text-base text-graphite/70">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MISSÃO / VISÃO */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <Glow className="-top-20 left-0" color="var(--somma-blue)" opacity={0.25} size={460} />
        <Container className="relative z-10">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                k: "MISSÃO",
                t: "Levar método, dado e presença ao mercado imobiliário para transformar produto, preço, comunicação, leads, canais, vendas e governança em uma operação mais inteligente, clara e orientada a resultado.",
              },
              {
                k: "VISÃO",
                t: "Ser a principal referência em Inteligência de Resultado para o Mercado Imobiliário brasileiro — ocupando uma categoria própria, que une inteligência de mercado, operação comercial, comunicação, governança e vendas como partes de um mesmo sistema.",
              },
            ].map((b) => (
              <Reveal key={b.k}>
                <div className="h-full rounded-2xl border border-paper/10 bg-paper/[0.03] p-9">
                  <Label>{b.k}</Label>
                  <p className="mt-5 text-xl leading-relaxed text-paper/85 sm:text-2xl">{b.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ARQUÉTIPOS */}
      <section className="relative bg-paper py-24 text-graphite sm:py-32">
        <Container>
          <SectionHeading
            light
            eyebrow="ARQUÉTIPOS"
            title="Sábio e Governante"
            intro="Dois temperamentos definem como a SOMMA pensa e age. O Sábio busca clareza. O Governante cria estrutura."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                t: "O Sábio",
                tag: "CLAREZA",
                d: "Usa dado, faz leitura de mercado, estuda cenário e transforma informação em decisão. Aparece quando a SOMMA mostra o que o mercado está dizendo antes de recomendar qualquer caminho.",
              },
              {
                t: "O Governante",
                tag: "ESTRUTURA",
                d: "Cria ordem, define papéis, constrói rotina e dá governança. Aparece quando a SOMMA tira a operação da dependência de pessoas-chave e coloca método, indicador e responsabilidade.",
              },
            ].map((a) => (
              <Reveal key={a.t}>
                <div className="h-full rounded-2xl border border-graphite/12 bg-graphite/[0.02] p-9">
                  <Label tone="blue">{a.tag}</Label>
                  <h3 className="display mt-4 text-2xl font-semibold text-graphite">{a.t}</h3>
                  <p className="mt-3 text-base leading-relaxed text-graphite/70">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VALORES */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="VALORES — FILTROS DE DECISÃO"
            title="Sete filtros que orientam cada escolha."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col gap-3 bg-navy/80 p-8 transition-colors hover:bg-navy">
                  <span className="big-number text-3xl text-paper/20 transition-colors group-hover:text-accent">
                    {v.n}
                  </span>
                  <h3 className="display text-lg font-semibold text-paper">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-paper/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="CONVERSA"
        title="Quer entender onde a sua operação pode performar melhor?"
        text="A SOMMA entra junto. Vamos olhar produto, preço, comunicação, leads, canais, vendas e governança e mostrar onde está a oportunidade."
      />
    </>
  );
}
