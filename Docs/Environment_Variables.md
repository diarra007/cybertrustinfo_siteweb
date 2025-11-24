# Variables d'Environnement - CyberTrustInfo

## Configuration Requise

### Production (Vercel)

Ces variables doivent être configurées dans **Vercel Dashboard** → **Settings** → **Environment Variables**

#### RESEND_API_KEY (Requis pour le formulaire de contact)
- **Description:** Clé API Resend pour l'envoi d'emails transactionnels
- **Format:** `re_xxxxxxxxxxxxxxxxxxxxx`
- **Où l'obtenir:** Voir `Docs/Resend_Configuration.md`
- **Environnements:** Production, Preview, Development

#### RESEND_FROM_EMAIL (Optionnel)
- **Description:** Email expéditeur personnalisé (une fois le domaine vérifié)
- **Format:** `"CyberTrustInfo Contact <contact@cybertrustinfo.com>"`
- **Par défaut:** `"CyberTrustInfo Contact <onboarding@resend.dev>"` (domaine de test Resend)
- **Note:** Nécessite la vérification du domaine dans Resend

## Configuration Locale (Développement)

Créez un fichier `.env.local` à la racine du projet (ne pas commiter dans Git) :

```env
RESEND_API_KEY=re_votre_cle_api_ici
RESEND_FROM_EMAIL="CyberTrustInfo Contact <onboarding@resend.dev>"
```

## Sécurité

⚠️ **IMPORTANT:**
- Ne jamais commiter les clés API dans Git
- Le fichier `.env.local` est déjà dans `.gitignore`
- Utilisez uniquement les variables d'environnement Vercel pour la production

