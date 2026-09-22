import { containDialogFocus } from "../utils/dialog";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { businessData, getWhatsAppUrl } from "../data/business";
import { BrandLogo } from "./BrandLogo";
import { navLinks } from "../data/navigation";

export function Header({
  onOpenBookingModal,
}: {
  onOpenBookingModal: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (menuOpen && dialog && !dialog.open) dialog.showModal();
    if (!menuOpen && dialog?.open) dialog.close();
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 1100px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previous;
      mq.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#topo"
            className="brand-link"
            aria-label={`${businessData.name} Personal, início`}
          >
            <BrandLogo />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navLinks
              .filter((l) => l.primary)
              .map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
          </nav>
          <div className="header-actions">
            <a
              className="header-contact"
              href={getWhatsAppUrl(undefined, "header_whatsapp")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <button
              className="button header-booking"
              onClick={onOpenBookingModal}
            >
              Agendar aula experimental
            </button>
            <button
              ref={triggerRef}
              className="icon-button menu-toggle"
              aria-label="Abrir menu de navegação"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <dialog
        onKeyDown={containDialogFocus}
        id="mobile-menu"
        ref={dialogRef}
        className="menu-dialog"
        aria-label="Menu de navegação"
        onCancel={() => setMenuOpen(false)}
        onClose={() => setMenuOpen(false)}
      >
        <div className="menu-top">
          <BrandLogo />
          <button
            className="icon-button"
            aria-label="Fechar menu de navegação"
            onClick={() => {
              setMenuOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navegação móvel">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                dialogRef.current?.close();
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="menu-bottom">
          <button
            className="button"
            onClick={() => {
              dialogRef.current?.close();
              setMenuOpen(false);
              onOpenBookingModal();
            }}
          >
            {businessData.cta.primaryText}
          </button>
          <a
            className="text-link"
            href={getWhatsAppUrl(undefined, "mobile_drawer_whatsapp")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {businessData.cta.whatsappCtaText}
          </a>
          <p>{businessData.hours.weekdaysDetail}</p>
        </div>
      </dialog>
    </>
  );
}
