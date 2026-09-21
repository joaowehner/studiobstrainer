import React from 'react';
import { Calendar, Award, UserCheck, MapPin } from 'lucide-react';
import { businessData } from '../data/business';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Calendar,
      title: "Desde 2017",
      subtitle: "Aproximadamente 9 anos de história em Campo Grande"
    },
    {
      icon: Award,
      title: "Nota 4,6 no Google",
      subtitle: `${businessData.reputation.googleReviewCountApprox} avaliações públicas registradas`
    },
    {
      icon: UserCheck,
      title: "Acompanhamento Atento",
      subtitle: "Treino direcionado sem você se sentir perdido"
    },
    {
      icon: MapPin,
      title: "Carandá Bosque",
      subtitle: `${businessData.location.street}, ${businessData.location.number}`
    }
  ];

  return (
    <section className="bg-[#0D1015] border-b border-slate-800/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-['Outfit'] tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
