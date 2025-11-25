# Guide de Dépannage - Formulaire de Contact

## 🔍 Diagnostic des Erreurs

### Erreur : "Une erreur est survenue. Merci de réessayer ou de nous contacter par email."

Cette erreur peut avoir plusieurs causes :

### 1. Clé API Resend manquante ou invalide

**Symptôme :** L'erreur apparaît immédiatement après la soumission.

**Solution :**
1. Vérifiez dans **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**
2. Assurez-vous que `RESEND_API_KEY` est bien définie
3. Vérifiez que la clé commence par `re_` et est complète
4. **Redéployez** le projet après avoir ajouté/modifié la variable

**Pour obtenir une clé API :**
- Allez sur [resend.com](https://resend.com)
- Connectez-vous
- Menu → **API Keys** → **Create API Key**
- Copiez la clé (elle ne sera affichée qu'une fois !)

### 2. Domaine non vérifié (si vous utilisez un domaine personnalisé)

**Symptôme :** L'erreur mentionne "domain not verified" dans les logs.

**Solution :**
- Utilisez temporairement `onboarding@resend.dev` comme expéditeur
- OU vérifiez votre domaine dans Resend (voir `Docs/Resend_Configuration.md`)

### 3. Limite de quota atteinte

**Symptôme :** L'erreur apparaît après plusieurs envois réussis.

**Solution :**
- Vérifiez votre quota dans Resend Dashboard
- Le plan gratuit limite à 100 emails/jour avec `onboarding@resend.dev`
- Vérifiez votre domaine pour augmenter la limite

### 4. Erreur de validation des données

**Symptôme :** L'erreur apparaît immédiatement, mais les champs semblent valides.

**Solution :**
- Vérifiez que tous les champs sont remplis correctement
- Le message doit contenir au moins 10 caractères
- Le sujet doit contenir au moins 5 caractères
- La case de consentement doit être cochée

## 🔧 Vérification Rapide

### Dans Vercel :
1. **Settings** → **Environment Variables**
2. Vérifiez que `RESEND_API_KEY` existe et est correcte
3. Vérifiez les **logs** dans **Deployments** → Cliquez sur un déploiement → **Functions** → `/api/contact`

### Dans les Logs Vercel :
Cherchez ces messages :
- `⚠️ RESEND_API_KEY manquante` → Clé non configurée
- `❌ Erreur Resend:` → Erreur de l'API Resend (détails dans le log)
- `✅ Email envoyé avec succès` → Tout fonctionne !

## 📝 Test Rapide

Pour tester sans formulaire, vous pouvez utiliser cette commande curl (remplacez l'URL par votre domaine) :

```bash
curl -X POST https://cybertrustinfo.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test de contact",
    "message": "Ceci est un message de test pour vérifier le formulaire",
    "consent": true
  }'
```

## ✅ Checklist de Vérification

- [ ] Clé API Resend configurée dans Vercel
- [ ] Variable d'environnement `RESEND_API_KEY` présente
- [ ] Projet redéployé après ajout de la variable
- [ ] Clé API valide (commence par `re_`)
- [ ] Quota Resend non dépassé
- [ ] Tous les champs du formulaire remplis correctement
- [ ] Case de consentement cochée

## 🆘 Si le problème persiste

1. **Vérifiez les logs Vercel** pour voir l'erreur exacte
2. **Testez avec un compte Resend différent** pour isoler le problème
3. **Contactez le support Resend** si l'erreur vient de leur API
4. **Vérifiez la console du navigateur** (F12) pour voir les erreurs côté client

