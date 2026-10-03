import type { NextConfig } from "next";

// GitHub Pages serve o site em https://rodox9.github.io/somma-site/
// => precisamos de export estático + basePath com o nome do repositório.
const repoBase = "/somma-site";

const nextConfig: NextConfig = {
  // Export 100% estático (gera a pasta `out/` com HTML/CSS/JS).
  output: "export",

  // Prefixo de rota/asset exigido pelo project page do GitHub Pages.
  basePath: repoBase,

  // Cada rota vira /rota/index.html — evita 404 ao recarregar rota interna no Pages.
  trailingSlash: true,

  // Sem servidor de otimização de imagem no Pages: servir os arquivos como estão.
  images: {
    unoptimized: true,
  },

  // Fixa a raiz do projeto: o workspace OPENSQUAD tem outro lockfile acima,
  // o que faz o Next inferir o root errado.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
