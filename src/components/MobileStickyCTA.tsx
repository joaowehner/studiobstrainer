import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';

interface MobileStickyCTAProps {
  onOpenBookingModal: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBookingModal }) => {
  return (
    <aside 
      aria-label="Ações rápidas de contato"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#07090E]/95 backdrop-blur-lg border-t border-slate-800/90 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl shadow-black"
    >
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        
        {/* WhatsApp Direct */}
        <a
          href={getWhatsAppUrl(undefined, 'mobile_sticky_whatsapp')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-xl active:scale-[0.98] transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Modal Booking */}
        <button
          onClick={onOpenBookingModal}
          className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-white bg-gradient-to-r from-[#0072CE] to-[#005bb5] rounded-xl shadow-md shadow-[#0072CE]/30 border border-[#38BDF8]/20 active:scale-[0.98] transition-all text-center cursor-pointer"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Aula Experimental</span>
        </button>

      </div>
    </aside>
  );
};
