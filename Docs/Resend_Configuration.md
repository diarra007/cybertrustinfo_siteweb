# Guide Configuration Resend - CyberTrustInfo

## 📧 Configuration du Service d'Email Resend

### Étape 1 : Créer un compte Resend

1. **Allez sur [resend.com](https://resend.com)**
2. Cliquez sur **"Sign Up"** (en haut à droite)
3. Créez un compte avec :
   - Email professionnel (recommandé)
   - Mot de passe sécurisé
   - Confirmez votre email

### Étape 2 : Obtenir votre clé API

1. **Une fois connecté**, allez dans **"API Keys"** (menu de gauche)
2. Cliquez sur **"Create API Key"**
3. Donnez un nom à votre clé (ex: "CyberTrustInfo Production")
4. **Copiez la clé API** immédiatement (elle ne sera affichée qu'une seule fois !)
   - Format : `re_xxxxxxxxxxxxxxxxxxxxx`

### Étape 3 : Vérifier votre domaine (Recommandé pour production)

**⚠️ Est-ce obligatoire ?**
- **Non**, vous pouvez commencer sans vérification en utilisant `onboarding@resend.dev`
- **Mais c'est fortement recommandé** pour la production car :
  - Meilleure délivrabilité (moins de spam)
  - Email professionnel (`contact@cybertrustinfo.com`)
  - Pas de limite de 100 emails/jour

**Si vous voulez vérifier votre domaine :**

1. Dans Resend, allez dans **"Domains"**
2. Cliquez sur **"Add Domain"**
3. Entrez : `cybertrustinfo.com`
4. Resend vous donnera des enregistrements DNS à ajouter :
   - **DKIM** (1 enregistrement TXT : `resend._domainkey`)
   - **SPF** (2 enregistrements : 1 MX + 1 TXT pour `send`)
   - **DMARC** (1 enregistrement TXT : `_dmarc` - optionnel)

5. **Ajoutez ces enregistrements dans Squarespace :**
   - **Guide détaillé :** Voir `Docs/Resend_DNS_Squarespace.md` pour les instructions pas à pas avec captures d'écran
   - Allez dans **Settings** → **Domains** → Votre domaine → **DNS Settings**
   - Ajoutez chaque enregistrement selon le guide
   - Attendez 15-30 minutes pour la propagation DNS

6. **Dans Resend :**
   - Cochez "I've added the records"
   - Cliquez sur "Verify Domain"
   - Attendez la vérification (peut prendre quelques heures)

7. **Une fois vérifié**, vous pourrez utiliser `contact@cybertrustinfo.com` comme expéditeur

### Étape 4 : Configuration dans Vercel

1. **Allez dans votre projet Vercel**
2. **Settings** → **Environment Variables**
3. Cliquez sur **"Add New"**
4. Ajoutez :
   - **Name:** `RESEND_API_KEY`
   - **Value:** Votre clé API (commence par `re_`)
   - **Environment:** Sélectionnez **Production**, **Preview**, et **Development**
5. Cliquez sur **"Save"**

### Étape 5 : Redéployer

1. Vercel redéploiera automatiquement, OU
2. Allez dans **Deployments** → Cliquez sur **"Redeploy"** sur le dernier déploiement

### ✅ Vérification

Une fois configuré, testez le formulaire de contact sur votre site :
- Le message devrait arriver sur `contact@cybertrustinfo.com`
- Vous recevrez un email avec les détails du formulaire
- L'expéditeur pourra répondre directement (replyTo configuré)

### 🔒 Sécurité

- **Ne partagez jamais** votre clé API publiquement
- Ne commitez **jamais** la clé API dans Git
- Utilisez uniquement les variables d'environnement Vercel
- Régénérez la clé si elle est compromise

### 📝 Note sur le domaine de test

En attendant la vérification de votre domaine, Resend fournit un domaine de test :
- `onboarding@resend.dev` (limité à 100 emails/jour)
- Une fois votre domaine vérifié, vous pourrez utiliser `contact@cybertrustinfo.com`

