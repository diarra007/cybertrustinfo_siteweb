import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos - CyberTrustInfo Consulting",
  description: "Découvrez CyberTrustInfo Consulting et Mamadou COULIBALY MALLE, expert en cybersécurité dédié aux TPE/PME.",
};

export default function AboutPage() {
  const values = [
    {
      icon: "🤝",
      title: "Proximité",
      description: "Un interlocuteur unique qui connaît votre dossier et vos contraintes. Disponibilité et réactivité garanties.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💡",
      title: "Pédagogie",
      description: "Pas de jargon incompréhensible. Nous vous expliquons les risques et les solutions de manière claire et accessible.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🛡️",
      title: "Pragmatisme",
      description: "Des solutions adaptées à votre budget et à votre réalité opérationnelle. Pas de sur-équipement inutile.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "Une expertise certifiée RNCP Niveau 7 et une veille technologique permanente pour vous offrir le meilleur.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const expertise = [
    { skill: "Audit & Pentest", level: 95 },
    { skill: "Sécurité Réseau", level: 90 },
    { skill: "Conformité RGPD", level: 85 },
    { skill: "Formation", level: 92 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6 inline-block">
              🚀 Notre Histoire
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Démocratiser la <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cybersécurité</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nous croyons que la sécurité ne doit pas être un luxe réservé aux grands groupes, mais un socle accessible à tous pour grandir sereinement.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <Container className="pb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Photo Section */}
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-12 lg:p-16 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl">
                  <div className="text-8xl font-bold text-white">MC</div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass-dark rounded-2xl p-3 shadow-xl animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="text-white text-sm font-semibold">RNCP 7</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-dark rounded-2xl p-3 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div className="text-white text-sm font-semibold">Master 2</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-12 lg:p-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Le Fondateur</h2>
              <h3 className="text-2xl text-blue-600 font-semibold mb-6">Mamadou COULIBALY MALLE</h3>
              
              <div className="space-y-4 text-slate-600 mb-8">
                <p className="leading-relaxed">
                  Passionné par la sécurité des systèmes d'information depuis plus de 10 ans, Mamadou a fondé CyberTrustInfo avec une vision claire : <span className="font-semibold text-slate-800">apporter une expertise de haut niveau de manière pragmatique et humaine</span>.
                </p>
                <p className="leading-relaxed">
                  Titulaire d'un <span className="font-semibold text-slate-800">Master 2 Expert en Cybersécurité (RNCP Niveau 7)</span>, il allie compétences techniques pointues et capacité d'écoute. Son parcours lui a permis de comprendre les défis spécifiques auxquels font face les TPE et PME.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
                <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Domaines d'Expertise
                </h4>
                <div className="space-y-4">
                  {expertise.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{item.skill}</span>
                        <span className="text-sm font-semibold text-blue-600">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button href="/contact" variant="gradient" size="lg" className="w-full sm:w-auto">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Values Section */}
      <Container className="pb-32">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 inline-block">
            💎 Nos Valeurs
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Ce qui nous <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">anime</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des principes forts qui guident chacune de nos actions et interventions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
