# UI/UX Documentation - CyberTrustInfo

## 1. Principes Généraux
- **Approche :** Mobile First (priorité aux petits écrans).
- **Style :** Professionnel, Épuré, Rassurant ("Trust").
- **Ambiance :** Sérieuse mais accessible (Cybersécurité pour TPE/PME).

## 2. Palette de Couleurs
Définie dans `tailwind.config.ts`.

### Couleurs Primaires
- **Primary Blue :** `#0F172A` (Slate 900) ou Bleu marine profond - *Évoque la sécurité, la rigueur.*
- **Secondary Blue :** `#3B82F6` (Blue 500) - *Pour les actions principales (CTA), liens.*

### Couleurs Neutres
- **Background :** `#FFFFFF` (Blanc) et `#F8FAFC` (Slate 50) - *Pour aérer le contenu.*
- **Text Main :** `#1E293B` (Slate 800) - *Lisibilité maximale.*
- **Text Muted :** `#64748B` (Slate 500) - *Pour les sous-titres.*

### Couleurs d'Accent / Feedback
- **Success :** `#10B981` (Emerald 500) - *Validation formulaires.*
- **Warning/Alert :** `#F59E0B` (Amber 500) ou `#EF4444` (Red 500) - *Pour attirer l'attention (ex: vulnérabilités).*

## 3. Typographie
Choix des polices (Google Fonts via `next/font`) :

- **Titres (Headings) :** `Poppins` ou `Montserrat`
  - Poids : Bold (700), SemiBold (600).
  - Usage : H1, H2, H3.

- **Corps de texte (Body) :** `Inter` ou `Open Sans`
  - Poids : Regular (400), Medium (500).
  - Usage : Paragraphes, listes, inputs.

## 4. Logos & Assets
Les logos sont stockés dans `/public/assets/`.

- **Logo PNG (Fond transparent) :**
  - Utilisation : Header, Footer sur fond sombre.
  - Contrainte : Ne jamais déformer le ratio.

- **Logo JPG :**
  - Utilisation : Métadonnées OpenGraph, signatures email, contextes sans transparence.

## 5. Composants UI Clés
### Boutons
- **Primaire :** Fond Bleu (#3B82F6), Texte Blanc, Rounded-md, Hover: Bleu foncé.
- **Secondaire :** Bordure Bleue, Texte Bleu, Fond Transparent, Hover: Fond bleu très clair.

### Cartes (Services)
- Fond blanc, ombre légère (`shadow-sm`), bordure fine (`border-slate-200`).
- Hover : Légère élévation (`shadow-md`) et transition douce.

## 6. Structure des Pages
1. **Header :** Logo à gauche, Menu Burger (Mobile) / Liens (Desktop) à droite.
2. **Hero Section :** Titre fort, Sous-titre valeur ajoutée, CTA visible au-dessus de la ligne de flottaison.
3. **Footer :** Liens rapides, Contact, Copyright, Mentions légales.

