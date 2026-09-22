import { ArrowUp } from "lucide-react";
import { businessData as b, getWhatsAppUrl } from "../data/business";
import { navLinks } from "../data/navigation";
import { BrandLogo } from "./BrandLogo";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <a
              className="brand-link"
              href="#topo"
              aria-label={`${b.name} Personal, início`}
            >
              <BrandLogo />
            </a>
            <p>
              Treinamento personalizado em {b.location.neighborhood},{" "}
              {b.location.city} - {b.location.stateCode}.
            </p>
          </div>
          <nav aria-label="Navegação do rodapé">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <a
              href={getWhatsAppUrl(undefined, "footer_phone_click")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {b.contact.phonePrimary}
            </a>
            <a
              href={b.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {b.social.instagramHandle}
            </a>
            <a
              href={getWhatsAppUrl(undefined, "footer_trial_cta")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar pelo WhatsApp
            </a>
            <p>{b.hours.weekdaysDetail}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {b.legalName}. Todos os direitos
            reservados.
            <br />
            CNPJ {b.cnpj}
          </p>
          <a href="#topo" className="back-top">
            Voltar ao topo <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
