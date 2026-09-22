import { businessData as b, getWhatsAppUrl } from "../data/business";
export function LocationHoursSection() {
  const mapQuery = encodeURIComponent(b.location.fullAddress);
  return (
    <section
      id="localizacao"
      className="section location-section"
      aria-labelledby="location-title"
    >
      <div className="container">
        <h2 id="location-title">
          Seu próximo treino
          <br />é no {b.location.neighborhood}.
        </h2>
        <div className="location-layout">
          <div className="location-copy">
            <address>
              <strong>
                {b.location.street}, {b.location.number}
              </strong>
              <br />
              {b.location.neighborhood}, {b.location.city} -{" "}
              {b.location.stateCode}
              <br />
              CEP {b.location.zipCode}
            </address>
            <a
              className="text-link"
              href={b.location.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Traçar rota no Google Maps
            </a>
            <div className="hours">
              <h3>Atendimento com hora marcada</h3>
              <dl>
                <div>
                  <dt>Segunda a sexta</dt>
                  <dd>{b.hours.weekdays}</dd>
                </div>
                <div>
                  <dt>Sábado</dt>
                  <dd>{b.hours.saturday}</dd>
                </div>
                <div>
                  <dt>Domingo</dt>
                  <dd>{b.hours.sunday}</dd>
                </div>
              </dl>
              <p>{b.hours.holidayNote}</p>
            </div>
            <a
              className="contact-number"
              href={getWhatsAppUrl(undefined, "location_card_whatsapp")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {b.contact.phonePrimary}
              <span>Falar no WhatsApp</span>
            </a>
          </div>
          <div className="location-map">
            <iframe
              title="Localização do BS Trainer Studio no Google Maps"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={b.location.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir mapa em tela cheia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
