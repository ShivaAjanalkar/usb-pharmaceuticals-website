import type { ReactNode } from "react";

/**
 * The main landmark and the skip link's target.
 *
 * There is deliberately no cross-page fade here. Animating the element that
 * wraps every page's content means a stalled or throttled animation can leave
 * the whole page blank, and the brief allows one orchestrated sequence on Home
 * plus scroll-reveal on section openers — nothing else. A route fade was never
 * within that budget.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <main id="content" style={{ flex: 1 }}>
      {children}
    </main>
  );
}
