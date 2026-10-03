import { Container } from "@/components/ui";
import { Asterisk } from "@/components/somma-graphics";
import { clients } from "@/lib/content";

/* Faixa de clientes — motion rotativo contínuo (marquee) + descritivo no hover.
   CSS-only: duas cópias deslizam -50% em loop; pausa no hover; cada nome revela
   tipo + descrição num tooltip elegante. */
export function ClientMarquee() {
  const seq = [...clients, ...clients];
  return (
    <section
      aria-label="Clientes e operações atendidas"
      className="relative z-10 border-y border-paper/10 bg-ink py-7"
    >
      <Container className="mb-5">
        <span className="mono-label text-paper/35">CLIENTES E OPERAÇÕES ATENDIDAS</span>
      </Container>

      <div className="relative">
        {/* fades de borda (substituem o mask, que recortaria o tooltip) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />
        <div className="marquee-mask">
          <div className="marquee-track flex w-max items-center gap-10 sm:gap-14">
          {seq.map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex shrink-0 items-center gap-10 sm:gap-14">
              <span className="group relative inline-flex flex-col items-center">
                <span className="display cursor-default whitespace-nowrap text-lg font-bold uppercase tracking-[-0.03em] text-paper/45 transition-colors duration-200 group-hover:text-paper sm:text-xl">
                  {c.name}
                </span>
                <span className="client-underline mt-1.5" aria-hidden />
                {/* descritivo (hover) */}
                <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-accent/30 bg-navy/95 p-4 text-left opacity-0 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="mono-label text-accent">{c.type}</span>
                  <span className="mt-1.5 block text-sm leading-snug text-paper/75">{c.desc}</span>
                </span>
              </span>
              <Asterisk size={12} className="shrink-0 text-accent/40" />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
