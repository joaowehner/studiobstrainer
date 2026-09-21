import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../data/business';

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Studio', href: '#studio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'História', href: '#historia' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' }
  ];

  return (
    <>
      {/* Top micro-bar with schedule and location info for trust */}
      <div className="hidden lg:block bg-[#080A0D] border-b border-slate-800/60 text-xs text-slate-400 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {businessData.location.street}, {businessData.location.number} — {businessData.location.neighborhood}, {businessData.location.city}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Seg a Sex: {businessData.hours.weekdays}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${businessData.contact.whatsappNumber}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              {businessData.contact.phonePrimary}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={businessData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              {businessData.social.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D10]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-slate-800/80 py-3.5'
            : 'bg-[#0B0D10]/80 backdrop-blur-sm border-b border-slate-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            aria-label="BS Trainer Studio - Página Inicial"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md shadow-amber-500/10 group-hover:shadow-amber-500/20 transition-all">
              <div className="w-full h-full bg-[#0B0D10] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg tracking-tighter text-amber-400 font-['Outfit']">
                  BS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-['Outfit'] uppercase leading-none group-hover:text-amber-400 transition-colors">
                BS Trainer
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
                Studio Personal
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(undefined, 'header_whatsapp')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-all"
              aria-label="Falar com o Studio no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Aula Experimental</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[65px] z-50 bg-[#0B0D10]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-8 pb-12 flex flex-col justify-between overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Navegação</p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-slate-200 hover:text-amber-400 transition-colors py-2 border-b border-slate-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
            >
              <span>Agendar Aula Experimental</span>
            </button>
            <a
              href={getWhatsAppUrl(undefined, 'mobile_drawer_whatsapp')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-xl hover:bg-slate-800 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar no WhatsApp</span>
            </a>
            <div className="text-center text-xs text-slate-400 pt-2">
              <p>Segunda a Sexta: {businessData.hours.weekdays}</p>
              <p className="mt-1 text-slate-500">{businessData.location.street}, {businessData.location.number} — Carandá Bosque</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
