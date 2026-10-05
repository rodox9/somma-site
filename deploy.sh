#!/usr/bin/env bash
# Deploy do site SOMMA para o GitHub Pages (branch gh-pages).
# Fluxo: build estático -> travas de segurança -> publica out/ no gh-pages.
# Uso:  ./deploy.sh
set -euo pipefail

REPO_URL="https://github.com/rodox9/somma-site.git"
DOMAIN="sommainc.com.br"
HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE"

echo "==> 1/4  Build estático (next build)"
rm -rf out .next/cache 2>/dev/null || true
npm run build

echo "==> 2/4  Travas de segurança (nunca publicar fonte/parcial)"
[ -f out/index.html ] || { echo "ERRO: out/index.html não existe. Abortado."; exit 1; }
[ -d out/_next ]      || { echo "ERRO: out/_next ausente (build inválido). Abortado."; exit 1; }
[ -f out/package.json ] && { echo "ERRO: out/ parece código-fonte, não site. Abortado."; exit 1; }
# CNAME e .nojekyll obrigatórios no Pages
echo "$DOMAIN" > out/CNAME
touch out/.nojekyll
echo "    ok: index.html, _next, CNAME=$(cat out/CNAME), .nojekyll"

echo "==> 3/4  Publicando no branch gh-pages"
pushd out >/dev/null
rm -rf .git
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.email="ouse.or@gmail.com" -c user.name="rodox9" \
    commit -q -m "deploy: site estático $DOMAIN ($(date +%Y-%m-%d\ %H:%M))"
git push -q -f "$REPO_URL" gh-pages
rm -rf .git
popd >/dev/null

echo "==> 4/4  Pronto."
echo "    Produção: https://$DOMAIN  (propagação do Pages: ~1 min)"
