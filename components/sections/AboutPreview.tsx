import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const AboutPreview = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            {/* Photo avec effet moderne */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 p-8 text-center bg-gradient-to-br from-slate-50 to-slate-100">
                  <div>
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                      MC
                    </div>
                    <span className="font-semibold text-slate-600">Mamadou COULIBALY MALLE</span>
                  </div>
                </div>
              </div>
              
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Certifié</div>
                    <div className="text-xs text-slate-600">RNCP Niveau 7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6 inline-block">
              Notre Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              L'Expertise <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Humaine</span> au service de votre Sécurité
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Fondé par <span className="font-semibold text-slate-800">Mamadou COULIBALY MALLE</span>, CyberTrustInfo Consulting est né d'un constat : les petites structures sont les plus vulnérables mais les moins protégées.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Avec une certification <span className="font-semibold">Master 2 Expert en Cybersécurité (RNCP Niveau 7)</span> et une approche pédagogique, nous transformons la sécurité informatique en atout stratégique.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              {[
                { icon: "🎯", text: "Audit certifié et méthodologie rigoureuse" },
                { icon: "🤝", text: "Accompagnement sur-mesure et disponibilité" },
                { icon: "💡", text: "Vulgarisation technique pour les décideurs" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl">{item.icon}</div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Button href="/a-propos" variant="gradient" size="lg">
              Découvrir notre équipe
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
