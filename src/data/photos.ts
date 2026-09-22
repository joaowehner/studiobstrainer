const imageBase = `${import.meta.env.BASE_URL}images/`;
// Only real media from the official profile. Provenance: docs/redesign/direcao.md.
export const studioPhotos = {
  coaching: {
    src: `${imageBase}acompanhamento.jpg`,
    alt: "Profissional orientando um aluno durante o treino no BS Trainer",
    source: "https://www.instagram.com/studiobstrainer/reel/DYr-KzrxVN-/",
  },
  entrance: {
    src: `${imageBase}entrada.webp`,
    alt: "Entrada do Studio BS Trainer com a logo e os horários na porta de vidro",
    source: "https://www.instagram.com/studiobstrainer/reel/DZ-SEbgRgYh/",
  },
  hero: {
    src: `${imageBase}hero.webp`,
    fallback: `${imageBase}hero.jpg`,
    alt: "Fachada do Studio BS Trainer com a marca e o treinador em frente à unidade no Carandá Bosque",
    source: "https://www.instagram.com/studiobstrainer/",
  },
  training: {
    src: `${imageBase}hero.webp`,
    fallback: `${imageBase}hero.jpg`,
    alt: "Fachada do Studio BS Trainer com a marca e o treinador em frente à unidade no Carandá Bosque",
    source: "https://www.instagram.com/studiobstrainer/",
  },
};
