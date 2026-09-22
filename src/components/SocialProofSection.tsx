import { businessData as b } from "../data/business";
export function SocialProofSection() {
  return (
    <section
      className="section reputation-section"
      aria-labelledby="reputation-title"
    >
      <div className="container reputation-layout">
        <div className="rating">
          <span className="rating-value">
            {b.reputation.googleRating.toLocaleString("pt-BR")}
          </span>
          <div>
            <span className="stars" aria-hidden="true">
              <span className="stars-outline">☆☆☆☆☆</span>
              <span
                className="stars-fill"
                style={{ width: `${(b.reputation.googleRating / 5) * 100}%` }}
              >
                ★★★★★
              </span>
            </span>
            <p>de 5 no Google</p>
          </div>
        </div>
        <div>
          <h2 id="reputation-title">
            Quem treina aqui
            <br />
            também conta a história.
          </h2>
          <p>
            Aproximadamente {b.reputation.googleReviewCountApprox} avaliações
            registradas no Google. Conheça as experiências compartilhadas no
            perfil do Studio.
          </p>
          <a
            className="text-link"
            href={b.location.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
