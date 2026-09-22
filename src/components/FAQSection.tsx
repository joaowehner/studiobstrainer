import { Plus } from "lucide-react";
import { useState } from "react";
import { businessData as b, getWhatsAppUrl } from "../data/business";
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    ["Onde fica o Studio?", b.location.fullAddress],
    [
      "Quais são os horários de funcionamento?",
      `${b.hours.weekdaysDetail}. O atendimento é realizado com hora marcada.`,
    ],
    [
      "O treino é individualizado?",
      "Sim. Exercícios, cargas e ritmo são orientados de acordo com seu condicionamento, histórico e objetivos, com acompanhamento do profissional.",
    ],
    [
      "Como funciona a aula experimental?",
      "Você conhece a estrutura e realiza um treino orientado. Converse com a equipe pelo WhatsApp para verificar a disponibilidade e combinar o dia e o horário.",
    ],
    [
      "Posso começar mesmo sem experiência?",
      "Sim. A equipe considera seu momento e ajusta a intensidade do treino. Conte seu histórico e suas necessidades ao conversar com o Studio.",
    ],
    [
      "Como consultar planos e valores?",
      "A equipe informa os valores, frequências e horários disponíveis diretamente pelo WhatsApp ou durante a sua visita.",
    ],
  ];
  return (
    <section
      id="faq"
      className="section faq-section"
      aria-labelledby="faq-title"
    >
      <div className="container faq-layout">
        <div>
          <h2 id="faq-title">
            Antes de
            <br />
            começar.
          </h2>
          <p>As respostas para planejar sua primeira visita.</p>
          <a
            className="text-link"
            href={getWhatsAppUrl(
              "Olá! Gostaria de tirar uma dúvida sobre o BS Trainer Studio.",
              "faq_direct_whatsapp",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tirar dúvida no WhatsApp
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className="faq-item" key={question}>
              <h3>
                <button
                  className="faq-question"
                  id={`faq-question-${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {question}
                  <Plus aria-hidden="true" />
                </button>
              </h3>
              <div className="faq-answer" id={`faq-answer-${index}`} role="region"
                aria-labelledby={`faq-question-${index}`} aria-hidden={openIndex !== index}
                inert={openIndex !== index} data-open={openIndex === index}>
                <div><p>{answer}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
