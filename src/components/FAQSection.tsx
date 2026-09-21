import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../data/business';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Onde o BS Trainer Studio fica localizado?",
      answer: `Estamos localizados na Rua Vitório Zeolla, nº 1.965, no bairro Carandá Bosque, em Campo Grande — MS (CEP 79032-360). É uma região arborizada, tranquila e de fácil acesso para quem mora ou trabalha na região norte e leste da cidade.`
    },
    {
      question: "Quais são os horários de funcionamento do Studio?",
      answer: `Nosso atendimento de segunda a sexta-feira acontece das 05h00 às 20h00. Atendemos com horários agendados para garantir que cada sessão ocorra com tranquilidade e acompanhamento atencioso.`
    },
    {
      question: "O treino é realmente individualizado?",
      answer: `Sim. O BS Trainer nasceu exatamente para se contrapor ao modelo impessoal de academias comuns. Cada exercício, carga e ritmo de treino é acompanhado diretamente pelo profissional, garantindo postura correta, segurança e foco no seu objetivo real.`
    },
    {
      question: "Como funciona a aula experimental?",
      answer: `A aula experimental é o momento ideal para você conhecer nossa estrutura no Carandá Bosque, vivenciar a dinâmica de atendimento e realizar um treino prático. Para agendar, basta entrar em contato conosco pelo WhatsApp e escolher um horário compatível com a sua rotina.`
    },
    {
      question: "Nunca treinei ou estou há muito tempo parado. Posso começar no Studio?",
      answer: `Com certeza. A grande maioria dos nossos alunos nos procura justamente porque não se adaptou à rotina de academias convencionais ou precisava de mais segurança para recomeçar. Nós dosamos a intensidade e construímos sua constância passo a passo, sem exageros.`
    },
    {
      question: "Como tirar dúvidas sobre planos, mensalidades e disponibilidade de horários?",
      answer: `Como nosso atendimento é individualizado e prezamos pelo controle de alunos por horário, todas as informações sobre frequências disponíveis, valores e horários livres são passadas diretamente pela nossa equipe via WhatsApp ou presencialmente durante a sua visita.`
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24 bg-[#07090E] border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/15 border border-[#0072CE]/30 text-[#38BDF8] text-xs font-semibold mb-4">
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Dúvidas comuns sobre o Studio
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Respostas transparentes e objetivas para você planejar seu início no BS Trainer Studio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-[#131926] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white font-['Outfit']">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#0072CE]/25 text-[#38BDF8] border border-[#38BDF8]/40' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for unaddressed questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0D111A] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-white">Ficou com alguma dúvida específica?</h3>
            <p className="text-xs text-slate-400 mt-0.5">Nossa equipe responde rapidamente pelo canal oficial de atendimento.</p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre o BS Trainer Studio.", "faq_direct_whatsapp")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#0072CE] to-[#005bb5] hover:from-[#0077D4] hover:to-[#0062c4] rounded-xl shadow-md shadow-[#0072CE]/20 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
