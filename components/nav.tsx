"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UtcClock } from "@/components/utc-clock";
import logoBranca from "@/public/somma-logo-branca.png";

const links = [
  { href: "/#frentes", label: "Frentes" },
  { href: "/#metodo", label: "Método" },
  { href: "/#para-quem", label: "Para quem" },
  { href: "/casos", label: "Cases" },
  { href: "/#diagnostico", label: "Diagnóstico" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-paper/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-[1240px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="relative z-10 flex items-center" aria-label="SOMMA — início">
          <Image
            src={logoBranca}
            alt="SOMMA"
            width={120}
            height={34}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-active={active}
                className="nav-link text-sm text-paper/75 transition-colors hover:text-paper"
              >
                {l.label}
              </Link>
            );
          })}
          <UtcClock className="hidden text-paper/35 lg:inline" />
          <Link
            href="/#diagnostico"
            className="rounded-full border border-paper/20 px-5 py-2 text-sm text-paper transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Falar com a SOMMA
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-paper/10 bg-ink/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {[...links, { href: "/#diagnostico", label: "Falar com a SOMMA" }].map((l, i) => (
            <Link
              key={`${l.href}-${i}`}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-paper/5 py-3 text-base text-paper/80 last:border-0"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
