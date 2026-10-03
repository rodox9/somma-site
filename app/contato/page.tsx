import type { Metadata } from "next";
import { Container, Eyebrow, Label, Glow } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { personas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a SOMMA. Comece por um diagnóstico — leitura de mercado, operação e canal antes de qualquer proposta.",
};

export default function Contato() {
  return (
    <section className="somma-noise relative min-h-screen overflow-hidden bg-ink pt-36 pb-24 sm:pt-44">
      <Glow className="-top-28 right-0" opacity={0.32} size={520} />
      <Glow className="bottom-0 -left-32" color="var(--somma-blue)" opacity={0.28} size={460} />
      <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-40" />

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* coluna esquerda */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <Eyebrow>FALAR COM A SOMMA</Eyebrow>
              <h1 className="display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl">
                Começa por um <span className="text-accent">diagnóstico</span>.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-paper/65">
                Antes de propor escopo, a SOMMA enxerga o seu negócio. Conte onde a operação parece
                perder força e retornamos com um diagnóstico — não com discurso pronto.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-paper/10 pt-8">
              <Label tone="muted">PARA QUEM</Label>
              <ul className="flex flex-col gap-4">
                {personas.map((p) => (
                  <li key={p.role} className="flex flex-col gap-0.5">
                    <span className="display text-base font-semibold text-paper">
                      {p.role}{" "}
                      <span className="font-normal text-paper/45">· {p.context}</span>
                    </span>
                    <span className="text-sm text-paper/55">{p.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 border-t border-paper/10 pt-8">
              <Label tone="muted">CANAIS DIRETOS</Label>
              <a
                href="mailto:contato@somma.com.br"
                className="display text-lg text-paper transition-colors hover:text-accent"
              >
                contato@somma.com.br
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-paper/55 transition-colors hover:text-accent"
              >
                SOMMA Inteligência · LinkedIn →
              </a>
            </div>
          </div>

          {/* coluna direita — form */}
          <div className="rounded-3xl border border-paper/10 bg-paper/[0.025] p-8 backdrop-blur-sm sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
