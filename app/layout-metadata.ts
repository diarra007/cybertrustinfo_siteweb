import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cybertrustinfo.com"),
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
    url: "https://cybertrustinfo.com",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};
