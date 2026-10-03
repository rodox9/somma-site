"use client";

import { useEffect, useState } from "react";
import { slugifySection } from "@/lib/slug";

/* Scroll-spy: acende a seção ativa conforme o scroll (padrão página de case Koto). */
export function CaseNav({ sections }: { sections: readonly string[] }) {
  const ids = sections.map(slugifySection);
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="flex flex-col gap-1">
      {sections.map((label, i) => {
        const id = ids[i];
        const on = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`group flex items-center gap-3 py-1.5 text-sm transition-colors ${
              on ? "text-accent" : "text-paper/45 hover:text-paper/70"
            }`}
          >
            <span
              className={`h-px transition-all duration-300 ${
                on ? "w-7 bg-accent" : "w-4 bg-paper/25 group-hover:w-5"
              }`}
            />
            <span className="mono-label">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
