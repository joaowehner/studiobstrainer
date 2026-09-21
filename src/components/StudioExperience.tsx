import React from 'react';
import { Check, ShieldCheck, MapPin, Clock, Award } from 'lucide-react';
import { businessData } from '../data/business';

export const StudioExperience: React.FC = () => {
  const highlights = [
    "Ambiente acolhedor e profissional, pensado para você se sentir à vontade desde o primeiro dia",
    "Capacidade controlada por horário, evitando o caos de academias com superlotação",
    "Equipamentos dedicados para musculação orientada e condicionamento físico seguro",
    "Atenção contínua dos profissionais para tirar dúvidas e dosar intensidades",
    "Localização tranquila e de fácil acesso na Rua Vitório Zeolla, no bairro Carandá Bosque",
    "Grade de horários das 05h às 20h para se adequar antes do trabalho, no almoço ou no fim do dia"
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#07090E] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Presentation with Brand Aesthetic */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl border border-slate-800 bg-[#0E131E] p-4 sm:p-6 shadow-2xl relative overflow-hidden">
              
              {/* Visual Architectural Accent */}
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-[#090C12] via-slate-900 to-[#101624] border border-slate-700/60 p-6 flex flex-col justify-between relative overflow-hidden">
                
                {/* Background geometric grid in brand blue */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(#0077D4 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                    Carandá Bosque • CG
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>05h às 20h</span>
                  </div>
                </div>

                <div className="relative z-10 my-auto text-center py-4 flex flex-col items-center">
                  <img
                    src="/logo.png"
                    alt="Logo Studio BS Trainer"
                    className="h-20 w-auto object-contain mb-2 drop-shadow-[0_2px_12px_rgba(0,114,206,0.3)]"
                    loading="lazy"
                    width={80}
                    height={142}
                  />
                  <h3 className="text-xl font-black text-white font-['Outfit'] tracking-tight uppercase">
                    BS TRAINER STUDIO
                  </h3>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
                    Treinamento individualizado onde a prioridade é a sua evolução contínua e segura
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Treino Orientado</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Award className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Desde 2017 em CG</span>
                  </div>
                </div>

              </div>

              {/* Location Tag below */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 px-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{businessData.location.fullAddress}</span>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-4">
              <span>ATMOSFERA DO ESPAÇO</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit'] mb-6">
              Um ambiente projetado para você treinar com foco e tranquilidade
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              No BS Trainer Studio, criamos um espaço onde cada aluno encontra a atenção e o conforto necessários para render o máximo em cada treino. Aqui, sua sessão é produtiva e ajustada para caber com elegância na sua rotina.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sky-400" />
                  </div>
                  <span className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Quer vivenciar essa experiência na prática?</span>
              <a
                href="#localizacao"
                className="text-sky-400 hover:text-sky-300 font-bold transition-colors"
              >
                Ver localização →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
