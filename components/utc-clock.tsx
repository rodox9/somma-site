"use client";

import { useEffect, useState } from "react";

/* Relógio ao vivo — detalhe de atelier (assinatura Koto), em mono. */
export function UtcClock({
  city = "SÃO PAULO",
  className = "",
}: {
  city?: string;
  className?: string;
}) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const offset = -now.getTimezoneOffset() / 60;
      const utc = `UTC${offset >= 0 ? "+" : ""}${offset}`;
      setTime(`${hh}:${mm} ${utc}`);
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`mono-label tabular-nums ${className}`} suppressHydrationWarning>
      {city} · {time || "—"}
    </span>
  );
}
