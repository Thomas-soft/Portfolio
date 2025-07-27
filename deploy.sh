#!/bin/bash
set -e

echo "🚀 Génération du site..."
npm run generate:prod

echo "🛠 Ajout de .nojekyll..."
touch .output/public/.nojekyll

echo "🚀 Déploiement vers GitHub Pages..."
npx gh-pages -d .output/public -m "deploy: $(date)"

echo "✅ Déploiement terminé !"
