# Implementation.md

## 1. Résumé du projet
Le projet consiste à développer un site web vitrine responsive pour **Cybertrustinfo Consulting**, une micro-entreprise de conseil en cybersécurité. L'objectif est de présenter les services (Audit, Conseil, Formation), l'expertise du fondateur, et de faciliter la prise de contact. Le site doit être performant, accessible, optimisé pour le SEO et respecter l'identité visuelle fournie.

## 2. Choix technologique
**Stack retenue :** Next.js (App Router) + Tailwind CSS + TypeScript.

**Justification :**
- **SEO :** Next.js offre un excellent support pour le SEO technique (Server-Side Rendering, métadonnées dynamiques), crucial pour la visibilité.
- **Performance :** Optimisation automatique des images (`next/image`) et des polices (`next/font`), chargement rapide.
- **Rapidité de développement :** L'écosystème React + Tailwind permet de construire rapidement des interfaces modernes et responsives (Mobile First).
- **Maintenance :** Architecture basée sur des composants réutilisables, typage fort avec TypeScript pour la robustesse.
- **Évolutivité :** Facilité d'ajout de fonctionnalités futures (blog, espace client) grâce à l'architecture Next.js.
- **Formulaire :** Utilisation des API Routes de Next.js pour gérer l'envoi d'emails de manière sécurisée.

## 3. Modules & Tâches

### Module 1 : Configuration & Socle Technique
- [ ] Initialiser le projet Next.js avec TypeScript et Tailwind CSS.
- [ ] Configurer le linter (ESLint) et le formateur (Prettier) selon les standards.
- [ ] Mettre en place la structure des dossiers (`components`, `app`, `public/assets`, `lib`, `styles`).
- [ ] Intégrer les polices (Poppins, Montserrat ou Inter) via `next/font`.
- [ ] Configurer les variables de couleurs (Bleu cybersécurité, gris, accents) dans `tailwind.config.ts`.
- [ ] Créer les composants de base (Button, Container, Section).
- [ ] Configurer les métadonnées de base (title, description, favicon).

### Module 2 : UI/UX & Assets
- [ ] Intégrer les logos fournis (`/assets/logo_png`, `/assets/logo_jpg`) dans le dossier `public`.
- [ ] Créer le composant `Header` (Navigation responsive, Logo).
- [ ] Créer le composant `Footer` (Liens, Mentions légales, Réseaux sociaux).
- [ ] Définir les styles globaux (reset, typographie).
- [ ] Créer une page 404 personnalisée.

### Module 3 : Pages Principales
#### Page d'Accueil (Home)
- [ ] Section "Hero" : Accroche, CTA, Visuel principal.
- [ ] Section "Présentation rapide" : Qui sommes-nous (bref).
- [ ] Section "Aperçu des services" : Cartes résumant les 5 services.
- [ ] Section "Expertise/Confiance" : Pourquoi nous choisir.
- [ ] Section "Contact rapide" : Appel à l'action.

#### Page "À Propos" & "Équipe"
- [ ] Présentation de l'entreprise (Valeurs, Mission).
- [ ] Profil du fondateur (Photo, Bio, Compétences, Certifications).
- [ ] Section "Approche" (Accompagnement personnalisé).

#### Page "Services"
- [ ] Détail des 5 services (Audit, Conseil, Formation, RGPD, Support).
- [ ] Mise en page claire pour chaque service (Icône, Description, Bénéfice).

### Module 4 : Fonctionnalités
#### Formulaire de Contact
- [ ] Créer le formulaire (Nom, Email, Sujet, Message, Consentement).
- [ ] Validation côté client (Zod ou React Hook Form).
- [ ] Créer une API Route (`/api/contact`) pour le traitement.
- [ ] Intégrer un service d'envoi d'email (ex: Resend, Nodemailer ou service tiers).
- [ ] Ajouter une protection anti-spam basique (Honeypot ou Captcha simple).
- [ ] Afficher les notifications de succès/erreur.

### Module 5 : Optimisation & SEO
- [ ] Remplir les métadonnées pour chaque page (Titre, Description, OpenGraph).
- [ ] Ajouter le fichier `sitemap.xml` et `robots.txt`.
- [ ] Optimiser les balises Alt des images.
- [ ] Vérifier la structure sémantique (H1, H2, H3).
- [ ] Audit LightHouse (Performance, Accessibilité, Best Practices, SEO).

## 4. Dépendances
- **Assets :** Les logos (`logo_png`, `logo_jpg`) doivent être présents dans le dossier `/assets` du projet (ou déplacés vers `public/assets` une fois le projet initialisé).
- **Contenu :** Les textes définitifs (Bio, Descriptions services) doivent être extraits du PRD ou fournis.
- **Service Email :** Nécessite une clé API pour le service d'envoi d'email choisi.

## 5. Priorités globales
1. **P0 :** Initialisation du projet et configuration du design system (Tailwind).
2. **P0 :** Intégration de la Page d'Accueil et du Header/Footer (Structure visuelle).
3. **P1 :** Pages Services et À Propos (Contenu).
4. **P1 :** Formulaire de Contact fonctionnel.
5. **P2 :** Optimisations SEO et Responsive fin (Mobile check).

## 6. Points d’attention
- **Mobile First :** Vérifier systématiquement le rendu sur mobile avant le desktop.
- **Logos :** Respecter les consignes d'utilisation (fond contrasté, pas de déformation).
- **Accessibilité :** Contraste des couleurs, navigation au clavier, balises ARIA si nécessaire.
- **Performance :** Attention au poids des images (utiliser `next/image` obligatoirement).
- **Sécurité :** Validation stricte des données du formulaire côté serveur.

