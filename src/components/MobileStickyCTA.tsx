import { useEffect, useState } from "react";
import { businessData, getWhatsAppUrl } from "../data/business";

export function MobileStickyCTA({
  onOpenBookingModal,
}: {
  onOpenBookingModal: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroPhoto = document.querySelector(".hero-photo");
    if (!heroPhoto) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.boundingClientRect.bottom <= 80);
    }, { rootMargin: "-80px 0px 0px 0px", threshold: 0 });
    observer.observe(heroPhoto);
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className={`mobile-sticky ${isVisible ? "is-visible" : ""}`}
      aria-label="Ações rápidas de contato"
      aria-hidden={!isVisible}
    >
      <a
        href={getWhatsAppUrl(undefined, "mobile_sticky_whatsapp")}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isVisible ? 0 : -1}
      >
        WhatsApp
      </a>
      <button
        type="button"
        className="button"
        onClick={onOpenBookingModal}
        tabIndex={isVisible ? 0 : -1}
      >
        {businessData.cta.primaryText}
      </button>
    </aside>
  );
}
