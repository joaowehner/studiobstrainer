import React from 'react';
import { Star, MessageSquare, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/business';

export const SocialProofSection: React.FC = () => {
  const reputationThemes = [
    {
      title: "Atenção Próxima e Paciência",
      description: "Alunos destacam a presença constante dos profissionais corrigindo postura e orientando cada repetição."
    },
    {
      title: "Ambiente Organizado e Sem Tumulto",
      description: "Elogios frequentes à tranquilidade do espaço, onde o treino flui sem espera ou disputa por equipamentos."
    },
    {
      title: "Motivação e Respeito aos Limites",
      description: "Treinos exigentes na medida certa, sem exageros descabidos e com incentivo genuíno à constância diária."
    },
    {
      title: "Pontualidade e Compromisso",
      description: "Horários respeitados com seriedade para quem tem rotina profissional intensa em Campo Grande."
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#0B0D10] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
            <span>REPUTAÇÃO PÚBLICA CONSOLIDADA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Reconhecimento comprovado por quem treina conosco
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Nossa reputação é reflexo do compromisso diário em entregar atendimento atencioso, técnico e focado no aluno.
          </p>
        </div>

        {/* Central Google Rating Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#141923] to-[#0E1117] border border-slate-800 p-5 sm:p-8 lg:p-10 mb-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Rating Metric Block */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-8 md:pb-0 md:pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                Google Avaliações
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-black text-white font-['Outfit'] tracking-tight">
                  {businessData.reputation.googleRating.toString().replace('.', ',')}
                </span>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    Escala de 1 a 5 estrelas
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-4 font-medium">
                Aproximadamente <strong className="text-white">{businessData.reputation.googleReviewCountApprox} avaliações espontâneas</strong> registradas no perfil público do Studio.
              </p>

              <div className="mt-6">
                <a
                  href={businessData.location.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Conferir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Qualitative Highlights Block */}
            <div className="md:col-span-7">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>O que os clientes mais valorizam no Studio BS Trainer:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reputationThemes.map((theme, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{theme.title}</span>
                    </div>
                    <p className="text-[12px] text-slate-400 leading-snug">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Note on transparency */}
        <div className="text-center text-xs text-slate-500 max-w-xl mx-auto">
          Nota pública levantada no Google Maps em Campo Grande — MS. Preservamos a privacidade dos nossos alunos e priorizamos a transparência factual de dados.
        </div>

      </div>
    </section>
  );
};
