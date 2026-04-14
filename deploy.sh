#!/bin/bash
set -e

echo "==> Build..."
npm run build

echo "==> Déploiement vers /var/www/fayma.co..."
rm -rf /var/www/fayma.co/*
cp -r dist/. /var/www/fayma.co/

echo "==> Rechargement nginx..."
systemctl reload nginx

echo "✓ fayma.co mis à jour."
