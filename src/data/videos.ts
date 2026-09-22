const videoBase = `${import.meta.env.BASE_URL}videos/`;

export const studioVideos = {
  tour: {
    src: `${videoBase}studio-tour.mp4`,
    poster: `${videoBase}studio-tour-poster.webp`,
    fallbackPoster: `${videoBase}studio-tour-poster.jpg`,
    title: "Tour pelo Studio BS Trainer",
    width: 716,
    height: 1274,
  },
  coaching: {
    src: `${videoBase}studio-coaching.mp4`,
    poster: `${videoBase}studio-coaching-poster.webp`,
    fallbackPoster: `${videoBase}studio-coaching-poster.jpg`,
    title: "Treino e acompanhamento no Studio BS Trainer",
    width: 720,
    height: 1280,
  },
};
