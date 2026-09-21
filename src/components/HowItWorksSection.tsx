import React from 'react';
import { MessageSquare, CalendarClock, Dumbbell, Compass, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenBookingModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenBookingModal }) => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Primeiro Contato",
      description: "Você nos envia uma mensagem no WhatsApp. Tiramos suas primeiras dúvidas e compreendemos seu momento atual de saúde e treino."
    },
    {
      number: "02",
      icon: CalendarClock,
      title: "Agendamento da Aula",
      description: "Escolhemos juntos o melhor dia e horário na nossa grade semanal (segunda a sexta, das 05h às 20h) para você conhecer o espaço."
    },
    {
      number: "03",
      icon: Dumbbell,
      title: "Sessão Prática no Studio",
      description: "Você vem até o Carandá Bosque, conhece a estrutura e realiza seu treino sob orientação direta, sem pressa e no seu ritmo."
    },
    {
      number: "04",
      icon: Compass,
      title: "Alinhamento & Constância",
      description: "Se o método e o ambiente fizerem sentido para você, definimos a frequência ideal para integrar o treino à sua rotina semanal."
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-20 lg:py-24 bg-[#07090E] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-4">
            <span>PASSO A PASSO TRANSPARENTE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Como funciona para começar a treinar no BS Trainer?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sem burocracias ou contratos surpresa. Nosso processo de acolhimento é direto, humano e focado em entender as suas necessidades reais.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-14 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0F141F] to-[#0A0D15] border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-sky-400/50 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Outfit'] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Etapa {idx + 1} de 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="max-w-2xl mx-auto text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2">
            Quer dar o primeiro passo hoje?
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Converse diretamente com o Studio para verificar os horários disponíveis e agendar sua aula experimental.
          </p>
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Agendar aula experimental</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
