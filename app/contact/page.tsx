import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous - CyberTrustInfo Consulting",
  description: "Besoin d'un audit ou d'un conseil en cybersécurité ? Contactez CyberTrustInfo Consulting pour un échange gratuit.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "contact@cybertrustinfo.com",
      description: "Réponse sous 24h ouvrées",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Zone d'intervention",
      value: "France",
      description: "5 Rue du Moulinas - 66330 CABESTANY. Intervention partout en France",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Disponibilité",
      value: "Lun - Ven : 9h - 18h",
      description: "Urgences : nous contacter",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ];

  const benefits = [
    { icon: "✓", text: "Premier diagnostic gratuit" },
    { icon: "✓", text: "Devis personnalisé sans engagement" },
    { icon: "✓", text: "Confidentialité garantie" },
    { icon: "✓", text: "Réponse rapide et professionnelle" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6 inline-block">
              💬 Prenons Contact
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Parlons de votre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">sécurité</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Vous avez une question, un projet ou une inquiétude concernant la sécurité de votre entreprise ? 
              <span className="font-semibold text-slate-800"> N'hésitez pas à nous contacter.</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <Container className="pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">{method.value}</p>
                <p className="text-sm text-slate-600">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Main Contact Section */}
      <Container className="pb-32">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Colonne Gauche */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi nous contacter ?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-slate-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full opacity-10 -ml-16 -mb-16"></div>
              
              <div className="relative">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3">Besoin urgent ?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  En cas d'incident de sécurité ou de besoin urgent, contactez-nous directement par email avec la mention "URGENT" dans l'objet.
                </p>
                <a 
                  href="mailto:contact@cybertrustinfo.com?subject=URGENT"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Envoyer un email urgent
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/mamadou-coulibaly-malle-bb6248223/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0077b5] text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label="LinkedIn de Mamadou COULIBALY MALLE"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/malle_seyba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  aria-label="X (Twitter) de Mamadou COULIBALY MALLE"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire Colonne Droite */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
