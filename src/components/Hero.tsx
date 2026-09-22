import { businessData } from "../data/business";
import { studioPhotos } from "../data/photos";
import { MagneticButton } from "./MagneticButton";

export function Hero({
  onOpenBookingModal,
}: {
  onOpenBookingModal: () => void;
}) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-location">
            Personal training em {businessData.location.city}
          </p>
          <h1 id="hero-title">
            <span className="hero-title-line">Seu treino,</span>
            <br />
            <span className="hero-title-line">bem orientado.</span>
          </h1>
          <p className="hero-description">
            Acompanhamento próximo, hora marcada e um treino pensado para você,
            no {businessData.location.neighborhood}.
          </p>
          <div className="hero-actions">
            <MagneticButton className="button" onClick={onOpenBookingModal}>
              {businessData.cta.primaryText}
            </MagneticButton>
            <a className="text-link" href="#studio">
              {businessData.cta.secondaryText}
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <picture>
            <source srcSet={studioPhotos.hero.src} type="image/webp" />
            <img
              src={studioPhotos.hero.fallback}
              alt={studioPhotos.hero.alt}
              width="1024"
              height="1024"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <figcaption>Studio BS Trainer no Carandá Bosque.</figcaption>
        </figure>
      </div>
    </section>
  );
}
