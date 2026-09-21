import React from 'react';
import { Star, ShieldCheck, ArrowRight, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data/business';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-[#07090E] via-[#0D111A] to-[#07090E]">
      {/* Subtle ambient lighting glows in brand blue */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Geo & Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="uppercase tracking-wider text-[11px] text-sky-400 font-bold">Studio Personal</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Carandá Bosque, Campo Grande</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] font-['Outfit'] mb-5">
              Treino com acompanhamento <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300">de verdade</span>. Sem academia lotada.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Mais do que aparelhos: uma experiência individualizada onde você nunca treina sozinho. Hora marcada, atenção contínua e metodologia voltada para constância, saúde e resultados reais.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBookingModal}
                className="group flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Agendar aula experimental</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#como-funciona"
                className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all"
              >
                <span>Como funciona o atendimento</span>
              </a>
            </div>

            {/* Trust Pill Matrix */}
            <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">4,6 no Google</div>
                  <div className="text-[11px] text-slate-400 leading-tight">~59 avaliações reais</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">Desde 2017</div>
                  <div className="text-[11px] text-slate-400 leading-tight">9 anos de história em CG</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">05h às 20h</div>
                  <div className="text-[11px] text-slate-400 leading-tight">Segunda a Sexta</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Studio Visual Composition featuring Real Logo */}
          <div className="lg:col-span-5 relative">
            {/* Frame container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Studio Atmosphere Showcase Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-gradient-to-b from-[#111624] to-[#0A0E17] p-2 shadow-2xl shadow-black/80">
                
                {/* Visual Graphic Representation with Authentic Brand Logo */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 flex flex-col justify-between p-6">
                  {/* Background ambient lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-slate-900/80 to-blue-950/20" />
                  
                  {/* Subtle radial glow behind logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />

                  {/* Top card element: Live status */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/80 text-xs text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-semibold">Atendimento Personalizado</span>
                    </div>
                    <span className="text-xs font-mono text-sky-400 font-medium bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
                      Rua Vitório Zeolla, 1965
                    </span>
                  </div>

                  {/* Center Visual Art: Official Brand Logo Display */}
                  <div className="relative z-10 my-auto text-center py-4 flex flex-col items-center justify-center">
                    <div className="relative p-2 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/60 border border-slate-700/50 shadow-2xl mb-3">
                      <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Logo Oficial Studio BS Trainer"
                        className="h-32 sm:h-36 w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,114,206,0.35)]"
                        loading="eager"
                        width={140}
                        height={248}
                      />
                    </div>
                    <div className="text-xl font-extrabold text-white font-['Outfit'] tracking-wide uppercase">
                      STUDIO BS TRAINER
                    </div>
                    <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                      Treinos pensados para quem valoriza orientação de verdade e constância na rotina
                    </p>
                  </div>

                  {/* Bottom metrics on the card */}
                  <div className="relative z-10 grid grid-cols-2 gap-3 bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80">
                    <div className="border-r border-slate-800 pr-2">
                      <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Acompanhamento</div>
                      <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Individualizado
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Espaço</div>
                      <div className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" /> Carandá Bosque
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating micro-card: Google Reputation */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0E131E] border border-slate-700/90 rounded-xl p-3.5 shadow-xl shadow-black/80 flex items-center gap-3 z-20 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-300">Avaliação Média</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1">
                    4,6 de 5,0 <span className="text-xs font-normal text-slate-400">(Google Maps)</span>
                  </div>
                </div>
              </div>

              {/* Floating micro-card: No Waiting / No Crowds */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0E131E] border border-slate-700/90 rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/80 items-center gap-2 z-20 backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span className="text-xs font-bold text-slate-200">Sem filas de espera</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
