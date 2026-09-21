import React, { useState } from 'react';
import { X, Send, User, Phone, Target, Clock, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/business';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredShift, setPreferredShift] = useState('Manhã (05h às 11h)');
  const [goal, setGoal] = useState('Saúde & Condicionamento');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = 
      `Olá! Meu nome é *${name || 'Aluno'}*.\n` +
      `Gostaria de agendar uma aula experimental no *BS Trainer Studio*.\n\n` +
      `• *Telefone/WhatsApp:* ${phone || 'Informado no chat'}\n` +
      `• *Melhor turno para treino:* ${preferredShift}\n` +
      `• *Meu objetivo principal:* ${goal}\n\n` +
      `Aguardo o retorno para confirmarmos o melhor dia e horário!`;

    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${businessData.contact.whatsappNumber}?text=${encoded}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#12161F] border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          aria-label="Fechar janela modal de agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0072CE]/15 border border-[#0072CE]/30 text-[#38BDF8] text-xs font-semibold mb-2">
            <span>AULA EXPERIMENTAL</span>
          </div>
          <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
            Agende seu horário no Studio
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Preencha seus dados para receber o contato direto da equipe do BS Trainer com as opções de horários.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Field */}
          <div>
            <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Seu Nome</span>
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Ana Silva"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
            />
          </div>

          {/* WhatsApp Field */}
          <div>
            <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Seu WhatsApp com DDD</span>
            </label>
            <input
              id="lead-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex: (67) 99999-9999"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
            />
          </div>

          {/* Preferred Shift */}
          <div>
            <label htmlFor="lead-shift" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Melhor Turno para Treinar</span>
            </label>
            <select
              id="lead-shift"
              value={preferredShift}
              onChange={(e) => setPreferredShift(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
            >
              <option value="Manhã (05h às 11h)">Manhã (05h às 11h)</option>
              <option value="Almoço / Tarde (11h às 16h)">Almoço / Início da Tarde (11h às 16h)</option>
              <option value="Fim de Tarde / Noite (16h às 20h)">Fim de Tarde / Noite (16h às 20h)</option>
            </select>
          </div>

          {/* Main Goal */}
          <div>
            <label htmlFor="lead-goal" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Objetivo Principal</span>
            </label>
            <select
              id="lead-goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#38BDF8] transition-colors"
            >
              <option value="Saúde & Condicionamento">Saúde & Condicionamento Físico</option>
              <option value="Constância & Criação de Hábito">Criar constância e sair do sedentarismo</option>
              <option value="Ganho de Massa Muscular / Força">Ganho de Massa Muscular e Força</option>
              <option value="Alívio de Dores & Postura">Alívio de dores articulares e melhora postural</option>
              <option value="Mudança de Composição Corporal">Melhora da composição corporal</option>
            </select>
          </div>

          {/* Action Button */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-[#0072CE] to-[#005bb5] hover:from-[#0077D4] hover:to-[#0062c4] rounded-xl shadow-lg shadow-[#0072CE]/30 border border-[#38BDF8]/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar e Abrir no WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Seus dados são utilizados exclusivamente para o contato do Studio.</span>
          </div>

        </form>

      </div>
    </div>
  );
};
