import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services - CyberTrustInfo Consulting",
  description: "Découvrez nos services d'audit, de conseil, de formation et d'accompagnement RGPD pour sécuriser votre activité.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "audit",
      title: "Audit de Sécurité",
      subtitle: "Diagnostic complet de votre infrastructure",
      description: "Un état des lieux exhaustif pour identifier vos vulnérabilités et prioriser les actions.",
      details: [
        "Cartographie complète de votre système d'information",
        "Identification des vulnérabilités (réseau, web, postes)",
        "Tests d'intrusion (Pentest) adaptés à votre activité",
        "Rapport détaillé avec recommandations priorisées",
        "Plan d'action chiffré et réaliste",
      ],
      icon: "🔍",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      id: "conseil",
      title: "Conseil & Solutions",
      subtitle: "Des solutions concrètes et adaptées",
      description: "Mise en place de stratégies de défense et solutions techniques sur-mesure.",
      details: [
        "Architecture réseau sécurisée et segmentée",
        "Choix et configuration de solutions (Antivirus, EDR, Pare-feu)",
        "Politique de mots de passe et gestion des accès (IAM)",
        "Sécurisation des sauvegardes et plan de reprise d'activité",
        "Accompagnement dans le choix des prestataires",
      ],
      icon: "🛡️",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      id: "formation",
      title: "Formation & Sensibilisation",
      subtitle: "L'humain, première ligne de défense",
      description: "Formez vos équipes aux bonnes pratiques pour réduire drastiquement les risques.",
      details: [
        "Ateliers de sensibilisation au Phishing et Social Engineering",
        "Bonnes pratiques d'hygiène numérique au quotidien",
        "Formation des dirigeants aux risques cyber",
        "Supports pédagogiques personnalisés et ludiques",
        "Simulations d'attaques pour tester la vigilance",
      ],
      icon: "🎓",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
    {
      id: "rgpd",
      title: "Accompagnement RGPD",
      subtitle: "Conformité et protection des données",
      description: "Mettez-vous en conformité avec la réglementation européenne sur la protection des données.",
      details: [
        "Audit de conformité et registre des traitements",
        "Analyse d'impact sur la vie privée (AIPD)",
        "Gestion des droits des personnes (accès, rectification, oubli)",
        "Sécurisation technique des données personnelles",
        "Documentation et procédures internes",
      ],
      icon: "📜",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      id: "support",
      title: "Support Ponctuel",
      subtitle: "Une assistance réactive quand vous en avez besoin",
      description: "Intervention rapide en cas d'incident ou besoin d'expertise ponctuelle.",
      details: [
        "Gestion d'incident de sécurité et forensic",
        "Analyse de fichiers suspects et malwares",
        "Assistance à la configuration d'outils de sécurité",
        "Veille et alertes de sécurité personnalisées",
        "Hotline et support à distance",
      ],
      icon: "🆘",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 inline-block">
              🔐 Nos Expertises
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Une gamme <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">complète</span> de services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              De l'audit initial à l'accompagnement continu, nous couvrons tous les aspects de votre cybersécurité avec une approche pragmatique et accessible.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Container className="pb-32 bg-white">
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden scroll-mt-24 ${
                index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center text-4xl lg:text-5xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{service.title}</h2>
                      <p className="text-lg text-blue-600 font-semibold">{service.subtitle}</p>
                    </div>
                    
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center glass rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Besoin d'un service sur-mesure ?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Chaque entreprise est unique. Contactez-nous pour un devis personnalisé adapté à vos besoins et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="gradient" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href="/a-propos" variant="outline" size="lg">
                En savoir plus sur nous
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
