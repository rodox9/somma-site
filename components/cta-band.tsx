import { Container, Button, Eyebrow, Glow } from "@/components/ui";

export function CtaBand({
  eyebrow = "PRÓXIMO PASSO",
  title = "Onde a sua operação pode ganhar clareza, ritmo e resultado?",
  text = "Comece por uma conversa. Olhamos produto, preço, comunicação, leads, canais, vendas e governança — e mostramos onde está a oportunidade.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <Glow className="-top-40 left-1/2 -translate-x-1/2" opacity={0.35} size={620} />
      <div aria-hidden className="absolute inset-0 somma-grid-lines opacity-60" />
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-7 text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="display max-w-3xl text-3xl font-semibold leading-[1.08] text-paper sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-paper/65 sm:text-lg">{text}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contato">Falar com a SOMMA</Button>
            <Button href="/inteligencia" variant="ghost">
              Conhecer o método
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
