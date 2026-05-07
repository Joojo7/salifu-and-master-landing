const COLORS = {
  outline: "#1a1208",
  sunsetOrange: "#ff7a3a",
  hotPink: "#ff3b8b",
  cyan: "#1ad6ff",
  plum: "#5b1a8a",
  cream: "#fff7ea",
  glass: "#9ad7e8",
  glassHighlight: "#cfeaf2",
  bumper: "#3a3026",
  wheelHub: "#bcae90",
  tire: "#0e0d0a",
  rackWood: "#7a4520",
  headlightCore: "#fff3b8",
  shadow: "#000",
  puffLight: "#d8d4cb",
  puffMid: "#c9c5bc",
  puffPale: "#e6e2d8",
} as const;

export function HeroTrotro() {
  return (
    <svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="hero-vanblue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3ee6ff" />
          <stop offset="1" stopColor={COLORS.cyan} />
        </linearGradient>
        <linearGradient id="hero-vanred" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff5ea3" />
          <stop offset="1" stopColor="#c2197a" />
        </linearGradient>
      </defs>

      <g transform="translate(120 215)">
        <circle className="puff" cx="0" cy="0" r="6" fill={COLORS.puffLight} />
        <circle className="puff b" cx="0" cy="0" r="7" fill={COLORS.puffMid} />
        <circle className="puff c" cx="0" cy="0" r="5" fill={COLORS.puffPale} />
      </g>
      <ellipse cx="220" cy="232" rx="120" ry="6" fill={COLORS.shadow} opacity="0.28" />

      <g className="van">
        <g className="body-tilt">
          <rect x="125" y="200" width="195" height="14" rx="3" fill={COLORS.outline} />
          <path
            d="M 130 130 L 320 130 Q 326 130 328 134 L 332 158 Q 332 162 332 166 L 332 204 Q 332 210 326 210 L 122 210 Q 116 210 116 204 L 116 168 Q 116 160 122 156 L 124 142 Q 126 130 130 130 Z"
            fill="url(#hero-vanblue)"
            stroke={COLORS.outline}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <rect x="118" y="186" width="212" height="10" fill="url(#hero-vanred)" />
          <rect x="118" y="184" width="212" height="2" fill={COLORS.cream} opacity="0.5" />
          <rect x="118" y="178" width="71" height="4" fill={COLORS.hotPink} />
          <rect x="189" y="178" width="71" height="4" fill={COLORS.sunsetOrange} />
          <rect x="260" y="178" width="70" height="4" fill={COLORS.cyan} />
          <circle cx="223" cy="180" r="3" fill={COLORS.plum} />
          <path d="M 296 138 L 326 142 L 326 168 L 296 168 Z" fill={COLORS.glass} stroke={COLORS.outline} strokeWidth="2" strokeLinejoin="round" />
          <path d="M 298 142 L 322 145 L 322 154 L 298 154 Z" fill={COLORS.glassHighlight} opacity="0.7" />
          <rect x="200" y="138" width="86" height="32" fill={COLORS.glass} stroke={COLORS.outline} strokeWidth="2" />
          <line x1="244" y1="138" x2="244" y2="170" stroke={COLORS.outline} strokeWidth="2" />
          <path d="M 204 142 L 240 142 L 230 158 L 204 158 Z" fill={COLORS.glassHighlight} opacity="0.55" />
          <path d="M 248 142 L 282 142 L 272 158 L 248 158 Z" fill={COLORS.glassHighlight} opacity="0.55" />
          <rect x="138" y="138" width="56" height="32" fill={COLORS.glass} stroke={COLORS.outline} strokeWidth="2" />
          <path d="M 142 142 L 188 142 L 178 158 L 142 158 Z" fill={COLORS.glassHighlight} opacity="0.55" />
          <g className="sign">
            <rect x="156" y="118" width="148" height="16" rx="3" fill={COLORS.plum} stroke={COLORS.outline} strokeWidth="2" />
            <text x="230" y="130" textAnchor="middle" fontFamily="Helvetica,Arial,sans-serif" fontWeight="900" fontSize="9" letterSpacing="1" fill={COLORS.cyan}>
              CIRCLE · KANESHIE
            </text>
          </g>
          <circle cx="170" cy="156" r="6" fill={COLORS.plum} stroke={COLORS.outline} strokeWidth="1.5" />
          <path d="M 162 162 L 178 162 L 176 170 L 164 170 Z" fill={COLORS.hotPink} stroke={COLORS.outline} strokeWidth="1.5" />
          <g transform="translate(223 200)">
            <circle r="6" fill={COLORS.cream} stroke={COLORS.outline} strokeWidth="1.5" />
            <path d="M -3 -3 L 0 1 L 3 -3 M -3 1 L 0 4 L 3 1" stroke={COLORS.outline} strokeWidth="1.4" fill="none" strokeLinecap="round" />
          </g>
          <rect x="200" y="180" width="10" height="2" fill={COLORS.outline} />
          <rect x="246" y="180" width="10" height="2" fill={COLORS.outline} />
          <rect x="124" y="196" width="8" height="4" fill={COLORS.sunsetOrange} stroke={COLORS.outline} strokeWidth="1" />
          <rect x="316" y="196" width="8" height="4" fill={COLORS.sunsetOrange} stroke={COLORS.outline} strokeWidth="1" />
          <rect x="324" y="196" width="10" height="14" rx="2" fill={COLORS.bumper} stroke={COLORS.outline} strokeWidth="1.5" />
          <rect x="114" y="196" width="10" height="14" rx="2" fill={COLORS.bumper} stroke={COLORS.outline} strokeWidth="1.5" />
          <g className="headlight">
            <circle cx="326" cy="172" r="4" fill={COLORS.cream} stroke={COLORS.outline} strokeWidth="1.5" />
            <circle cx="326" cy="172" r="1.5" fill={COLORS.headlightCore} />
          </g>
          <rect x="116" y="170" width="6" height="6" rx="1" fill={COLORS.hotPink} stroke={COLORS.outline} strokeWidth="1.5" />
          <rect x="328" y="138" width="6" height="3" fill={COLORS.outline} />
          <rect x="332" y="138" width="3" height="6" fill={COLORS.outline} />
          <rect x="136" y="120" width="32" height="6" fill={COLORS.rackWood} stroke={COLORS.outline} strokeWidth="1.5" />
          <rect x="138" y="112" width="14" height="10" fill={COLORS.hotPink} stroke={COLORS.outline} strokeWidth="1.5" />
          <rect x="154" y="114" width="12" height="8" fill={COLORS.sunsetOrange} stroke={COLORS.outline} strokeWidth="1.5" />
          <line x1="136" y1="118" x2="170" y2="118" stroke={COLORS.hotPink} strokeWidth="1" />
          <rect x="108" y="206" width="10" height="4" rx="1" fill={COLORS.outline} />
        </g>

        <g className="wheel-hop">
          {[160, 290].map((x) => (
            <g key={x} transform={`translate(${x} 214)`}>
              <circle r="18" fill={COLORS.tire} stroke={COLORS.outline} strokeWidth="2" />
              <g className="wheel-spin">
                <circle r="11" fill={COLORS.wheelHub} stroke={COLORS.outline} strokeWidth="1.5" />
                <circle r="3" fill={COLORS.outline} />
                <rect x="-1" y="-11" width="2" height="22" fill={COLORS.outline} />
                <rect x="-11" y="-1" width="22" height="2" fill={COLORS.outline} />
                <rect x="-1" y="-11" width="2" height="22" fill={COLORS.outline} transform="rotate(45)" />
                <rect x="-11" y="-1" width="22" height="2" fill={COLORS.outline} transform="rotate(45)" />
              </g>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
