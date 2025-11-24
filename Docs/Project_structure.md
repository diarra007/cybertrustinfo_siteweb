# Structure du Projet - CyberTrustInfo

## 1. Stack Technologique (Implémentée)

- **Framework :** Next.js 15 (App Router)
- **Langage :** TypeScript
- **Styling :** Tailwind CSS v4 (Variables CSS natives)
- **Formulaires :** React Hook Form + Zod
- **Emailing :** Resend (API Route dédiée)
- **Fontes :** Google Fonts (Inter, Poppins) via `next/font`
- **SEO :** Métadonnées statiques et dynamiques, Sitemap XML, Robots.txt

## 2. Arborescence Finale

```
/
├── .cursor/                # Règles et configuration de l'IA
├── app/                    # App Router (Pages et Layouts)
│   ├── api/                # API Routes
│   │   └── contact/        # Route POST pour l'envoi d'email
│   ├── a-propos/           # Page À Propos
│   ├── contact/            # Page Contact
│   ├── equipe/             # Page Équipe
│   ├── mentions-legales/   # Page légale
│   ├── politique-confidentialite/ # Page légale
│   ├── services/           # Page Services
│   ├── globals.css         # Styles globaux & Thème Tailwind v4
│   ├── layout.tsx          # Layout racine (Header, Footer, Fonts)
│   ├── layout-metadata.ts  # Configuration SEO centralisée
│   ├── page.tsx            # Page d'accueil
│   ├── robots.ts           # Génération robots.txt
│   └── sitemap.ts          # Génération sitemap.xml
├── components/             # Composants React
│   ├── ui/                 # Composants de base (Button, Container)
│   ├── layout/             # Composants de structure (Header, Footer)
│   └── sections/           # Sections de pages (Hero, ContactForm...)
├── lib/                    # Utilitaires
│   └── utils.ts            # Helpers (cn, etc.)
├── public/                 # Fichiers statiques
│   ├── assets/             # Logos (logo_png.png, logo_jpg.jpg)
│   ├── favicon.ico         # Favicon principal
│   ├── favicon-16x16.png   # Favicon 16x16
│   ├── favicon-32x32.png   # Favicon 32x32
│   ├── apple-touch-icon.png # Apple Touch Icon
│   ├── android-chrome-192x192.png # Android icon 192x192
│   ├── android-chrome-512x512.png # Android icon 512x512
│   └── site.webmanifest    # Web App Manifest
├── Docs/                   # Documentation du projet
├── .eslintrc.json          # Configuration Linter
├── next.config.ts          # Configuration Next.js
├── postcss.config.mjs      # Configuration PostCSS
└── tsconfig.json           # Configuration TypeScript
```

## 3. Conventions de Code Respectées
- **Composants :** PascalCase, Server Components par défaut, `'use client'` uniquement si nécessaire.
- **Styles :** Utility-first avec Tailwind, variables CSS pour le thème (`--color-primary`, etc.) définies dans `globals.css`.
- **Imports :** Alias `@/` configuré pour pointer vers la racine.

## 4. Règles de Développement
- **Mobile First :** Toutes les vues sont conçues pour mobile d'abord, puis adaptées (`md:`, `lg:`).
- **Accessibilité :** Usage des balises sémantiques, attributs `alt` pour les images, navigation clavier.
- **Sécurité :** Validation Zod sur le front ET le back pour le formulaire de contact.
