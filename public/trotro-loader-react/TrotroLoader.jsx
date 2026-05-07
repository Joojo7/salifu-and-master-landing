import "./TrotroLoader.css";

/**
 * TrotroLoader — animated VW T3 trotro loader.
 *
 *   <TrotroLoader size={320} />
 *   <TrotroLoader fullscreen />
 *
 * Props:
 *   size       Pixel width of the badge. Height auto-scales 280/440 ratio. Default 440.
 *   fullscreen Renders edge-to-edge across the viewport, ignoring `size`.
 *   label      Caption shown under the loader. Default "Loading the trotro".
 *   showProgress  Shows the gradient progress bar. Default true.
 */
export default function TrotroLoader({
  size = 440,
  fullscreen = false,
  label = "Loading the trotro",
  showProgress = true,
}) {
  const wrapStyle = fullscreen
    ? { position: "fixed", inset: 0, zIndex: 9999, background: "#0e1218",
        display: "grid", placeItems: "center" }
    : { display: "inline-grid", placeItems: "center", gap: 16 };

  const stageStyle = fullscreen
    ? { width: "min(95vw, calc(95vh * 1.571))",
        height: "min(95vh, calc(95vw / 1.571))" }
    : { width: size, height: size * (280 / 440) };

  return (
    <div className="trotro-loader" style={wrapStyle}>
      <div style={fullscreen ? { display: "grid", placeItems: "center", gap: 16 } : { display: "contents" }}>
        <div style={stageStyle}>
          <svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg">
          
                  
                  <defs>
                    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#ff7a3a"/>
                      <stop offset="1" stopColor="#5b1a8a"/>
                    </linearGradient>
                    <linearGradient id="vanblue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#3ee6ff"/>
                      <stop offset="1" stopColor="#1ad6ff"/>
                    </linearGradient>
                    <linearGradient id="vanred" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#ff5ea3"/>
                      <stop offset="1" stopColor="#c2197a"/>
                    </linearGradient>
                    <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0" stopColor="#ff7a3a"/>
                      <stop offset="1" stopColor="#ff7a3a" stopOpacity="0"/>
                    </radialGradient>
                    <pattern id="kentePat" x="0" y="0" width="80" height="14" patternUnits="userSpaceOnUse">
                      <rect width="80" height="14" fill="#5b1a8a"/>
                      <rect x="0"  width="27" height="14" fill="#ff3b8b"/>
                      <rect x="27" width="26" height="14" fill="#ff7a3a"/>
                      <rect x="53" width="27" height="14" fill="#1ad6ff"/>
                      <circle cx="13" cy="7" r="2" fill="#5b1a8a"/>
                      <circle cx="40" cy="7" r="2" fill="#5b1a8a"/>
                      <circle cx="66" cy="7" r="2" fill="#5b1a8a"/>
                    </pattern>
                  </defs>
          
                  
                  <rect x="0" y="0" width="440" height="220" fill="url(#sky)"/>
                  
                  <circle cx="340" cy="70" r="46" fill="url(#sun)"/>
                  <circle cx="340" cy="70" r="22" fill="#ff7a3a" opacity="0.95"/>
          
                  
                  <path d="M 0 180 L 60 150 L 120 170 L 180 140 L 240 160 L 300 130 L 360 158 L 440 140 L 440 220 L 0 220 Z" fill="#5b1a8a" opacity="0.55"/>
                  <path d="M 0 200 L 80 175 L 160 195 L 240 178 L 320 200 L 400 182 L 440 196 L 440 220 L 0 220 Z" fill="#5b1a8a"/>
          
                  
                  <g className="cloud-a" opacity="0.95">
                    <g transform="translate(380 50)">
                      <ellipse cx="0" cy="0" rx="18" ry="8" fill="#fff7ea"/>
                      <ellipse cx="14" cy="-4" rx="14" ry="7" fill="#fff7ea"/>
                      <ellipse cx="-14" cy="2" rx="12" ry="6" fill="#fff7ea"/>
                    </g>
                  </g>
                  <g className="cloud-b" opacity="0.85">
                    <g transform="translate(420 100)">
                      <ellipse cx="0" cy="0" rx="14" ry="6" fill="#fff7ea"/>
                      <ellipse cx="12" cy="-3" rx="10" ry="5" fill="#fff7ea"/>
                    </g>
                  </g>
          
                  
                  <rect x="0" y="220" width="440" height="60" fill="#5b1a8a"/>
                  <rect x="0" y="232" width="440" height="22" fill="#3a0e5e"/>
                  
          
                  
                  <g clipPath="inset(0)">
                    <g className="kente">
                      <rect x="-80" y="232" width="600" height="22" fill="url(#kentePat)"/>
                    </g>
                  </g>
          
                  
                  <rect x="0" y="254" width="440" height="26" fill="#21262e"/>
                  
                  <g>
                    <g className="roaddash">
                      <g fill="#f5e0b6">
                        <rect x="-40" y="265" width="20" height="4" rx="2"/>
                        <rect x="0"   y="265" width="20" height="4" rx="2"/>
                        <rect x="40"  y="265" width="20" height="4" rx="2"/>
                        <rect x="80"  y="265" width="20" height="4" rx="2"/>
                        <rect x="120" y="265" width="20" height="4" rx="2"/>
                        <rect x="160" y="265" width="20" height="4" rx="2"/>
                        <rect x="200" y="265" width="20" height="4" rx="2"/>
                        <rect x="240" y="265" width="20" height="4" rx="2"/>
                        <rect x="280" y="265" width="20" height="4" rx="2"/>
                        <rect x="320" y="265" width="20" height="4" rx="2"/>
                        <rect x="360" y="265" width="20" height="4" rx="2"/>
                        <rect x="400" y="265" width="20" height="4" rx="2"/>
                        <rect x="440" y="265" width="20" height="4" rx="2"/>
                      </g>
                    </g>
                  </g>
          
                  
                  <ellipse cx="220" cy="232" rx="120" ry="6" fill="#000" opacity="0.28"/>
          
                  
                  <g transform="translate(120 215)">
                    <circle className="puff"   cx="0" cy="0" r="6" fill="#d8d4cb"/>
                    <circle className="puff b" cx="0" cy="0" r="7" fill="#c9c5bc"/>
                    <circle className="puff c" cx="0" cy="0" r="5" fill="#e6e2d8"/>
                  </g>
          
                  
                  <g className="van">
                    <g className="body-tilt">
          
                      
                      <rect x="125" y="200" width="195" height="14" rx="3" fill="#1a1208"/>
          
                      
                      
                      <path d="M 130 130
                               L 320 130
                               Q 326 130 328 134
                               L 332 158
                               Q 332 162 332 166
                               L 332 204
                               Q 332 210 326 210
                               L 122 210
                               Q 116 210 116 204
                               L 116 168
                               Q 116 160 122 156
                               L 124 142
                               Q 126 130 130 130 Z"
                            fill="url(#vanblue)" stroke="#1a1208" strokeWidth="2.5" strokeLinejoin="round"/>
          
                      
                      <rect x="118" y="186" width="212" height="10" fill="url(#vanred)"/>
                      <rect x="118" y="184" width="212" height="2" fill="#fff7ea" opacity=".5"/>
          
                      
                      <rect x="118" y="178" width="71"  height="4" fill="#ff3b8b"/>
                      <rect x="189" y="178" width="71"  height="4" fill="#ff7a3a"/>
                      <rect x="260" y="178" width="70"  height="4" fill="#1ad6ff"/>
                      <circle cx="223" cy="180" r="3" fill="#5b1a8a"/>
          
                      
                      
                      <path d="M 296 138 L 326 142 L 326 168 L 296 168 Z" fill="#9ad7e8" stroke="#1a1208" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M 298 142 L 322 145 L 322 154 L 298 154 Z" fill="#cfeaf2" opacity=".7"/>
          
                      
                      <rect x="200" y="138" width="86" height="32" fill="#9ad7e8" stroke="#1a1208" strokeWidth="2"/>
                      <line x1="244" y1="138" x2="244" y2="170" stroke="#1a1208" strokeWidth="2"/>
                      
                      <path d="M 204 142 L 240 142 L 230 158 L 204 158 Z" fill="#cfeaf2" opacity=".55"/>
                      <path d="M 248 142 L 282 142 L 272 158 L 248 158 Z" fill="#cfeaf2" opacity=".55"/>
          
                      
                      <rect x="138" y="138" width="56" height="32" fill="#9ad7e8" stroke="#1a1208" strokeWidth="2"/>
                      <path d="M 142 142 L 188 142 L 178 158 L 142 158 Z" fill="#cfeaf2" opacity=".55"/>
          
                      
                      <g className="sign">
                        <rect x="156" y="118" width="148" height="16" rx="3" fill="#5b1a8a" stroke="#1a1208" strokeWidth="2"/>
                        <text x="230" y="130" textAnchor="middle"
                              fontFamily="Helvetica,Arial,sans-serif" fontWeight="900"
                              fontSize="9" letterSpacing="1" fill="#1ad6ff">CIRCLE · KANESHIE</text>
                      </g>
          
                      
                      <circle cx="170" cy="156" r="6" fill="#5b1a8a" stroke="#1a1208" strokeWidth="1.5"/>
                      <path d="M 162 162 L 178 162 L 176 170 L 164 170 Z" fill="#ff3b8b" stroke="#1a1208" strokeWidth="1.5"/>
          
                      
                      <g transform="translate(223 200)">
                        <circle r="6" fill="#fff7ea" stroke="#1a1208" strokeWidth="1.5"/>
                        <path d="M -3 -3 L 0 1 L 3 -3 M -3 1 L 0 4 L 3 1" stroke="#1a1208" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                      </g>
          
                      
                      <rect x="200" y="180" width="10" height="2" fill="#1a1208"/>
                      <rect x="246" y="180" width="10" height="2" fill="#1a1208"/>
          
                      
                      <rect x="124" y="196" width="8" height="4" fill="#ff7a3a" stroke="#1a1208" strokeWidth="1"/>
                      <rect x="316" y="196" width="8" height="4" fill="#ff7a3a" stroke="#1a1208" strokeWidth="1"/>
          
                      
                      <rect x="324" y="196" width="10" height="14" rx="2" fill="#3a3026" stroke="#1a1208" strokeWidth="1.5"/>
          
                      
                      <rect x="114" y="196" width="10" height="14" rx="2" fill="#3a3026" stroke="#1a1208" strokeWidth="1.5"/>
          
                      
                      <g className="headlight">
                        <circle cx="326" cy="172" r="4" fill="#fff7e8" stroke="#1a1208" strokeWidth="1.5"/>
                        <circle cx="326" cy="172" r="1.5" fill="#fff3b8"/>
                      </g>
                      
                      <rect x="116" y="170" width="6" height="6" rx="1" fill="#ff3b8b" stroke="#1a1208" strokeWidth="1.5"/>
          
                      
                      <rect x="328" y="138" width="6" height="3" fill="#1a1208"/>
                      <rect x="332" y="138" width="3" height="6" fill="#1a1208"/>
          
                      
                      <rect x="136" y="120" width="32" height="6" fill="#7a4520" stroke="#1a1208" strokeWidth="1.5"/>
                      
                      <rect x="138" y="112" width="14" height="10" fill="#ff3b8b" stroke="#1a1208" strokeWidth="1.5"/>
                      <rect x="154" y="114" width="12" height="8" fill="#ff7a3a" stroke="#1a1208" strokeWidth="1.5"/>
                      <line x1="136" y1="118" x2="170" y2="118" stroke="#ff3b8b" strokeWidth="1"/>
          
                      
                      <rect x="108" y="206" width="10" height="4" rx="1" fill="#1a1208"/>
          
                    </g>
          
                    
                    <g className="wheel-hop">
                      
                      <g transform="translate(160 214)">
                        <circle r="18" fill="#0e0d0a" stroke="#1a1208" strokeWidth="2"/>
                        <g className="wheel-spin">
                          <circle r="11" fill="#bcae90" stroke="#1a1208" strokeWidth="1.5"/>
                          <circle r="3"  fill="#1a1208"/>
                          <rect x="-1" y="-11" width="2" height="22" fill="#1a1208"/>
                          <rect x="-11" y="-1" width="22" height="2" fill="#1a1208"/>
                          <rect x="-1" y="-11" width="2" height="22" fill="#1a1208" transform="rotate(45)"/>
                          <rect x="-11" y="-1" width="22" height="2" fill="#1a1208" transform="rotate(45)"/>
                        </g>
                      </g>
                      
                      <g transform="translate(290 214)">
                        <circle r="18" fill="#0e0d0a" stroke="#1a1208" strokeWidth="2"/>
                        <g className="wheel-spin">
                          <circle r="11" fill="#bcae90" stroke="#1a1208" strokeWidth="1.5"/>
                          <circle r="3"  fill="#1a1208"/>
                          <rect x="-1" y="-11" width="2" height="22" fill="#1a1208"/>
                          <rect x="-11" y="-1" width="22" height="2" fill="#1a1208"/>
                          <rect x="-1" y="-11" width="2" height="22" fill="#1a1208" transform="rotate(45)"/>
                          <rect x="-11" y="-1" width="22" height="2" fill="#1a1208" transform="rotate(45)"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  
          
                </svg>
        </div>
        {label && (
          <div className="trotro-label">
            <span className="trotro-dot" />
            <span>{label}</span>
            <span className="trotro-dots"><i /><i /><i /></span>
          </div>
        )}
        {showProgress && <div className="trotro-progress" />}
      </div>
    </div>
  );
}
