import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Calendar, MessageCircle } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../data/business';

export const LocationHoursSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-12 sm:py-20 lg:py-24 bg-[#0E1218] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
            <span>LOCALIZAÇÃO & ATENDIMENTO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Fácil acesso no coração do Carandá Bosque
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Localizado em uma das regiões mais nobres e tranquilas de Campo Grande — MS, com fácil estacionamento e vias de acesso rápido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#131722] border border-slate-800">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Outfit']">
                    Endereço Oficial
                  </h3>
                  <p className="text-xs text-slate-400">
                    Carandá Bosque, Campo Grande — MS
                  </p>
                </div>
              </div>

              <div className="text-sm text-slate-200 leading-relaxed pl-1">
                <p className="font-semibold text-white text-base">
                  {businessData.location.street}, {businessData.location.number}
                </p>
                <p className="text-slate-400 mt-0.5">
                  Bairro {businessData.location.neighborhood}
                </p>
                <p className="text-slate-400">
                  {businessData.location.city} — {businessData.location.stateCode} • CEP {businessData.location.zipCode}
                </p>
              </div>

              <div className="mt-5 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href={businessData.location.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#131722] border border-slate-800">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Outfit']">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-xs text-slate-400">
                    Atendimento com hora marcada
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm pl-1">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-300 font-medium">Segunda a Sexta-feira:</span>
                  <span className="text-amber-400 font-bold">{businessData.hours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Sábados:</span>
                  <span className="text-slate-400 font-medium">{businessData.hours.saturday}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Domingos e Feriados:</span>
                  <span className="text-slate-500 font-medium">{businessData.hours.sunday}</span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-slate-400 italic">
                * Para garantir a qualidade e exclusividade do acompanhamento, os treinos são realizados mediante agendamento prévio.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#121720] border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Fale diretamente com nossa equipe</div>
                  <div className="text-sm font-bold text-white">{businessData.contact.phonePrimary}</div>
                </div>
              </div>
              <a
                href={getWhatsAppUrl(undefined, 'location_card_whatsapp')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-bold text-emerald-400 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>

          </div>

          {/* Interactive Map Embed Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl border border-slate-800 overflow-hidden bg-[#131722] flex-1 min-h-[380px] sm:min-h-[460px] relative shadow-2xl flex flex-col">
              
              {/* Map Header Toolbar */}
              <div className="bg-[#0B0E14] px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-semibold min-w-0">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">BS Trainer • Carandá Bosque</span>
                </div>
                <a
                  href={businessData.location.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 shrink-0"
                >
                  <span>Tela cheia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Google Maps iFrame */}
              <div className="flex-1 w-full h-full relative">
                <iframe
                  title="Localização do BS Trainer Studio no Google Maps"
                  src="https://maps.google.com/maps?q=Rua+Vit%C3%B3rio+Zeolla,+1965+-+Carand%C3%A1+Bosque,+Campo+Grande+-+MS,+79032-360&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[350px] border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa com localização do Studio BS Personal Trainer"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="bg-[#0B0E14] px-4 py-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Rua Vitório Zeolla, 1965 • Carandá Bosque</span>
                <span className="text-slate-500">CEP 79032-360</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
