import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - CyberTrustInfo Consulting",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-white">
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-primary)]">Politique de Confidentialité</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <h3>1. Collecte des données</h3>
          <p>
            Nous collectons uniquement les données nécessaires au traitement de votre demande via le formulaire de contact : Nom, Email, Sujet, Message.
          </p>

          <h3>2. Utilisation des données</h3>
          <p>
            Ces informations sont utilisées exclusivement pour vous répondre et vous proposer nos services. Elles ne sont jamais vendues ni cédées à des tiers à des fins commerciales.
          </p>

          <h3>3. Vos droits (RGPD)</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles.
            Pour exercer ce droit, contactez-nous à : contact@cybertrustinfo.com
          </p>

          <h3>4. Cookies</h3>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire tiers n'est utilisé.
          </p>
        </div>
      </Container>
    </div>
  );
}

