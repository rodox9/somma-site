# SOMMA — Site Institucional

Site institucional multi-página da SOMMA (inteligência e estratégia para o mercado imobiliário B2B).

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- **Referência de direção:** Palantir (inteligência aplicada à operação), traduzida ao sistema visual SOMMA v2.0 — dark navy institucional + 1 acento vivo `#0198ff` (regra 70/20/10), big numbers, labels mono `[ ]`, alternância editorial dark/light.

## Páginas

| Rota | Página |
|---|---|
| `/` | Home — hero-tese, manifesto, pilares, método, 8 frentes, leitura SOMMA, CTA |
| `/sobre` | A SOMMA — verdade que enxergamos, missão/visão, arquétipos, valores |
| `/inteligencia` | Como pensamos — método em 5 passos, hierarquia do insight, pilares |
| `/servicos` | 8 frentes de inteligência (com âncoras) + como entregamos |
| `/insights` | Análises e leituras (base editorial / LinkedIn-driven) |
| `/contato` | Formulário B2B segmentado por persona |

## Rodar

```bash
npm run dev      # http://localhost:3000
npm run build    # build de produção (estático)
npm start        # servir o build
```

## Sistema de design

- **Tokens** (`app/globals.css`): navy `#23234e` · ink `#0e0e1a` · paper `#fff8eb` · graphite `#3b3939` · blue `#284496` · accent `#0198ff` · blue-light `#aad5f3`.
- **Fontes** (`app/layout.tsx`): Plus Jakarta Sans (display) · DM Sans (corpo) · IBM Plex Mono (labels/dados) · Newsreader Italic (pull-quotes).
- **Componentes** (`components/`): nav, footer, ui (Container/Label/Button/SectionHeading/Glow), reveal, page-hero, cta-band, contact-form.
- **Conteúdo canônico** (`lib/content.ts`): serviços, método, pilares, valores, personas, stats, insights — extraído de `brands/somma/manual.md`.

## Pendências para produção

- [ ] Ligar o formulário de contato a um endpoint/CRM/e-mail (hoje só estado local — ver `components/contact-form.tsx`).
- [ ] Substituir os 4 insights de exemplo por análises reais (CMS ou MDX).
- [ ] URLs reais de LinkedIn/Instagram e e-mail de contato.
- [ ] OG image e favicon SOMMA.
