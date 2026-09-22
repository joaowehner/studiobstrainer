export function DifferenceSection() {
  return (
    <section
      id="diferenciais"
      className="section differences"
      aria-labelledby="differences-title"
    >
      <div className="container difference-layout">
        <div className="difference-intro">
          <p className="section-label">O jeito BS de treinar</p>
          <h2 id="differences-title">
            Mais atenção.
            <br />
            Mais direção.
          </h2>
          <p>
            Você não precisa descobrir tudo sozinho. Cada treino tem orientação,
            propósito e respeito ao seu momento.
          </p>
        </div>
        <div className="difference-list">
          <article>
            <h3>Um treino que parte de você.</h3>
            <p>
              Seu condicionamento, seu histórico e seus objetivos orientam a
              escolha dos exercícios. O personal acompanha a execução e ajusta
              cargas e movimentos.
            </p>
          </article>
          <article>
            <h3>Seu horário. Seu espaço.</h3>
            <p>
              Atendimento com hora marcada e capacidade controlada. Uma rotina
              organizada para treinar com foco, sem o tumulto dos grandes
              salões.
            </p>
          </article>
          <article>
            <h3>Proximidade para continuar.</h3>
            <p>
              Você é conhecido pelo nome. O acompanhamento ajuda a construir
              regularidade, com incentivo e uma rotina que faz sentido para a
              sua vida.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
