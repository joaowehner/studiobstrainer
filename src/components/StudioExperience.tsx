import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, ArrowDownRight, RotateCcw } from "lucide-react";
import { businessData } from "../data/business";
import { studioVideos } from "../data/videos";
import { REDUCED_MOTION, useMediaPreference } from "../motion/preferences";

export function StudioExperience() {
  const reducedMotion = useMediaPreference(REDUCED_MOTION);
  const videoTourRef = useRef<HTMLVideoElement>(null);
  const videoCoachingRef = useRef<HTMLVideoElement>(null);
  const [activeAudio, setActiveAudio] = useState<"tour" | "coaching" | null>(null);
  const [tourEnded, setTourEnded] = useState(false);
  const [coachingEnded, setCoachingEnded] = useState(false);

  const activeAudioRef = useRef<"tour" | "coaching" | null>(null);
  activeAudioRef.current = activeAudio;

  const tourEndedRef = useRef(false);
  tourEndedRef.current = tourEnded;

  const coachingEndedRef = useRef(false);
  coachingEndedRef.current = coachingEnded;

  const hadAudioRef = useRef<{ tour: boolean; coaching: boolean }>({
    tour: false,
    coaching: false,
  });

  // Let the visibility observer start playback; offscreen video must not compete
  // with the Hero or brand intro for bandwidth. Reduced motion stays manual.
  useEffect(() => {
    if (!reducedMotion) return;
    for (const video of [videoTourRef.current, videoCoachingRef.current]) {
      if (!video) continue;
      video.muted = true;
      video.pause();
    }
    setActiveAudio(null);
  }, [reducedMotion]);

  // Automatically mutes audio & pauses when video scrolls out of the viewport
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        const isTour = video === videoTourRef.current;
        const isCoaching = video === videoCoachingRef.current;

        if (!entry.isIntersecting) {
          // Scrolled out of view: mute audio immediately so it doesn't disturb navigation
          if (isTour && activeAudioRef.current === "tour") {
            video.muted = true;
            setActiveAudio(null);
          } else if (isCoaching && activeAudioRef.current === "coaching") {
            video.muted = true;
            setActiveAudio(null);
          }
          // Pause playback off-screen to save battery/resources
          if (!video.paused) {
            video.pause();
          }
        } else if (!reducedMotion) {
          // Re-entering view: resume playback if video hasn't ended
          if (isTour && !tourEndedRef.current && video.paused) {
            video.play().catch(() => {});
          } else if (isCoaching && !coachingEndedRef.current && video.paused) {
            video.play().catch(() => {});
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
    });

    if (videoTourRef.current) observer.observe(videoTourRef.current);
    if (videoCoachingRef.current) observer.observe(videoCoachingRef.current);

    return () => {
      observer.disconnect();
    };
  }, [reducedMotion]);

  const handleToggleAudio = (target: "tour" | "coaching") => {
    if (activeAudio === target) {
      if (videoTourRef.current) videoTourRef.current.muted = true;
      if (videoCoachingRef.current) videoCoachingRef.current.muted = true;
      hadAudioRef.current[target] = false;
      setActiveAudio(null);
    } else {
      if (target === "tour") {
        if (videoCoachingRef.current) videoCoachingRef.current.muted = true;
        if (videoTourRef.current) {
          videoTourRef.current.muted = false;
          videoTourRef.current.play().catch(() => {});
        }
        hadAudioRef.current.tour = true;
        hadAudioRef.current.coaching = false;
        setActiveAudio("tour");
      } else {
        if (videoTourRef.current) videoTourRef.current.muted = true;
        if (videoCoachingRef.current) {
          videoCoachingRef.current.muted = false;
          videoCoachingRef.current.play().catch(() => {});
        }
        hadAudioRef.current.coaching = true;
        hadAudioRef.current.tour = false;
        setActiveAudio("coaching");
      }
    }
  };

  const handleVideoEnded = (target: "tour" | "coaching") => {
    if (target === "tour") {
      hadAudioRef.current.tour = activeAudioRef.current === "tour";
      if (activeAudioRef.current === "tour") {
        if (videoTourRef.current) videoTourRef.current.muted = true;
        setActiveAudio(null);
      }
      setTourEnded(true);
    } else {
      hadAudioRef.current.coaching = activeAudioRef.current === "coaching";
      if (activeAudioRef.current === "coaching") {
        if (videoCoachingRef.current) videoCoachingRef.current.muted = true;
        setActiveAudio(null);
      }
      setCoachingEnded(true);
    }
  };

  const handleReplay = (target: "tour" | "coaching") => {
    if (target === "tour") {
      setTourEnded(false);
      tourEndedRef.current = false;
      const video = videoTourRef.current;
      if (video) {
        video.currentTime = 0;
        if (hadAudioRef.current.tour) {
          if (videoCoachingRef.current) videoCoachingRef.current.muted = true;
          video.muted = false;
          setActiveAudio("tour");
        } else {
          video.muted = true;
          setActiveAudio(null);
        }
        video.play().catch(() => {});
      }
    } else {
      setCoachingEnded(false);
      coachingEndedRef.current = false;
      const video = videoCoachingRef.current;
      if (video) {
        video.currentTime = 0;
        if (hadAudioRef.current.coaching) {
          if (videoTourRef.current) videoTourRef.current.muted = true;
          video.muted = false;
          setActiveAudio("coaching");
        } else {
          video.muted = true;
          setActiveAudio(null);
        }
        video.play().catch(() => {});
      }
    }
  };

  return (
    <section
      id="studio"
      className="section studio-section"
      aria-labelledby="studio-title"
    >
      <div className="container">
        <div className="studio-intro">
          <h2 id="studio-title">
            Um lugar para
            <br />
            se dedicar a você.
          </h2>
          <div>
            <p>
              O treino ganha outro ritmo quando alguém conhece seus objetivos.
              Aqui, você encontra orientação próxima, horários organizados e
              espaço para se concentrar.
            </p>
            <a
              className="text-link"
              href={businessData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Veja o dia a dia no Instagram
            </a>
          </div>
        </div>
        <div className="studio-gallery">
          <figure className="studio-media studio-media--primary entrance-video">
            <div className="video-wrapper" data-reveal="image">
              <video
                ref={videoTourRef}
                src={studioVideos.tour.src}
                poster={studioVideos.tour.poster}
                controls={reducedMotion}
                muted
                playsInline
                preload="none"
                onEnded={() => handleVideoEnded("tour")}
                aria-label={studioVideos.tour.title}
              />
              {!reducedMotion && (tourEnded ? (
                <div className="video-replay-overlay">
                  <button
                    type="button"
                    onClick={() => handleReplay("tour")}
                    className="video-replay-btn"
                    aria-label="Assistir de novo o tour pelo estúdio"
                  >
                    <RotateCcw size={15} className="replay-icon" />
                    <span>Assistir de novo</span>
                  </button>
                </div>
              ) : (
                <div className="video-audio-control">
                  {activeAudio !== "tour" && (
                    <div className="audio-hint" aria-hidden="true">
                      <span>Ativar som</span>
                      <ArrowDownRight className="audio-hint-arrow" size={14} />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => handleToggleAudio("tour")}
                    className={`audio-toggle-btn ${activeAudio === "tour" ? "is-active" : ""}`}
                    aria-label={activeAudio === "tour" ? "Silenciar vídeo" : "Ativar som do vídeo"}
                    title={activeAudio === "tour" ? "Silenciar vídeo" : "Ativar som do vídeo"}
                  >
                    {activeAudio === "tour" ? (
                      <Volume2 size={18} className="audio-icon" />
                    ) : (
                      <VolumeX size={18} className="audio-icon" />
                    )}
                  </button>
                </div>
              ))}
            </div>
            <figcaption>
              {businessData.location.street}, {businessData.location.number}.{" "}
              {businessData.location.neighborhood}.
            </figcaption>
          </figure>
          <figure className="studio-media studio-media--secondary coaching-video">
            <div className="video-wrapper" data-reveal="image">
              <video
                ref={videoCoachingRef}
                src={studioVideos.coaching.src}
                poster={studioVideos.coaching.poster}
                controls={reducedMotion}
                muted
                playsInline
                preload="none"
                onEnded={() => handleVideoEnded("coaching")}
                aria-label={studioVideos.coaching.title}
              />
              {!reducedMotion && (coachingEnded ? (
                <div className="video-replay-overlay">
                  <button
                    type="button"
                    onClick={() => handleReplay("coaching")}
                    className="video-replay-btn"
                    aria-label="Assistir de novo o treino com orientação próxima"
                  >
                    <RotateCcw size={15} className="replay-icon" />
                    <span>Assistir de novo</span>
                  </button>
                </div>
              ) : (
                <div className="video-audio-control">
                  {activeAudio !== "coaching" && (
                    <div className="audio-hint" aria-hidden="true">
                      <span>Ativar som</span>
                      <ArrowDownRight className="audio-hint-arrow" size={14} />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => handleToggleAudio("coaching")}
                    className={`audio-toggle-btn ${activeAudio === "coaching" ? "is-active" : ""}`}
                    aria-label={activeAudio === "coaching" ? "Silenciar vídeo" : "Ativar som do vídeo"}
                    title={activeAudio === "coaching" ? "Silenciar vídeo" : "Ativar som do vídeo"}
                  >
                    {activeAudio === "coaching" ? (
                      <Volume2 size={18} className="audio-icon" />
                    ) : (
                      <VolumeX size={18} className="audio-icon" />
                    )}
                  </button>
                </div>
              ))}
            </div>
            <figcaption>Atenção em cada movimento.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
