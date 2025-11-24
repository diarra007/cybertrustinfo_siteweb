# Guide de Configuration DNS - Squarespace vers Vercel

## 📋 Instructions pour lier votre domaine Squarespace à Vercel

### Option A : Utiliser le sous-domaine WWW (Recommandé)

1. **Dans Vercel :**
   - Ajoutez le domaine : `www.cybertrustinfo.com`
   - Vercel vous donnera un enregistrement CNAME à configurer

2. **Dans Squarespace :**
   - Allez dans **Settings** → **Domains** → Votre domaine
   - Cliquez sur **"DNS Settings"** ou **"Advanced Settings"**
   - Ajoutez un enregistrement CNAME :
     - **Host/Name:** `www`
     - **Points to:** `cname.vercel-dns.com` (ou l'URL fournie par Vercel)
     - **TTL:** 3600 (ou laissez par défaut)

3. **Redirection du domaine racine (Optionnel mais recommandé) :**
   - Ajoutez un enregistrement A :
     - **Host/Name:** `@` (ou laissez vide pour le domaine racine)
     - **Points to:** `76.76.21.21` (IP Vercel)
   - OU ajoutez un CNAME :
     - **Host/Name:** `@`
     - **Points to:** `cname.vercel-dns.com`

### Option B : Utiliser le domaine racine (cybertrustinfo.com)

1. **Dans Vercel :**
   - Ajoutez le domaine : `cybertrustinfo.com`
   - Vercel vous donnera des enregistrements A à configurer

2. **Dans Squarespace :**
   - Allez dans **Settings** → **Domains** → Votre domaine
   - Cliquez sur **"DNS Settings"**
   - Ajoutez les enregistrements A suivants :
     - **Host/Name:** `@` (ou vide)
     - **Points to:** `76.76.21.21`
     - **Points to:** `76.76.21.22`
     - (Vercel peut vous donner d'autres IPs, utilisez celles fournies)

3. **Pour le sous-domaine www (redirection) :**
   - Ajoutez un CNAME :
     - **Host/Name:** `www`
     - **Points to:** `cname.vercel-dns.com`

### ⚠️ Important :
- La propagation DNS peut prendre **24-48 heures** (souvent moins)
- Vérifiez que Squarespace n'utilise pas déjà ces enregistrements pour son propre site
- Si vous avez un site Squarespace actif, vous devrez peut-être le désactiver ou utiliser un sous-domaine différent

### ✅ Vérification :
Une fois configuré, vérifiez avec :
- `nslookup www.cybertrustinfo.com` (ou votre domaine)
- Ou utilisez un outil en ligne : [whatsmydns.net](https://www.whatsmydns.net)

