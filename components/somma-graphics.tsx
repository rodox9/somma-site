/* ============================================================
   Vocabulário gráfico proprietário SOMMA
   (anatomy.md / design-lines.md — Linha C). SVG puro.
   ============================================================ */

/* ---- Asterisco 8 pontas — estrela sólida oficial (manual visual v2.0) ---- */
export function Asterisk({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden className={className}>
      {/* estrela externa translúcida */}
      <polygon points="32,8 36,28 56,32 36,36 32,56 28,36 8,32 28,28" fill="currentColor" opacity="0.22" />
      {/* estrela interna em traço */}
      <polygon
        points="32,16 34.5,26 44,32 34.5,37.5 32,48 29.5,37.5 20,32 29.5,26"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
    </svg>
  );
}

/* ---- Ponto de decisão — anéis concêntricos (vocabulário oficial) ---- */
export function DecisionPoint({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden className={className}>
      <circle cx="32" cy="32" r="24" fill="none" stroke="var(--somma-accent)" strokeWidth="0.5" opacity="0.15" />
      <circle cx="32" cy="32" r="16" fill="none" stroke="var(--somma-accent)" strokeWidth="0.5" opacity="0.3" />
      <circle cx="32" cy="32" r="8" fill="var(--somma-accent)" />
    </svg>
  );
}

/* ---- Mapa de conexão: nodo central glow + satélites em círculo (T08) ---- */
const FRENTES = ["PRODUTO", "PREÇO", "COMUNICAÇÃO", "LEADS", "CANAIS", "VENDAS", "GOVERNANÇA"];

export function ConnectionMap({
  className = "",
  nodes = FRENTES,
}: {
  className?: string;
  nodes?: readonly string[];
}) {
  const cx = 260;
  const cy = 210;
  const R = 158;
  const satellites = nodes.map((label, i) => {
    const a = (Math.PI * 2 * i) / nodes.length - Math.PI / 2;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), label };
  });
  return (
    <svg
      viewBox="0 0 520 420"
      className={className}
      role="img"
      aria-label="Mapa de conexão da inteligência SOMMA: mercado, canal, comunicação, dado e operação ligados ao núcleo."
    >
      <defs>
        <filter id="cm-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* linhas — desenham progressivamente quando a seção entra na tela */}
      {satellites.map((s, i) => (
        <line
          key={s.label}
          className="system-line"
          style={{ transitionDelay: `${i * 70}ms` }}
          x1={cx}
          y1={cy}
          x2={s.x}
          y2={s.y}
          stroke="var(--somma-blue-light)"
          strokeOpacity="0.32"
          strokeWidth="1"
        />
      ))}

      {/* satélites */}
      {satellites.map((s, i) => (
        <g key={`n-${s.label}`} className="map-node" style={{ transitionDelay: `${260 + i * 70}ms` }}>
          <circle cx={s.x} cy={s.y} r="5" fill="none" stroke="var(--somma-blue-light)" strokeOpacity="0.7" />
          <text
            x={s.x}
            y={s.y - 14}
            textAnchor="middle"
            className="font-mono"
            fontSize="10"
            letterSpacing="0.14em"
            fill="var(--somma-paper)"
            fillOpacity="0.55"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* halo + nodo central */}
      <circle cx={cx} cy={cy} r="34" fill="var(--somma-accent)" opacity="0.16" />
      <circle cx={cx} cy={cy} r="11" fill="var(--somma-accent)" filter="url(#cm-glow)" />
      <text
        x={cx}
        y={cy + 52}
        textAnchor="middle"
        className="font-mono"
        fontSize="11"
        letterSpacing="0.2em"
        fill="var(--somma-accent)"
      >
        SOMMA
      </text>
    </svg>
  );
}

/* ---- Linha de maturidade — diagonal ascendente oficial (T09, manual v2.0) ----
   Reativa (baixo-esquerda) → Previsível (topo-direita, azul-vivo + glow). Pointer "VOCÊ". */
const STAGES = [
  { x: 50, y: 150, label: "REATIVA" },
  { x: 190, y: 122, label: "ORGANIZADA" },
  { x: 330, y: 94, label: "ORIENTADA" },
  { x: 470, y: 66, label: "ESTRATÉGICA" },
  { x: 610, y: 38, label: "PREVISÍVEL" },
];

export function MaturityLine({
  active = 2,
  className = "",
}: {
  active?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 680 200"
      className={className}
      role="img"
      aria-label={`Linha de maturidade ascendente: ${STAGES.map((s) => s.label).join(", ")}. Estágio atual: ${STAGES[active].label}.`}
    >
      <line
        x1={STAGES[0].x}
        y1={STAGES[0].y}
        x2={STAGES[4].x}
        y2={STAGES[4].y}
        stroke="var(--somma-blue-light)"
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeDasharray="4 5"
      />
      {STAGES.map((s, i) => {
        const top = i === STAGES.length - 1;
        const cur = i === active;
        return (
          <g key={s.label}>
            {top && <circle cx={s.x} cy={s.y} r="17" fill="var(--somma-accent)" opacity="0.2" />}
            <circle
              cx={s.x}
              cy={s.y}
              r={top ? 9 : cur ? 8 : 5}
              fill={top || cur ? "var(--somma-accent)" : "transparent"}
              stroke={top || cur ? "var(--somma-accent)" : "var(--somma-blue-light)"}
              strokeOpacity={top || cur ? 1 : 0.5}
            />
            <text
              x={s.x}
              y={s.y + 26}
              textAnchor="middle"
              className="font-mono"
              fontSize="10"
              letterSpacing="0.12em"
              fill={top || cur ? "var(--somma-accent)" : "var(--somma-paper)"}
              fillOpacity={top || cur ? 1 : 0.5}
            >
              {s.label}
            </text>
            {cur && !top && (
              <>
                <line x1={s.x} y1={s.y - 15} x2={s.x} y2={s.y - 34} stroke="var(--somma-blue-light)" strokeOpacity="0.5" strokeWidth="0.8" />
                <text x={s.x} y={s.y - 40} textAnchor="middle" className="font-mono" fontSize="9" letterSpacing="0.14em" fill="var(--somma-blue-light)" fillOpacity="0.7">
                  ← VOCÊ
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ---- Bar chart com pico em azul vivo (S02) ---- */
export function PeakBarChart({
  className = "",
  data = [38, 52, 44, 67, 100, 58, 49],
  peakIndex = 4,
  peakLabel = "+3,4 p.p.",
}: {
  className?: string;
  data?: number[];
  peakIndex?: number;
  peakLabel?: string;
}) {
  const W = 360;
  const H = 180;
  const bw = W / data.length;
  return (
    <svg viewBox={`0 0 ${W} ${H + 24}`} className={className} role="img" aria-label="Gráfico de barras com pico destacado.">
      {data.map((v, i) => {
        const h = (v / 100) * H;
        const on = i === peakIndex;
        return (
          <g key={i}>
            <rect
              x={i * bw + bw * 0.2}
              y={H - h}
              width={bw * 0.6}
              height={h}
              rx="2"
              fill={on ? "var(--somma-accent)" : "var(--somma-blue-light)"}
              opacity={on ? 1 : 0.22}
            />
            {on && (
              <text
                x={i * bw + bw * 0.5}
                y={H - h - 8}
                textAnchor="middle"
                className="font-mono"
                fontSize="11"
                letterSpacing="0.08em"
                fill="var(--somma-accent)"
              >
                {peakLabel}
              </text>
            )}
          </g>
        );
      })}
      <line x1="0" y1={H} x2={W} y2={H} stroke="var(--somma-paper)" strokeOpacity="0.15" strokeWidth="1" />
    </svg>
  );
}
