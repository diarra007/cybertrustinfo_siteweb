# Configuration Favicon - CyberTrustInfo

## ✅ Favicon Configuré

Le favicon a été configuré pour utiliser le logo de CyberTrustInfo.

### Fichiers créés :
- `app/icon.png` - Copie du logo PNG (utilisé automatiquement par Next.js)
- Métadonnées d'icônes ajoutées dans `app/layout-metadata.ts`

### Fonctionnement :
Next.js 13+ détecte automatiquement `icon.png` dans le dossier `app/` et le convertit en différentes tailles pour :
- Favicon standard (16x16, 32x32)
- Apple Touch Icon (180x180)
- Icônes Android

### Amélioration optionnelle (pour un favicon.ico classique) :

Si vous voulez créer un `favicon.ico` traditionnel à partir du logo :

1. **En ligne (Recommandé) :**
   - Allez sur [favicon.io](https://favicon.io/favicon-converter/)
   - Uploadez `public/assets/logo_png.png`
   - Téléchargez le `favicon.ico` généré
   - Placez-le dans `app/favicon.ico`

2. **Avec un outil local :**
   - Utilisez ImageMagick ou un convertisseur d'images
   - Convertissez le logo en 16x16, 32x32, 48x48
   - Créez un fichier .ico multi-taille

### Vérification :
Après déploiement, vérifiez que le favicon apparaît :
- Dans l'onglet du navigateur
- Dans les favoris
- Sur mobile (icône d'application)

