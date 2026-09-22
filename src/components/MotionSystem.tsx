import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PRECISE_POINTER, REDUCED_MOTION, useMediaPreference } from "../motion/preferences";

const INTRO_KEY = "bs-trainer:intro:v1";
function shouldIntroduce() {
  if (window.matchMedia(REDUCED_MOTION).matches || location.hash || window.scrollY > 0 ||
    (document.activeElement && document.activeElement !== document.body)) return false;
  try { return sessionStorage.getItem(INTRO_KEY) !== "seen"; }
  catch { return false; } // Storage restrictions must never obstruct entry.
}

export function MotionSystem() {
  const [intro, setIntro] = useState(shouldIntroduce);
  const reduced = useMediaPreference(REDUCED_MOTION);
  const precisePointer = useMediaPreference(PRECISE_POINTER);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (reduced) return;
    root.dataset.motionEntry = intro ? "intro" : "direct";
    return () => { delete root.dataset.motionEntry; };
    // Entry choreography is initialized once, not restarted when the intro ends.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useLayoutEffect(() => {
    if (!intro) return;
    try { sessionStorage.setItem(INTRO_KEY, "seen"); } catch { /* fail open */ }
    const dismiss = () => {
      delete document.documentElement.dataset.motionEntry;
      setIntro(false);
    };
    const timer = window.setTimeout(() => setIntro(false), 1000);
    window.addEventListener("pointerdown", dismiss, { once: true });
    window.addEventListener("keydown", dismiss, { once: true });
    window.addEventListener("wheel", dismiss, { once: true, passive: true });
    window.addEventListener("touchstart", dismiss, { once: true, passive: true });
    const restore = (event: PageTransitionEvent) => { if (event.persisted) dismiss(); };
    window.addEventListener("pageshow", restore);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", dismiss);
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchstart", dismiss);
      window.removeEventListener("pageshow", restore);
    };
  }, [intro]);

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let scrollRange = 1;
    const update = () => {
      frame = 0;
      root.dataset.scrolled = String(window.scrollY > 24);
      root.style.setProperty("--reading-progress", String(Math.max(0, Math.min(1, window.scrollY / scrollRange))));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      schedule();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(document.body);
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      delete root.dataset.scrolled;
      root.style.removeProperty("--reading-progress");
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-revealed", "true");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    const path = pathRef.current;
    if (!precisePointer || !path) return;
    let frame = 0;
    let points: { x: number; y: number; time: number }[] = [];
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      path.setAttribute("d", "");
    };
    const draw = (time: number) => {
      frame = 0;
      points = points.filter((point) => time - point.time < 130);
      // Cap the physical length as well as lifetime, even with a fast mouse.
      let length = 0;
      for (let i = points.length - 1; i > 0; i--) {
        length += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
        if (length > 64) { points = points.slice(i); break; }
      }
      path.setAttribute("d", points.length > 1 ? points.map((p, i) => `${i ? "L" : "M"}${p.x},${p.y}`).join(" ") : "");
      path.style.opacity = String(points.length ? 0.32 * (1 - (time - points.at(-1)!.time) / 130) : 0);
      if (points.length) frame = requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || document.querySelector("dialog[open]") || intro) { clear(); return; }
      points.push({ x: event.clientX, y: event.clientY, time: performance.now() });
      if (points.length > 12) points.shift();
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const leave = (event: PointerEvent) => { if (!event.relatedTarget) clear(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", leave);
    window.addEventListener("pointerdown", clear);
    window.addEventListener("scroll", clear, { passive: true });
    window.addEventListener("blur", clear);
    document.addEventListener("visibilitychange", clear);
    return () => {
      clear();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", leave);
      window.removeEventListener("pointerdown", clear);
      window.removeEventListener("scroll", clear);
      window.removeEventListener("blur", clear);
      document.removeEventListener("visibilitychange", clear);
    };
  }, [precisePointer, intro]);

  return <>
    {intro && !reduced && <div className="brand-intro" aria-hidden="true">
      <picture className="intro-mark">
        <source srcSet={`${import.meta.env.BASE_URL}images/logo-display.webp`} type="image/webp" />
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" width="361" height="640" />
      </picture>
      <span className="intro-line" />
    </div>}
    {precisePointer && <svg className="cursor-trail" aria-hidden="true" focusable="false">
      <defs><linearGradient id="trail-blue" gradientUnits="userSpaceOnUse" x2="100%"><stop stopColor="#0072CE" /><stop offset="1" stopColor="#38BDF8" /></linearGradient></defs>
      <path ref={pathRef} fill="none" stroke="url(#trail-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>}
  </>;
}
