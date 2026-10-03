import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Container ---------- */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Mono label [INSIGHT] ---------- */
export function Label({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "muted" | "blue";
  className?: string;
}) {
  const color =
    tone === "accent"
      ? "text-accent"
      : tone === "blue"
        ? "text-blue"
        : "text-paper/55";
  return (
    <span className={`mono-label inline-flex items-center gap-2 ${color} ${className}`}>
      <span className="opacity-40">[</span>
      {children}
      <span className="opacity-40">]</span>
    </span>
  );
}

/* ---------- Eyebrow (label + dot) ---------- */
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`mono-label inline-flex items-center gap-3 ${
        light ? "text-graphite/60" : "text-paper/55"
      }`}
    >
      <span className="h-px w-8 bg-accent" />
      {children}
    </span>
  );
}

/* ---------- Button ---------- */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark" | "bracket";
  className?: string;
}) {
  if (variant === "bracket") {
    return (
      <Link
        href={href}
        className={`mono-label group inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-accent ${className}`}
      >
        <span className="text-accent/50">[</span>
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        <span className="text-accent/50">]</span>
      </Link>
    );
  }
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const styles = {
    primary:
      "bg-accent text-white hover:bg-accent/90 hover:gap-3.5 shadow-[0_8px_30px_-8px_rgba(1,152,255,0.6)]",
    ghost:
      "border border-paper/20 text-paper hover:border-accent hover:text-accent hover:gap-3.5",
    "ghost-dark":
      "border border-graphite/20 text-graphite hover:border-accent hover:text-accent hover:gap-3.5",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
    </Link>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : ""} ${
        align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`display text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.05] font-semibold ${
          light ? "text-graphite" : "text-paper"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-graphite/75" : "text-paper/65"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------- Glow ---------- */
export function Glow({
  className = "",
  color = "var(--somma-accent)",
  opacity = 0.45,
  size = 520,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      className={`somma-glow ${className}`}
      style={{
        background: color,
        opacity,
        width: size,
        height: size,
      }}
    />
  );
}
