import { useEffect, useRef, type ButtonHTMLAttributes } from "react";
import { PRECISE_POINTER, useMediaPreference } from "../motion/preferences";

/** Two conversion moments only. Native pointer and keyboard behavior stay intact. */
export function MagneticButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null);
  const enabled = useMediaPreference(PRECISE_POINTER);
  useEffect(() => {
    const button = ref.current;
    if (!button || !enabled) return;
    let bounds: DOMRect | null = null;
    let frame = 0;
    let x = 0;
    let y = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      bounds = null;
      button.style.removeProperty("translate");
    };
    const enter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") bounds = button.getBoundingClientRect();
    };
    const move = (event: PointerEvent) => {
      if (!bounds || event.pointerType !== "mouse") return;
      const dx = (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2);
      const dy = (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2);
      const length = Math.max(1, Math.hypot(dx, dy));
      x = (dx / length) * 4;
      y = (dy / length) * 4;
      if (!frame) frame = requestAnimationFrame(() => {
        button.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
        frame = 0;
      });
    };
    button.addEventListener("pointerenter", enter);
    button.addEventListener("pointermove", move);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("pointerdown", reset);
    button.addEventListener("focus", reset);
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("blur", reset);
    return () => {
      reset();
      button.removeEventListener("pointerenter", enter);
      button.removeEventListener("pointermove", move);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("pointerdown", reset);
      button.removeEventListener("focus", reset);
      window.removeEventListener("scroll", reset);
      window.removeEventListener("blur", reset);
    };
  }, [enabled]);
  return <button {...props} ref={ref} data-magnetic={enabled || undefined} />;
}
