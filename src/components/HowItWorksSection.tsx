import { businessData } from "../data/business";
const steps = [
  [
    "Converse com a equipe",
    "Conte seu objetivo e tire suas primeiras dúvidas pelo WhatsApp.",
  ],
  [
    "Escolha seu horário",
    "Combine um dia para conhecer o Studio, conforme a disponibilidade.",
  ],
  [
    "Experimente o treino",
    "Conheça o espaço e faça uma sessão prática com orientação.",
  ],
  [
    "Encontre sua rotina",
    "Alinhe com a equipe a frequência de treino adequada para você.",
  ],
];
export function HowItWorksSection({
  onOpenBookingModal,
}: {
  onOpenBookingModal: () => void;
}) {
  return (
    <section
      id="como-funciona"
      className="section process-section"
      aria-labelledby="process-title"
    >
      <div className="container">
        <h2 id="process-title">Comece com uma aula.</h2>
        <p className="section-description">
          Conheça o atendimento antes de definir sua rotina de treino.
        </p>
        <ol className="process-list">
          {steps.map(([title, description], i) => (
            <li key={title} data-reveal="step">
              <span className="step-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
        <button className="text-link" onClick={onOpenBookingModal}>
          {businessData.cta.primaryText}
        </button>
      </div>
    </section>
  );
}
