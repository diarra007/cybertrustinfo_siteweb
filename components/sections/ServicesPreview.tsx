import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const services = [
  {
    title: "Audit de Sécurité",
    description: "Diagnostic complet et analyse des vulnérabilités pour identifier vos risques critiques.",
    icon: "🔍",
    color: "from-blue-500 to-cyan-500",
    features: ["Pentest", "Scan réseau", "Rapport détaillé"],
  },
  {
    title: "Conseil & Solutions",
    description: "Stratégies de défense et solutions techniques adaptées à votre budget et vos besoins.",
    icon: "🛡️",
    color: "from-purple-500 to-pink-500",
    features: ["Architecture", "Firewall", "Sauvegardes"],
  },
  {
    title: "Formation",
    description: "Sensibilisation de vos équipes aux bonnes pratiques et aux menaces actuelles.",
    icon: "🎓",
    color: "from-orange-500 to-red-500",
    features: ["Phishing", "RGPD", "Ateliers"],
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-50 to-transparent"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 inline-block">
            Nos Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Une approche <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">360°</span> de votre sécurité
          </h2>
          <p className="text-xl text-slate-600">
            De l'audit initial à la formation continue, nous couvrons tous les aspects de votre cybersécurité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent hover:-translate-y-2"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  href="/services" 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button href="/services" variant="gradient" size="lg">
            Découvrir tous nos services
          </Button>
        </div>
      </Container>
    </section>
  );
};
