export function ConnectDiagram() {
  return (
    <div className="relative w-full aspect-[2/1] min-h-[360px] mt-10">
      <svg
        viewBox="0 0 900 460"
        className="w-full h-full"
        aria-hidden
      >
        <defs>
          <pattern
            id="dotgrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>
        <rect width="900" height="460" fill="url(#dotgrid)" />

        {/* connection lines (dashed) */}
        {[
          // CRM -> SDK
          { x1: 270, y1: 90, x2: 320, y2: 170 },
          // Booking -> Event
          { x1: 700, y1: 90, x2: 620, y2: 170 },
          // SDK -> stripe
          { x1: 360, y1: 200, x2: 430, y2: 250 },
          // Event -> stripe
          { x1: 580, y1: 200, x2: 510, y2: 250 },
          // Plus column to SDK
          { x1: 160, y1: 250, x2: 320, y2: 200 },
          // Logos to App Marketplace
          { x1: 200, y1: 270, x2: 360, y2: 270 },
          // stripe -> Orchestration
          { x1: 470, y1: 300, x2: 470, y2: 350 },
          // stripe -> Data Pipeline
          { x1: 510, y1: 280, x2: 600, y2: 280 },
          // Data Pipeline -> external
          { x1: 670, y1: 280, x2: 760, y2: 280 },
        ].map((l, i) => (
          <line
            key={i}
            {...l}
            stroke="rgba(120,140,210,0.4)"
            strokeWidth={1}
            strokeDasharray="3,3"
          />
        ))}

        {/* nodes */}
        <DiagramNode x={180} y={70} label="CRM" />
        <DiagramNode x={620} y={70} label="Booking system" />
        <DiagramNode x={270} y={170} label="SDK" />
        <DiagramNode x={520} y={170} label="Event Destinations" />
        <DiagramNode x={310} y={250} label="App Marketplace" hint="↗" />
        <DiagramNode
          x={430}
          y={250}
          label="Hyun Kim"
          highlight
          width={94}
          height={36}
        />
        <DiagramNode x={580} y={250} label="Data Pipeline" />
        <DiagramNode x={400} y={350} label="Orchestration" />

        {/* left logos cluster */}
        <g transform="translate(50, 230)">
          {[
            { fill: "#fdd835", text: "C" },
            { fill: "#ff5a3c", text: "H" },
            { fill: "#1a1a1a", text: "T" },
            { fill: "#3a89ff", text: "A" },
          ].map((b, i) => (
            <g
              key={i}
              transform={`translate(${(i % 2) * 28}, ${Math.floor(i / 2) * 28})`}
            >
              <rect
                width="22"
                height="22"
                rx="4"
                fill={b.fill}
              />
              <text
                x="11"
                y="15"
                textAnchor="middle"
                fontSize="11"
                fill="white"
                fontWeight="700"
              >
                {b.text}
              </text>
            </g>
          ))}
        </g>

        {/* right external */}
        <g transform="translate(780, 260)">
          <rect width="42" height="34" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
          <rect x="6" y="6" width="14" height="3" fill="rgba(255,255,255,0.4)" />
          <rect x="6" y="13" width="22" height="3" fill="rgba(255,255,255,0.4)" />
          <rect x="6" y="20" width="18" height="3" fill="rgba(255,255,255,0.4)" />
        </g>
      </svg>
    </div>
  );
}

function DiagramNode({
  x,
  y,
  label,
  highlight,
  hint,
  width = 124,
  height = 30,
}: {
  x: number;
  y: number;
  label: string;
  highlight?: boolean;
  hint?: string;
  width?: number;
  height?: number;
}) {
  return (
    <g transform={`translate(${x - width / 2}, ${y - height / 2})`}>
      <rect
        width={width}
        height={height}
        rx="6"
        fill={highlight ? "#6c5cff" : "rgba(120, 100, 240, 0.18)"}
        stroke={highlight ? "#9082ff" : "rgba(150, 130, 255, 0.4)"}
        strokeWidth={1}
      />
      <text
        x={width / 2}
        y={height / 2 + 4}
        textAnchor="middle"
        fontSize="12"
        fill={highlight ? "white" : "rgba(220,220,255,0.95)"}
        fontWeight={highlight ? 600 : 500}
      >
        {label}
        {hint && <tspan dx="4" fontSize="10" fill="rgba(255,255,255,0.5)">{hint}</tspan>}
      </text>
    </g>
  );
}
