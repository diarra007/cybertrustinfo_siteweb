import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Logo & Desc */}
          <div className="space-y-6">
            <div className="relative h-12 w-44">
               <Image
                  src="/assets/logo_png.png"
                  alt="CyberTrustInfo Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Conseil et accompagnement expert en cybersécurité pour les TPE, PME et indépendants.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/mamadou-coulibaly-malle-bb6248223/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-[#0077b5] rounded-xl flex items-center justify-center transition-colors"
                aria-label="LinkedIn de Mamadou COULIBALY MALLE"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/malle_seyba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-black rounded-xl flex items-center justify-center transition-colors"
                aria-label="X (Twitter) de Mamadou COULIBALY MALLE"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#audit" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Audit de sécurité
              </Link></li>
              <li><Link href="/services#conseil" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Conseil & Solutions
              </Link></li>
              <li><Link href="/services#formation" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Formation
              </Link></li>
              <li><Link href="/services#rgpd" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Conformité RGPD
              </Link></li>
              <li><Link href="/services#support" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Support ponctuel
              </Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Entreprise</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/a-propos" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> À propos
              </Link></li>
              <li><Link href="/equipe" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Notre Équipe
              </Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Contact
              </Link></li>
              <li><Link href="/mentions-legales" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Mentions Légales
              </Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="text-blue-500">→</span> Confidentialité
              </Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <a href="mailto:contact@cybertrustinfo.com" className="hover:text-blue-400 transition-colors">
                    contact@cybertrustinfo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                   <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Localisation</div>
                  <div className="text-sm leading-relaxed">
                    <div>5 Rue du Moulinas</div>
                    <div>66330 CABESTANY</div>
                    <div>France</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {currentYear} CyberTrustInfo Consulting. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              Fait avec <span className="text-red-500">❤️</span> pour votre sécurité
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
