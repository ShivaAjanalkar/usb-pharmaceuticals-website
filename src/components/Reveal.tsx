"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal on section openers only. Anything already in the first
 * viewport is shown immediately, and reduced-motion skips the effect
 * entirely (handled in CSS).
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

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.dataset.shown = "true";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.shown = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.02 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </section>
  );
}
