import Link from "next/link";
import Image from "next/image";
import { Container, Label } from "@/components/ui";
import { Asterisk } from "@/components/somma-graphics";
import logoBranca from "@/public/somma-logo-branca.png";

const cols = [
  {
    title: "Navegação",
    items: [
      { label: "Frentes", href: "/#frentes" },
      { label: "Método", href: "/#metodo" },
      { label: "Para quem", href: "/#para-quem" },
      { label: "Cases", href: "/casos" },
      { label: "Diagnóstico", href: "/#diagnostico" },
    ],
  },
  {
    title: "Sistema",
    items: [
      { label: "O problema", href: "/#problema" },
      { label: "A virada SOMMA", href: "/#virada" },
      { label: "Jornada de trabalho", href: "/#jornada" },
      { label: "Provas", href: "/#provas" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-navy">
      <Container className="relative z-10 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={logoBranca}
                alt="SOMMA"
                width={130}
                height={36}
                className="h-8 w-auto"
              />
              <Asterisk size={14} className="text-accent/70" />
            </div>
            <p className="serif-italic max-w-xs text-lg leading-snug text-paper/70">
              Inteligência que move resultado.
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-paper/50">
              Inteligência e estratégia para negócios imobiliários venderem melhor, decidirem
              melhor e crescerem com clareza.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <Label tone="muted">{col.title}</Label>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="text-sm text-paper/65 transition-colors hover:text-accent"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label text-paper/40">
            © {new Date().getFullYear()} SOMMA · INTELIGÊNCIA IMOBILIÁRIA
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/55 transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/somma.imob"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/55 transition-colors hover:text-accent"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
