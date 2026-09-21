import React from 'react';
import { Award, ShieldCheck, Calendar, Building } from 'lucide-react';
import { businessData } from '../data/business';

export const AuthoritySection: React.FC = () => {
  return (
    <section id="historia" className="py-12 sm:py-20 lg:py-24 bg-[#0A0E17] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-4">
              <span>NOSSA HISTÓRIA & PROPÓSITO</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit'] mb-6">
              Uma trajetória construída com dedicação ao treino individualizado
            </h2>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed">
              <p>
                O <strong className="text-white">Studio BS Trainer</strong> nasceu da convicção de que o exercício físico só produz resultados verdadeiros e duradouros quando há acompanhamento próximo, método consistente e respeito às individualidades de cada pessoa.
              </p>
              <p>
                Fundado formalmente em março de 2017 e liderado por <strong className="text-white">Brunno Schneider</strong> — profissional com mais de 16 anos dedicados à área de personal training —, o Studio consolidou-se no bairro Carandá Bosque como uma referência para quem deseja fugir da impessoalidade das grandes academias.
              </p>
              <p>
                Ao longo de cerca de 9 anos de história em Campo Grande, nossa missão permanece intacta: oferecer um ambiente organizado e focado, onde cada aluno recebe a orientação necessária para evoluir com segurança, saúde e constância.
              </p>
            </div>

            {/* Authority Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-['Outfit']">
                  2017
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Ano de fundação formal
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-['Outfit']">
                  +16 Anos
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  De experiência na área
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-['Outfit']">
                  4,6 ★
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Nota pública no Google
                </div>
              </div>
            </div>

          </div>

          {/* Right Authority Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#111726] to-[#0A0D15] border border-slate-800 p-6 sm:p-8 relative shadow-xl">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Outfit']">
                    {businessData.founder.name}
                  </h3>
                  <p className="text-xs text-sky-400 font-medium">
                    {businessData.founder.role}
                  </p>
                </div>
              </div>

              <blockquote className="text-sm text-slate-300 italic border-l-2 border-sky-400/60 pl-4 py-1 mb-6 leading-relaxed">
                "{businessData.founder.bioShort}"
              </blockquote>

              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{businessData.legalName}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CNPJ: {businessData.cnpj} • Situação Ativa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Atuação ininterrupta em Campo Grande — MS</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Acompanhe nosso trabalho:</span>
                <a
                  href={businessData.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {businessData.social.instagramHandle} →
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
