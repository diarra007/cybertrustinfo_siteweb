# Guide Détaillé - Configuration DNS Resend dans Squarespace

## 📋 Vue d'ensemble

Resend vous demande d'ajouter plusieurs enregistrements DNS dans Squarespace pour vérifier votre domaine. Voici comment procéder étape par étape.

## 🎯 Enregistrements à ajouter (dans l'ordre)

### Étape 1 : Accéder aux paramètres DNS de Squarespace

1. **Connectez-vous à Squarespace**
2. Allez dans **Settings** (Paramètres)
3. Cliquez sur **Domains**
4. Sélectionnez votre domaine `cybertrustinfo.com`
5. Cliquez sur **DNS Settings** (ou **Paramètres DNS**)

---

### Étape 2 : Ajouter l'enregistrement DKIM (Domain Verification)

**Dans Resend, vous voyez :**
- **Type:** `TXT`
- **Name:** `resend._domainkey`
- **Content:** `p=MIGfMAOGCSqGSIb3DQEB...` (votre valeur complète)
- **TTL:** `Auto`

**Dans Squarespace :**

1. Dans la section **DNS Settings**, cherchez **"Custom Records"** ou **"Enregistrements personnalisés"**
2. Cliquez sur **"Add Record"** ou **"Ajouter un enregistrement"**
3. Remplissez :
   - **Type:** Sélectionnez `TXT`
   - **Host/Name:** Entrez `resend._domainkey` (sans le domaine)
   - **Data/Value:** Collez la valeur complète de **Content** depuis Resend
   - **TTL:** Laissez par défaut (ou 3600)
4. Cliquez sur **Save** ou **Enregistrer**

**✅ Résultat attendu :** Un enregistrement TXT avec le nom `resend._domainkey.cybertrustinfo.com`

---

### Étape 3 : Ajouter les enregistrements SPF (Enable Sending)

Resend vous montre **2 enregistrements** pour SPF :

#### A. Enregistrement MX

**Dans Resend :**
- **Type:** `MX`
- **Name:** `send`
- **Content:** `feedback-smtp.eu-west-1.amazonses.com` (ou similaire)
- **Priority:** `10`

**Dans Squarespace :**

1. Cliquez sur **"Add Record"**
2. Remplissez :
   - **Type:** Sélectionnez `MX`
   - **Host/Name:** Entrez `send` (sans le domaine)
   - **Points to/Value:** Entrez `feedback-smtp.eu-west-1.amazonses.com` (la valeur complète de Resend)
   - **Priority:** Entrez `10`
   - **TTL:** Laissez par défaut
3. Cliquez sur **Save**

#### B. Enregistrement TXT (SPF)

**Dans Resend :**
- **Type:** `TXT`
- **Name:** `send`
- **Content:** `v=spf1 include:amazonses.com ~all` (ou similaire)
- **TTL:** `Auto`

**Dans Squarespace :**

1. Cliquez sur **"Add Record"**
2. Remplissez :
   - **Type:** Sélectionnez `TXT`
   - **Host/Name:** Entrez `send` (sans le domaine)
   - **Data/Value:** Collez la valeur complète de **Content** depuis Resend
   - **TTL:** Laissez par défaut
3. Cliquez sur **Save**

**✅ Résultat attendu :** 2 enregistrements pour `send.cybertrustinfo.com` (1 MX + 1 TXT)

---

### Étape 4 : Ajouter l'enregistrement DMARC (Optionnel mais recommandé)

**Dans Resend :**
- **Type:** `TXT`
- **Name:** `_dmarc`
- **Content:** `v=DMARC1; p=none;`
- **TTL:** `Auto`

**Dans Squarespace :**

1. Cliquez sur **"Add Record"**
2. Remplissez :
   - **Type:** Sélectionnez `TXT`
   - **Host/Name:** Entrez `_dmarc` (avec le underscore)
   - **Data/Value:** Collez `v=DMARC1; p=none;`
   - **TTL:** Laissez par défaut
3. Cliquez sur **Save**

**✅ Résultat attendu :** Un enregistrement TXT avec le nom `_dmarc.cybertrustinfo.com`

---

### Étape 5 : Vérifier dans Resend

1. **Retournez sur Resend**
2. Cochez la case **"I've added the records"** (J'ai ajouté les enregistrements)
3. Cliquez sur **"Verify Domain"** ou **"Vérifier le domaine"**
4. **Attendez 5-30 minutes** (la propagation DNS peut prendre du temps)
5. Resend vérifiera automatiquement les enregistrements

---

## ⚠️ Points importants

### Nom des enregistrements (Host/Name)

- Dans Squarespace, entrez **seulement la partie avant le point**
- Exemple : Si Resend dit `resend._domainkey`, entrez `resend._domainkey` (pas `resend._domainkey.cybertrustinfo.com`)
- Squarespace ajoute automatiquement le domaine

### Ordre d'ajout

L'ordre n'est pas critique, mais ajoutez-les dans cet ordre pour éviter les erreurs :
1. DKIM (Domain Verification)
2. SPF - MX
3. SPF - TXT
4. DMARC (optionnel)

### Vérification

Après avoir ajouté tous les enregistrements :
- Attendez **15-30 minutes** pour la propagation DNS
- Retournez sur Resend et cliquez sur **"Verify Domain"**
- Si certains échouent, vérifiez que vous avez bien copié les valeurs complètes

---

## 🚨 Problèmes courants

### "Enregistrement introuvable"
- Vérifiez que vous avez bien enregistré (Save) chaque enregistrement
- Attendez 30 minutes et réessayez

### "Valeur incorrecte"
- Copiez-collez la valeur **complète** depuis Resend (elle peut être très longue)
- Vérifiez qu'il n'y a pas d'espaces en début/fin

### "Nom d'hôte incorrect"
- N'ajoutez **pas** `.cybertrustinfo.com` dans le champ Host/Name
- Entrez seulement `resend._domainkey`, `send`, ou `_dmarc`

---

## ✅ Checklist finale

- [ ] Enregistrement DKIM ajouté (`resend._domainkey`)
- [ ] Enregistrement MX SPF ajouté (`send`)
- [ ] Enregistrement TXT SPF ajouté (`send`)
- [ ] Enregistrement DMARC ajouté (`_dmarc`) - optionnel
- [ ] Tous les enregistrements sauvegardés dans Squarespace
- [ ] Case cochée dans Resend "I've added the records"
- [ ] Clic sur "Verify Domain" dans Resend
- [ ] Attente de 15-30 minutes
- [ ] Vérification réussie dans Resend ✅

---

## 📞 Si vous avez des difficultés

Si après 1 heure les enregistrements ne sont toujours pas vérifiés :
1. Vérifiez que tous les enregistrements sont bien visibles dans Squarespace
2. Utilisez un outil de vérification DNS : [mxtoolbox.com](https://mxtoolbox.com/SuperTool.aspx)
3. Contactez le support Resend si nécessaire

