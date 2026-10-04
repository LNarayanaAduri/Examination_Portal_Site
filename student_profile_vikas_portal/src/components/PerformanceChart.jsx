import Icon from "./Icon.jsx";
import { performance as perf } from "../data.js";

// Chart geometry (matches the original 650x220 viewBox)
const X_START = 90;
const X_STEP = 130;
const GRID_LEFT = 50;
const GRID_RIGHT = 630;
const Y_TOP = 20;
const Y_SCALE = 2.2; // px per score point
const Y_BASE = 196;
const GRID_VALUES = [100, 80, 60, 40, 20];

const yFor = (score) => Y_TOP + (100 - score) * Y_SCALE;

export default function PerformanceChart() {
  const pts = perf.points.map((p, i) => ({
    ...p,
    x: X_START + i * X_STEP,
    y: yFor(p.score),
  }));
  const linePoints = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPoints = `${linePoints} ${pts[pts.length - 1].x},${Y_BASE} ${pts[0].x},${Y_BASE}`;
  const avgY = yFor(perf.collegeAvg);

  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg sm:p-space-xl shadow-sm flex flex-col gap-space-lg">
      {/* Header + legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <Icon name="trending_up" className="text-[20px] text-secondary" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
              Analytics &amp; Growth
            </span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">
            Academic Performance Trend
          </h3>
        </div>

        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-secondary" />
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Aarav's Score
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-outline" />
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              College Avg ({perf.collegeAvg}%)
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full bg-surface-container-low/60 rounded-xl p-space-md sm:p-space-lg">
        <div className="relative w-full h-56 sm:h-64">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 650 220"
          >
            <defs>
              <linearGradient id="scoreAreaGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#006a61" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#006a61" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Gridlines + y labels */}
            {GRID_VALUES.map((v) => {
              const y = yFor(v);
              return (
                <g key={v}>
                  <line
                    x1={GRID_LEFT}
                    x2={GRID_RIGHT}
                    y1={y}
                    y2={y}
                    stroke="#d3e4fe"
                    strokeDasharray="3 3"
                    strokeWidth="1"
                  />
                  <text
                    x="35"
                    y={y + 4}
                    textAnchor="end"
                    className="font-code-sm text-code-sm fill-[#76777d]"
                  >
                    {v}
                  </text>
                </g>
              );
            })}

            {/* College average */}
            <line
              x1={GRID_LEFT}
              x2={GRID_RIGHT}
              y1={avgY}
              y2={avgY}
              stroke="#76777d"
              strokeDasharray="6 4"
              strokeWidth="1.5"
            />
            <text
              x="635"
              y={avgY + 4}
              textAnchor="start"
              className="font-code-sm text-code-sm fill-[#76777d]"
            >
              {perf.collegeAvg}% Avg
            </text>

            {/* Area + line */}
            <polygon fill="url(#scoreAreaGradient)" points={areaPoints} />
            <polyline
              fill="none"
              points={linePoints}
              stroke="#006a61"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Points + value tags */}
            {pts.map((p, i) => {
              const last = i === pts.length - 1;
              const tagY = p.y - 22;
              return (
                <g key={p.label}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={last ? 6 : 5}
                    fill={last ? "#86f2e4" : "#f8f9ff"}
                    stroke="#006a61"
                    strokeWidth="3"
                  />
                  <rect
                    x={p.x - 16}
                    y={tagY}
                    width="32"
                    height="17"
                    rx="3"
                    fill={last ? "#006a61" : "#131b2e"}
                  />
                  <text
                    x={p.x}
                    y={tagY + 12}
                    textAnchor="middle"
                    fontSize="10"
                    className={`font-code-sm text-code-sm fill-white ${last ? "font-bold" : ""}`}
                  >
                    {p.score}%
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="grid grid-cols-5 text-center pt-space-xs font-label-sm text-label-sm text-on-surface-variant font-medium">
          {perf.points.map((p, i) => (
            <span
              key={p.label}
              className={`truncate ${i === perf.points.length - 1 ? "font-semibold text-secondary" : ""}`}
            >
              {p.short}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
        {perf.metrics.map((m) => (
          <div
            key={m.label}
            className="p-space-md rounded-lg bg-surface-container flex items-center gap-space-md"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                m.accent
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-surface-container-highest text-on-surface"
              }`}
            >
              <Icon name={m.icon} className="text-[22px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">{m.label}</span>
              <span
                className={`font-headline-md text-headline-md font-bold ${
                  m.accent ? "text-secondary" : "text-on-surface"
                }`}
              >
                {m.value}
                {m.suffix && (
                  <>
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                      {m.suffix}
                    </span>
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
