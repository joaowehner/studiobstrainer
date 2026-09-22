export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="benefits-section"
      aria-labelledby="benefits-title"
    >
      <div className="container benefits-layout">
        <h2 id="benefits-title">
          O treino faz parte.
          <br />A vida é o objetivo.
        </h2>
        <div className="benefits-copy">
          <p>
            Força, disposição e autonomia para além do Studio. Um tempo dedicado
            ao corpo e ao bem-estar, com atenção à sua evolução.
          </p>
          <ul>
            <li>Condicionamento e consciência corporal</li>
            <li>Regularidade que cabe na rotina</li>
            <li>Saúde, confiança e qualidade de vida</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
