/**
 * DADOS CENTRAIS DO STUDIO BS TRAINER
 * 
 * ATENÇÃO: Toda informação neste arquivo é rigorosamente baseada no
 * dossiê da empresa (dossie_studio_bs_trainer.md) e registros públicos confirmados.
 * 
 * NUNCA altere estes dados para incluir promessas fictícias, planos inexistentes,
 * avaliações forjadas ou dados da empresa homônima de São Paulo.
 */

export interface BusinessConfig {
  name: string;
  fullName: string;
  legalName: string;
  tradeName: string;
  cnpj: string;
  foundationYear: number;
  founder: {
    name: string;
    fullName: string;
    role: string;
    experienceYearsDescription: string;
    bioShort: string;
  };
  contact: {
    phonePrimary: string;
    phoneFormatted: string;
    phoneSecondary?: string;
    email: string;
    whatsappNumber: string; // no special characters: 5567984450951
    defaultWhatsAppMessage: string;
  };
  location: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    stateCode: string;
    zipCode: string;
    fullAddress: string;
    mapsSearchUrl: string;
    mapsEmbedQuery: string;
  };
  hours: {
    weekdays: string;
    weekdaysDetail: string;
    saturday: string;
    sunday: string;
    holidayNote?: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
  };
  reputation: {
    googleRating: number;
    googleReviewCountApprox: number;
    googleRatingText: string;
  };
  cta: {
    primaryText: string;
    secondaryText: string;
    whatsappCtaText: string;
  };
}

export const businessData: BusinessConfig = {
  name: "BS Trainer Studio",
  fullName: "Studio BS Trainer",
  legalName: "Studio Bs Personal Trainer LTDA",
  tradeName: "Studio Bs",
  cnpj: "27.421.717/0001-63",
  foundationYear: 2017,
  founder: {
    name: "Brunno Schneider",
    fullName: "Brunno Schneider Pereira Selle",
    role: "Fundador e Personal Trainer",
    experienceYearsDescription: "Mais de 16 anos dedicados ao treinamento personalizado e saúde",
    bioShort:
      "Profissional à frente do Studio BS Trainer, com sólida trajetória no desenvolvimento de métodos de treino individualizados com foco em constância, segurança e resultados consistentes."
  },
  contact: {
    phonePrimary: "(67) 98445-0951",
    phoneFormatted: "+55 67 98445-0951",
    phoneSecondary: "(67) 98107-0951",
    email: "brunnoselle@hotmail.com",
    whatsappNumber: "5567984450951",
    defaultWhatsAppMessage: "Olá! Conheci o BS Trainer pelo site e gostaria de saber mais sobre a aula experimental."
  },
  location: {
    street: "Rua Vitório Zeolla",
    number: "1965",
    neighborhood: "Carandá Bosque",
    city: "Campo Grande",
    state: "Mato Grosso do Sul",
    stateCode: "MS",
    zipCode: "79032-360",
    fullAddress: "Rua Vitório Zeolla, 1965 — Carandá Bosque, Campo Grande — MS, CEP 79032-360",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=BS+Trainer+Studio+Rua+Vitorio+Zeolla+1965+Caranda+Bosque+Campo+Grande+MS",
    mapsEmbedQuery: "Rua+Vitório+Zeolla,+1965+-+Carandá+Bosque,+Campo+Grande+-+MS,+79032-360"
  },
  hours: {
    weekdays: "05:00 às 21:00",
    weekdaysDetail: "Segunda a Sexta-feira: das 05h às 21h",
    saturday: "Consulte atendimento com hora marcada",
    sunday: "Fechado",
    holidayNote: "Em feriados, consulte a programação especial via WhatsApp."
  },
  social: {
    instagramHandle: "@studiobstrainer",
    instagramUrl: "https://www.instagram.com/studiobstrainer/"
  },
  reputation: {
    googleRating: 4.6,
    googleReviewCountApprox: 59,
    googleRatingText: "4,6 estrelas no Google com aproximadamente 59 avaliações registradas"
  },
  cta: {
    primaryText: "Agendar aula experimental",
    secondaryText: "Conhecer o Studio",
    whatsappCtaText: "Falar no WhatsApp"
  }
};

/**
 * Utilitário para gerar links de WhatsApp padronizados e mensuráveis
 */
export function getWhatsAppUrl(customMessage?: string, trackingParam?: string): string {
  const message = customMessage || businessData.contact.defaultWhatsAppMessage;
  const encoded = encodeURIComponent(message);
  const base = `https://wa.me/${businessData.contact.whatsappNumber}?text=${encoded}`;
  return trackingParam ? `${base}&utm_source=site&utm_campaign=${trackingParam}` : base;
}
