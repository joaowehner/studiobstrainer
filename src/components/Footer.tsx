import { MapPin, Phone, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../data/business';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'O Studio', href: '#studio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'História', href: '#historia' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Perguntas Frequentes', href: '#faq' }
  ];

  return (
    <footer className="bg-[#07090C] border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-28 md:py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md shadow-amber-500/10">
                <div className="w-full h-full bg-[#0B0D10] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-lg tracking-tighter text-amber-400 font-['Outfit']">
                    BS
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white font-['Outfit'] uppercase leading-none">
                  BS Trainer
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
                  Studio Personal
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-5 pr-4">
              Studio de treinamento personalizado no Carandá Bosque, Campo Grande — MS. Acompanhamento atento de verdade, hora marcada e foco em saúde, constância e performance desde 2017.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{businessData.legalName} • CNPJ: {businessData.cnpj}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit'] mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit'] mb-4">
              Atendimento & Endereço
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  {businessData.location.street}, {businessData.location.number}<br />
                  Carandá Bosque, Campo Grande — MS<br />
                  CEP: {businessData.location.zipCode}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  Segunda a Sexta: {businessData.hours.weekdays}<br />
                  <span className="text-slate-400 text-[11px]">(Atendimento com hora marcada)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit'] mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl(undefined, 'footer_phone_click')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{businessData.contact.phonePrimary}</span>
              </a>

              <a
                href={businessData.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors font-medium"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{businessData.social.instagramHandle}</span>
              </a>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(undefined, 'footer_trial_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3.5 py-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold transition-all text-center w-full"
                >
                  Agendar Aula Experimental
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>
            © {new Date().getFullYear()} {businessData.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Campo Grande — Mato Grosso do Sul</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors p-1"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
