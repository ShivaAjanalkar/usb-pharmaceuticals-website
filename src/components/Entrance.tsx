"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { shouldAnimate } from "@/lib/motion";

/**
 * The one orchestrated page-load sequence the brief allows, used on the Home
 * hero. Children are sequenced by their `--i` custom property.
 *
 * The hidden keyframe state is only armed once this component has mounted and
 * confirmed the animation will actually run, so the hero renders visible for
 * anyone whose browser never gets that far.
 */
export default function Entrance({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldAnimate()) ref.current?.setAttribute("data-armed", "true");
  }, []);

  return (
    <div ref={ref} className={`orchestrate ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
