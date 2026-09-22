import { businessData as b } from "../data/business";
export function AuthoritySection() {
  return (
    <section
      id="historia"
      className="section history-section"
      aria-labelledby="history-title"
    >
      <div className="container history-layout">
        <div className="foundation" data-reveal="foundation">
          <span>Em {b.location.city} desde</span>
          <strong>{b.foundationYear}</strong>
        </div>
        <div className="history-copy">
          <h2 id="history-title">
            Experiência que
            <br />
            acompanha você.
          </h2>
          <p>
            O {b.fullName} nasceu para oferecer um atendimento próximo, com
            método e respeito à individualidade de cada pessoa.
          </p>
          <div className="founder">
            <h3>{b.founder.name}</h3>
            <p className="founder-role">{b.founder.role}</p>
            <p>{b.founder.experienceYearsDescription}.</p>
            <p>{b.founder.bioShort}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
