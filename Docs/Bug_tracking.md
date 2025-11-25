# Suivi des Bugs - CyberTrustInfo

Ce document recense les problèmes connus, les bugs rencontrés et les tâches de correction.

| ID | Date | Description | Statut | Priorité | Assigné à | Notes |
|----|------|-------------|--------|----------|-----------|-------|
| BUG-001 | 2025-01-23 | Texte blanc sur fond blanc dans les sections Hero (résolu) | Résolu | P1 | - | Correction appliquée : ajout de text-slate-900 sur les titres |
| BUG-002 | 2025-01-23 | Menu actif non distingué visuellement (résolu) | Résolu | P1 | - | Ajout de la détection de route active avec usePathname() |
| BUG-003 | 2025-01-23 | Favicons non configurés correctement (résolu) | Résolu | P2 | - | Favicons déplacés dans public/ et métadonnées mises à jour |
| FEAT-001 | 2025-01-23 | Logo navbar agrandi | Résolu | P2 | - | Logo agrandi de h-12 w-48 à h-16 w-56 sans modifier la hauteur de la navbar |
| UPDATE-001 | 2025-01-23 | Mise à jour zone d'intervention et adresse | Résolu | P1 | - | Zone d'intervention changée en "France", adresse mise à jour : 5 Rue du Moulinas - 66330 CABESTANY |
| BUG-004 | 2025-01-23 | Texte invisible dans les champs du formulaire de contact | Résolu | P0 | - | Ajout de text-slate-900 et bg-white sur tous les champs input, textarea et select pour rendre le texte visible |

*Statuts possibles :* `Nouveau`, `En cours`, `Résolu`, `Fermé`
*Priorités :* `P0` (Critique), `P1` (Important), `P2` (Mineur)

## Notes de Configuration

### Configuration Resend
- **Status:** En attente de configuration
- **Action requise:** Obtenir la clé API Resend et configurer le domaine cybertrustinfo.com
- **Documentation:** Voir `Docs/Resend_Configuration.md`

### Configuration DNS
- **Status:** En attente de configuration
- **Action requise:** Configurer les enregistrements DNS dans Squarespace pour pointer vers Vercel
- **Documentation:** Voir `Docs/DNS_Configuration.md`
