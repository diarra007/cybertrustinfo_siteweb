import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe - CyberTrustInfo Consulting",
  description: "Rencontrez l'équipe de CyberTrustInfo Consulting, des experts passionnés par la cybersécurité.",
};

export default function TeamPage() {
  const certifications = [
    { name: "Master 2 Expert Cybersécurité", org: "RNCP Niveau 7", year: "2023" },
    { name: "Certified Ethical Hacker", org: "EC-Council", year: "2022" },
    { name: "ISO 27001 Lead Implementer", org: "PECB", year: "2022" },
  ];

  const skills = [
    { category: "Pentest & Audit", items: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap"] },
    { category: "Sécurité Réseau", items: ["Firewall", "IDS/IPS", "VPN", "Segmentation"] },
    { category: "Conformité", items: ["RGPD", "ISO 27001", "EBIOS RM", "PCA/PRA"] },
    { category: "Outils", items: ["SIEM", "EDR", "Vulnerability Scanners", "SOAR"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6 inline-block">
              👥 L'Équipe
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Une expertise <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">certifiée</span> à votre service
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              CyberTrustInfo s'appuie sur une expertise interne forte et un réseau de partenaires de confiance pour vous accompagner.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Team Member */}
      <Container className="pb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Header avec gradient */}
            <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="1" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
            </div>

            {/* Profile Card */}
            <div className="relative px-8 lg:px-16 -mt-24 pb-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-8 border-white">
                    MC
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-slate-800">Disponible</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 pt-8">
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">Mamadou COULIBALY MALLE</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-4">Fondateur & Expert Cybersécurité</p>
                  <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
                    Avec plusieurs années d'expérience en administration systèmes et sécurité, Mamadou pilote l'ensemble des missions d'audit et de conseil. Son approche est centrée sur l'humain et l'efficacité opérationnelle, avec un objectif : rendre la cybersécurité accessible et compréhensible.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact" variant="gradient" size="md">
                      Prendre contact
                    </Button>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl font-semibold hover:bg-[#006399] transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Certifications & Skills */}
      <Container className="pb-32">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{cert.name}</h4>
                      <p className="text-sm text-slate-600">{cert.org}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Compétences Techniques</h3>
            </div>
            <div className="space-y-6">
              {skills.map((skillSet, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-slate-900 mb-3">{skillSet.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 text-sm font-medium rounded-lg border border-blue-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
