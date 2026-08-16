import type { CSSProperties, ReactNode } from "react";

/**
 * The logo's double outline, rebuilt as a frame: 2px gold, 3px paper,
 * 1px gold at 50%, mist ground. Every portrait, photograph and partner
 * logo on the site sits inside one of these.
 */
export default function Octagon({
  children,
  size,
  style,
}: {
  children?: ReactNode;
  size?: number | string;
  style?: CSSProperties;
}) {
  return (
    <div className="oct-frame" style={{ width: size ?? "100%", ...style }}>
      <div>
        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
