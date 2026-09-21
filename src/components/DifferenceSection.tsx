import React from 'react';
import { Target, Compass, Sparkles, UserCheck, Flame, HeartHandshake } from 'lucide-react';

export const DifferenceSection: React.FC = () => {
  const differentials = [
    {
      icon: UserCheck,
      tag: "ACOMPANHAMENTO",
      title: "Orientação técnica em cada série",
      description: "Esqueça a dúvida sobre a postura certa ou o peso adequado. O personal acompanha seus movimentos, corrige detalhes e garante a segurança do início ao fim."
    },
    {
      icon: Compass,
      tag: "ORGANIZAÇÃO",
      title: "Horários agendados e espaço preservado",
      description: "Sem o estresse de salões superlotados. O fluxo do Studio é planejado para que você execute o seu treino com ritmo, fluidez e foco integral."
    },
    {
      icon: Target,
      tag: "PROPÓSITO",
      title: "Treino feito para o seu objetivo real",
      description: "Nada de rotinas padronizadas de computador. Cada exercício é escolhido de acordo com seu condicionamento, histórico físico e metas de saúde."
    },
    {
      icon: Flame,
      tag: "CONSTÂNCIA",
      title: "Método voltado para criar regularidade",
      description: "Mais do que treinar pesado por duas semanas, o objetivo é criar constância para a vida. Apoiamos você na construção de uma rotina sustentável."
    },
    {
      icon: HeartHandshake,
      tag: "HUMANIZAÇÃO",
      title: "Você é conhecido pelo seu nome",
      description: "Aqui você não é um número de catraca. O atendimento próximo constrói uma relação de confiança mútua e incentivo diário."
    },
    {
      icon: Sparkles,
      tag: "SAÚDE & PERFORMANCE",
      title: "Evolução visível no corpo e na rotina",
      description: "Os ganhos vão muito além do espelho: mais disposição matinal, redução de dores posturais, mente clara e vitalidade para o seu cotidiano."
    }
  ];

  return (
    <section id="diferenciais" className="py-12 sm:py-20 lg:py-24 bg-[#0E1218] border-b border-slate-800/80 relative overflow-hidden">
      {/* Background soft gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
            <span>DIFERENCIAIS DO BS TRAINER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            O que muda quando o treino é pensado para você?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Uma abordagem equilibrada entre ciência, acompanhamento humano e organização para transformar seu esforço em resultados duradouros.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl bg-[#131720] border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#161B26] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 bg-slate-800/70 px-2.5 py-1 rounded-md border border-slate-700/60">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Outfit'] mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-amber-400/80 group-hover:text-amber-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Padrão Studio BS Trainer</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
