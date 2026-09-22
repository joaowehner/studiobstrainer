import { businessData as b, getWhatsAppUrl } from "../data/business";
import { MagneticButton } from "./MagneticButton";
export function CTASection({
  onOpenBookingModal,
}: {
  onOpenBookingModal: () => void;
}) {
  return (
    <section className="final-cta" aria-labelledby="final-title" data-reveal="finish">
      <div className="container final-layout">
        <h2 id="final-title">
          Reserve um tempo
          <br />
          para você.
        </h2>
        <div>
          <p>
            Venha conhecer o {b.name}. Seu primeiro passo pode ser uma aula
            experimental.
          </p>
          <MagneticButton className="button button-dark" onClick={onOpenBookingModal}>
            {b.cta.primaryText}
          </MagneticButton>
          <a
            className="text-link"
            href={getWhatsAppUrl(undefined, "final_cta_whatsapp")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {b.cta.whatsappCtaText}
          </a>
        </div>
      </div>
    </section>
  );
}
