# Guide - Variable d'Environnement Non Accessible au Runtime

## 🔍 Problème : Variable configurée mais non accessible

Si vous voyez l'erreur "RESEND_API_KEY manquante" alors que la variable est bien configurée dans Vercel, voici les causes possibles :

### Cause 1 : Projet non redéployé après ajout de la variable

**Solution :**
1. Dans Vercel Dashboard → Votre projet → **Deployments**
2. Cliquez sur **"Redeploy"** sur le dernier déploiement
3. OU faites un nouveau commit et push vers votre repository (Vercel redéploiera automatiquement)

**⚠️ Important :** Les variables d'environnement ne sont disponibles qu'après un redéploiement !

### Cause 2 : Variable configurée pour le mauvais environnement

**Vérification :**
1. Vercel Dashboard → Settings → Environment Variables
2. Vérifiez que `RESEND_API_KEY` est cochée pour :
   - ✅ **Production**
   - ✅ **Preview** (optionnel mais recommandé)
   - ✅ **Development** (optionnel)

### Cause 3 : Nom de variable incorrect

**Vérification :**
- Le nom doit être exactement : `RESEND_API_KEY` (sensible à la casse)
- Pas d'espaces avant/après
- Pas de guillemets dans la valeur

### Cause 4 : Cache de build

**Solution :**
1. Vercel Dashboard → Settings → General
2. Cliquez sur **"Clear Build Cache"**
3. Redéployez le projet

## ✅ Étapes de Vérification

1. **Vérifier la variable dans Vercel :**
   - Settings → Environment Variables
   - `RESEND_API_KEY` doit être présente
   - Valeur doit commencer par `re_`

2. **Redéployer le projet :**
   - Deployments → Redeploy (ou nouveau commit)

3. **Vérifier les logs après redéploiement :**
   - Deployments → Cliquez sur le déploiement → Functions → `/api/contact`
   - Cherchez les logs de diagnostic

4. **Tester à nouveau le formulaire**

## 🔧 Solution Rapide

**Commande pour forcer un redéploiement :**

```bash
# Faites un petit changement dans le code (ex: ajouter un commentaire)
# Puis commit et push
git add .
git commit -m "Force redeploy for env vars"
git push
```

Vercel redéploiera automatiquement avec les nouvelles variables d'environnement.

## 📝 Note Technique

Les variables d'environnement dans Next.js sont injectées au moment du **build** et du **runtime**. Si vous ajoutez une variable après le build, elle ne sera disponible qu'après un nouveau déploiement.

