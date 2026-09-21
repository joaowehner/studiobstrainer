import React from 'react';
import { Zap, Heart, Shield, Sparkles, Smile, BatteryCharging } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: BatteryCharging,
      title: "Mais Disposição no Dia a Dia",
      description: "Acordar com mais energia e chegar ao fim do dia de trabalho com fôlego para aproveitar o tempo com quem você ama."
    },
    {
      icon: Shield,
      title: "Prevenção de Dores e Sobrecargas",
      description: "Fortalecimento muscular progressivo e correção postural que aliviam tensões lombares e articulares típicas da rotina moderna."
    },
    {
      icon: Zap,
      title: "Constância Sem Sofrimento",
      description: "Quando você tem acompanhamento atencioso e horário agendado, o treino deixa de ser um sacrifício e se torna parte natural da sua semana."
    },
    {
      icon: Heart,
      title: "Saúde Cardiovascular e Longevidade",
      description: "Exercício físico bem dosado promove saúde metabólica, melhora a circulação e garante autonomia funcional para o futuro."
    },
    {
      icon: Smile,
      title: "Autoestima e Consciência Corporal",
      description: "Perceber seu corpo mais forte, firme e ágil eleva a autoconfiança dentro e fora do ambiente de treino."
    },
    {
      icon: Sparkles,
      title: "Clareza Mental e Controle do Estresse",
      description: "Uma pausa qualificada no seu dia onde você desliga a mente das cobranças externas e foca 100% no seu bem-estar."
    }
  ];

  return (
    <section id="beneficios" className="py-12 sm:py-20 lg:py-24 bg-[#0E1218] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
            <span>TRANSFORMAÇÃO ALÉM DA ESTÉTICA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Resultados que impactam diretamente a sua vida real
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Mais do que números na balança: nossa proposta conecta corpo, saúde, disposição e bem-estar para que você viva com mais vitalidade.
          </p>
        </div>

        {/* Dynamic Progression Strip */}
        <div className="mb-10 sm:mb-12 p-4 sm:p-5 rounded-2xl bg-[#141822] border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-300">
          <span className="text-amber-400">A jornada do aluno BS Trainer:</span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 text-xs">Acompanhamento</span>
            <span className="text-amber-400">→</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 text-xs">Constância</span>
            <span className="text-amber-400">→</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 text-xs">Disposição</span>
            <span className="text-amber-400">→</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 text-xs">Autoestima</span>
            <span className="text-amber-400">→</span>
            <span className="bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-400/30 text-xs font-bold">Qualidade de Vida</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-2xl bg-[#12161E] border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
