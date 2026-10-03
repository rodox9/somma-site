import type { NextConfig } from "next";

// Domínio próprio (sommainc.com.br) via GitHub Pages: o site serve na RAIZ,
// então NÃO usamos basePath. O arquivo public/CNAME fixa o domínio a cada deploy.
const nextConfig: NextConfig = {
  // Export 100% estático (gera a pasta `out/` com HTML/CSS/JS).
  output: "export",

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
