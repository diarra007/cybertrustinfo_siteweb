import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Mentions Légales - CyberTrustInfo Consulting",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <div className="py-20 bg-white">
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-primary)]">Mentions Légales</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <h3>1. Éditeur du site</h3>
          <p>
            Le site <strong>CyberTrustInfo Consulting</strong> est édité par :<br/>
            <strong>Mamadou COULIBALY MALLE</strong><br/>
            Consultant indépendant en cybersécurité<br/>
            Email : contact@cybertrustinfo.com<br/>
            [Adresse postale à compléter]<br/>
            [SIRET à compléter]
          </p>

          <h3>2. Hébergement</h3>
          <p>
            Ce site est hébergé par :<br/>
            [Nom de l'hébergeur, ex: Vercel Inc.]<br/>
            [Adresse de l'hébergeur]
          </p>

          <h3>3. Propriété intellectuelle</h3>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </div>
      </Container>
    </div>
  );
}

