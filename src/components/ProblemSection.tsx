import React from 'react';
import { AlertCircle, HelpCircle, Users, Frown, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onOpenBookingModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenBookingModal }) => {
  const painPoints = [
    {
      icon: HelpCircle,
      title: "Treinar sem saber se está fazendo certo",
      description: "Uma ficha genérica nas mãos e a dúvida constante sobre postura, carga e execução. A sensação de estar desamparado desgasta a motivação."
    },
    {
      icon: Users,
      title: "Salão lotado e disputa de equipamentos",
      description: "Chegar na academia para desestressar e encontrar filas para usar aparelhos. O treino que deveria durar 45 minutos se arrasta e vira cansaço mental."
    },
    {
      icon: Frown,
      title: "Sensação de que ninguém nota sua ausência",
      description: "Em academias impessoais, se você vai ou não vai, ninguém se importa. Sem acompanhamento de verdade, a constância se perde nas primeiras semanas."
    },
    {
      icon: AlertCircle,
      title: "Cobrança exagerada sem adaptação à sua rotina",
      description: "Modelos que exigem rotinas irreais para quem trabalha, cuida da família e tem responsabilidades. O resultado é frustração e desistência."
    }
  ];

  return (
    <section id="studio" className="py-12 sm:py-20 lg:py-24 bg-[#07090E] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-4">
            <span>EXPERIÊNCIA REAL DE TREINO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Por que tanta gente tem dificuldade em manter a constância na academia?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Muitas vezes o problema não é a sua disciplina. É o modelo tradicional de academia, pensado para ter milhares de alunos matriculados e pouquíssima atenção individual.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0F141E] to-[#0A0D15] border border-slate-800 hover:border-slate-700/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:bg-red-500/15 transition-colors">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* The BS Solution Bridge Box */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600/10 via-slate-900 to-blue-600/10 border border-blue-500/30 p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                A proposta do BS Trainer Studio
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] mt-1 mb-3">
                Você não precisa treinar sozinho nem disputar espaço.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Construímos um Studio no Carandá Bosque exatamente para pessoas que valorizam orientação próxima, hora marcada e um ambiente acolhedor onde cada treino tem propósito.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 rounded-xl shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Conhecer o Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
