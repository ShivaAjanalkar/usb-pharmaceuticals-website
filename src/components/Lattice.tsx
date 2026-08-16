/**
 * An octagonal lattice tiled behind the hero — the mark's geometry repeated
 * at page scale. It is masked to a soft radial falloff and sits at a very low
 * opacity, so it reads as paper texture rather than as an illustration.
 */
export default function Lattice() {
  return (
    <svg className="lattice" aria-hidden focusable="false">
      <defs>
        <pattern
          id="usb-lattice"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.34">
            {/* octagon, inset 10 in a 120 cell */}
            <path d="M43 10H77L110 43V77L77 110H43L10 77V43Z" />
            {/* the 45° cuts extended to the cell edge, so tiles interlock */}
            <path d="M10 43L0 33M110 43L120 33M10 77L0 87M110 77L120 87" />
            <path d="M43 10L33 0M77 10L87 0M43 110L33 120M77 110L87 120" />
            <circle cx="60" cy="60" r="1.6" fill="currentColor" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#usb-lattice)" />
    </svg>
  );
}
