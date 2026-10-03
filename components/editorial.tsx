import type { ReactNode } from "react";

/* ---------- DualVoice — sentença em duas vozes (assinatura Koto) ----------
   Tese em cor sólida + desdobramento em tom apagado. Hierarquia dentro da frase. */
export function DualVoice({
  lead,
  trail,
  light = false,
  className = "",
  size = "lg",
}: {
  lead: ReactNode;
  trail: ReactNode;
  light?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl lg:text-[2.9rem]",
    xl: "text-4xl sm:text-5xl lg:text-[3.6rem]",
  }[size];
  const leadColor = light ? "text-graphite" : "text-paper";
  const trailColor = light ? "text-graphite/45" : "text-paper/45";
  return (
    <p className={`display font-semibold leading-[1.08] tracking-[-0.025em] ${sizes} ${className}`}>
      <span className={leadColor}>{lead} </span>
      <span className={trailColor}>{trail}</span>
    </p>
  );
}

/* ---------- TagLabel — tag minúscula de categoria ---------- */
export function TagLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`mono-label ${light ? "text-graphite/50" : "text-paper/45"}`}
    >
      {children}
    </span>
  );
}

/* ---------- MetaTable — informação como design (city/role/email → canal/desc/valor) ---------- */
type MetaRow = { label: string; desc: string; value: string; href?: string };

export function MetaTable({
  rows,
  light = false,
}: {
  rows: MetaRow[];
  light?: boolean;
}) {
  const border = light ? "divide-graphite/12 border-graphite/12" : "divide-paper/10 border-paper/10";
  const labelC = light ? "text-graphite" : "text-paper";
  const descC = light ? "text-graphite/55" : "text-paper/50";
  const valueC = light ? "text-graphite/70" : "text-paper/65";
  return (
    <ul className={`flex flex-col divide-y border-y ${border}`}>
      {rows.map((r) => (
        <li key={r.label} className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[160px_1fr_auto] sm:items-baseline sm:gap-6">
          <span className={`mono-label ${light ? "text-accent" : "text-accent"}`}>{r.label}</span>
          <span className={`text-sm ${descC}`}>{r.desc}</span>
          {r.href ? (
            <a href={r.href} className={`text-sm transition-colors hover:text-accent ${valueC}`}>
              {r.value}
            </a>
          ) : (
            <span className={`text-sm ${valueC}`}>{r.value}</span>
          )}
          <span className="hidden">{labelC}</span>
        </li>
      ))}
    </ul>
  );
}
