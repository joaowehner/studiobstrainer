import React from 'react';
import { ArrowRight, MessageCircle, Star, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../data/business';

interface CTASectionProps {
  onOpenBookingModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-[#0B0D10] via-[#10141C] to-[#0B0D10] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle trust badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-6">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Nota 4,6 no Google • 9 Anos em Campo Grande</span>
        </div>

        {/* Main CTA Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] max-w-3xl mx-auto leading-tight">
          Pronto para ter um treino com acompanhamento de verdade?
        </h2>

        {/* Persuasive copy */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Dê adeus à sensação de treinar perdido ou disputar aparelhos. Agende sua aula experimental no BS Trainer Studio e conheça um formato focado na sua saúde, constância e evolução.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Agendar aula experimental</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={getWhatsAppUrl(undefined, 'final_cta_whatsapp')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mini Trust Footer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Rua Vitório Zeolla, 1965 — Carandá Bosque</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Seg a Sex: 05:00 às 20:00</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Atendimento com hora marcada</span>
          </div>
        </div>

      </div>
    </section>
  );
};
