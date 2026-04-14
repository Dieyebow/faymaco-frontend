#!/bin/bash

# ==============================================================================
# Script de déploiement local vers le serveur distant (ignoré par Git)
# ==============================================================================

echo "🚀 Début du processus de déploiement..."

# 1. Commit automatique des éventuelles modifications
if [[ $(git status --porcelain) ]]; then
  echo "📦 Des modifications locales ont été détectées. Création d'un commit."
  git add .
  git commit -m "Auto deploy - $(date +'%Y-%m-%d %H:%M:%S')"
else
  echo "🤷 Aucune modification locale."
fi

# 2. Push vers le dépôt distant
echo "⬆️ Envoi des données vers GitHub..."
git push

# 3. Connexion SSH au serveur et exécution des commandes distantes
SERVER="peelochat"
REMOTE_DIR="/root/apps/faymaco-landing"

echo "🌐 Connexion à $SERVER..."
echo "--- Début du script distant ---"

# Exécute git pull puis le deploy.sh distant
ssh $SERVER "cd $REMOTE_DIR && echo '⬇️ Récupération des nouveautés (git pull)...' && git pull && echo '⚙️ Exécution de ./deploy.sh sur le serveur...' && ./deploy.sh"

echo "--- Fin du script distant ---"
echo "✅ Processus de déploiement terminé avec succès !"
