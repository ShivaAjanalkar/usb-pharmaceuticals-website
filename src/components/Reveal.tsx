"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { shouldAnimate } from "@/lib/motion";

/**
 * Scroll-reveal on section openers only.
 *
 * Two deliberate choices here, both about not losing content:
 *
 * 1. The section renders visible. JavaScript *arms* the hidden state by
 *    setting `data-armed`, and only for sections currently below the fold —
 *    so no-JS, reduced-motion and background-tab loads all show everything.
 * 2. Not IntersectionObserver. IO notifies on threshold crossings, so a jump
 *    that carries a section from below the fold to above it in one frame — an
 *    in-page anchor, a restored scroll position, a fast trackpad flick —
 *    produces no callback and would strand the section at zero opacity. A
 *    scroll check cannot miss, and detaches once the section is shown.
 *
 * Children marked `data-stagger` are sequenced by their `--i` property.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    for (const group of el.querySelectorAll<HTMLElement>("[data-stagger]")) {
      Array.from(group.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty("--i", String(i));
      });
    }

    const inRange = () =>
      el.getBoundingClientRect().top < window.innerHeight * 0.9;

    // Already on screen, or animation is not wanted: leave it visible.
    if (!shouldAnimate() || inRange()) return;

    el.dataset.armed = "true";

    let frame = 0;
    let done = false;

    const show = () => {
      done = true;
      el.dataset.shown = "true";
      detach();
    };

    const check = () => {
      frame = 0;
      if (!done && inRange()) show();
    };

    const schedule = () => {
      if (done || frame) return;
      frame = requestAnimationFrame(check);
    };

    // If the tab is hidden before the section is reached, stop animating and
    // simply show it — a queued entrance must never become a stuck one.
    const onVisibility = () => {
      if (document.visibilityState === "hidden" && !done) show();
    };

    function detach() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", onVisibility);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      detach();
    };
  }, []);

  return (
    <section ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </section>
  );
}
