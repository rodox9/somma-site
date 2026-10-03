import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Label, Glow } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { CaseNav } from "@/components/case-nav";
import { slugifySection } from "@/lib/slug";
import { cases, caseSpine } from "@/lib/content";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return { title: "Caso" };
  return { title: c.title, description: `${c.lede} ${c.sections.Contexto}`.slice(0, 155) };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = cases.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const c = cases[idx];
  const next = cases[(idx + 1) % cases.length];

  return (
    <>
      {/* header */}
      <section className="somma-noise relative overflow-hidden bg-ink pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Glow className="-top-28 right-0" opacity={0.3} size={500} />
        <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-40" />
        <Container className="relative z-10">
          <Link href="/casos" className="mono-label text-paper/45 transition-colors hover:text-accent">
            ← CASOS
          </Link>
          <div className="mt-6 flex max-w-3xl flex-col gap-5">
            <Label>{c.tag}</Label>
            <h1 className="display text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-paper sm:text-5xl">
              {c.title}
            </h1>
            <p className="serif-italic text-2xl text-accent">{c.lede}</p>
            <p className="mono-label text-paper/40">{c.meta}</p>
          </div>
        </Container>
      </section>

      {/* corpo: sidebar sticky + seções */}
      <section className="relative bg-ink pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <CaseNav sections={caseSpine} />
              </div>
            </aside>

            {/* conteúdo */}
            <div className="flex flex-col">
              {caseSpine.map((label) => (
                <section
                  key={label}
                  id={slugifySection(label)}
                  className="scroll-mt-28 border-t border-paper/10 py-10 first:border-t-0 first:pt-0"
                >
                  <Label tone="muted">{label}</Label>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/80 sm:text-xl">
                    {c.sections[label]}
                  </p>
                </section>
              ))}

              {/* próximo caso */}
              <Link
                href={`/casos/${next.slug}`}
                className="group mt-8 flex items-center justify-between gap-6 rounded-2xl border border-paper/10 bg-paper/[0.03] p-7 transition-colors hover:border-accent/40"
              >
                <div className="flex flex-col gap-2">
                  <span className="mono-label text-paper/45">PRÓXIMO CASO</span>
                  <span className="display text-xl font-semibold text-paper">{next.title}</span>
                </div>
                <span className="text-paper/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="SUA OPERAÇÃO"
        title="Topa um diagnóstico parecido no seu negócio?"
        text="Olhamos a operação inteira e mostramos onde a inteligência move resultado mais rápido."
      />
    </>
  );
}
