import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cybertrustinfo.vercel.app"), // Remplacez par votre domaine Vercel ou personnalisé
  title: {
    default: "CyberTrustInfo Consulting - Expert en Cybersécurité TPE/PME",
    template: "%s | CyberTrustInfo Consulting",
  },
  description: "Audit, Conseil, Formation et Conformité RGPD. Accompagnement en cybersécurité sur-mesure pour les petites structures et indépendants.",
  keywords: ["Cybersécurité", "Audit", "PME", "TPE", "RGPD", "Formation", "Conseil", "Sécurité informatique", "Pentest"],
  authors: [{ name: "Mamadou COULIBALY MALLE" }],
  creator: "CyberTrustInfo Consulting",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cybertrustinfo.vercel.app",
    siteName: "CyberTrustInfo Consulting",
    title: "CyberTrustInfo Consulting - Protégez votre activité",
    description: "Expertise en cybersécurité accessible pour TPE, PME et indépendants.",
    images: [
      {
        url: "/assets/logo_jpg.jpg",
        width: 1200,
        height: 630,
        alt: "CyberTrustInfo Consulting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberTrustInfo Consulting",
    description: "Expertise en cybersécurité accessible pour TPE, PME et indépendants.",
    images: ["/assets/logo_jpg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
