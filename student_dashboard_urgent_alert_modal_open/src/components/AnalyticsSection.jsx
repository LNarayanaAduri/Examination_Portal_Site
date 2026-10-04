import Icon from "./Icon.jsx";
import { SECTION_BARS, DISTRIBUTION } from "../data.js";

const Y_TICKS = [
  { y: 20, label: "100%" },
  { y: 75, label: "75%" },
  { y: 130, label: "50%" },
  { y: 185, label: "25%" },
];

function SectionChart() {
  return (
    <svg
      aria-label="Section Average Comparison Chart"
      className="w-full h-64 overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 760 250"
    >
      {Y_TICKS.map((t) => (
        <g key={t.label}>
          <line stroke="#eff4ff" strokeWidth="1.5" x1="50" x2="740" y1={t.y} y2={t.y} />
          <text fill="#76777d" fontFamily="JetBrains Mono" fontSize="11" textAnchor="end" x="40" y={t.y + 4}>
            {t.label}
          </text>
        </g>
      ))}
      <line stroke="#dce9ff" strokeWidth="2" x1="50" x2="740" y1="220" y2="220" />
      <text fill="#76777d" fontFamily="JetBrains Mono" fontSize="11" textAnchor="end" x="40" y="224">0%</text>

      {SECTION_BARS.map((bar, i) => {
        const x = 90 + i * 170;
        const h = Math.round(bar.value * 1.952);
        const y = 220 - h;
        return (
          <g key={bar.label} className="transition-all duration-300 hover:opacity-90 cursor-pointer">
            <rect fill={bar.fill} height={h} rx="6" width="95" x={x} y={y} />
            {bar.active && <rect fill="#86f2e4" height="6" opacity="0.6" rx="3" width="89" x={x + 3} y={y + 3} />}
            <text
              fill={bar.active ? "#006a61" : "#45464d"}
              fontFamily="JetBrains Mono" fontSize="13" fontWeight={bar.active ? 700 : 600}
              textAnchor="middle" x={x + 47} y={y - 13}
            >
              {bar.value}%
            </text>
            <text
              fill={bar.active ? "#0b1c30" : "#45464d"}
              fontFamily="Inter" fontSize="12" fontWeight={bar.active ? 600 : 400}
              textAnchor="middle" x={x + 47} y="238"
            >
              {bar.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ComparisonCard() {
  return (
    <div className="lg:col-span-8 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Section-wise Average Score Comparison</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Mathematics Mid-Term Benchmark vs. Junior College cohort standard
            </p>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">Current Class (12-A)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-surface-variant" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">Other Sections</span>
            </div>
          </div>
        </div>

        <div className="relative w-full pt-4 pb-2">
          <div className="absolute left-16 right-4 top-[35%] flex items-center pointer-events-none z-10">
            <div className="w-full border-t-2 border-dashed border-outline-variant/60" />
            <span className="absolute right-0 -top-3.5 bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-code-sm text-on-surface font-semibold tracking-wide">
              College Benchmark (70%)
            </span>
          </div>
          <SectionChart />
        </div>
      </div>

      <div className="pt-space-md mt-space-sm flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-[11px] font-semibold uppercase">
            Active Section
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Class 12-A leads 3 other parallel cohorts by +4.6% to +10.9%.
          </span>
        </div>
        <button className="font-label-sm text-label-sm text-secondary hover:text-on-surface font-semibold flex items-center gap-1 transition-colors">
          View Cross-Sectional Analysis
          <Icon name="arrow_forward" size={16} />
        </button>
      </div>
    </div>
  );
}

function DistributionCard() {
  return (
    <div className="lg:col-span-4 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-space-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cohort Distribution</span>
          <Icon name="donut_large" className="text-on-surface-variant" />
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Curriculum Mastery Breakdown</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Based on Math Mid-Term performance</p>

        <div className="mt-space-md flex flex-col gap-space-sm">
          <div className="h-3 w-full rounded-full bg-surface-container-high overflow-hidden flex">
            {DISTRIBUTION.map((d) => (
              <div key={d.key} className={`${d.bar} h-full`} style={{ width: `${d.pct}%` }} title={`${d.label}: ${d.pct}%`} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {DISTRIBUTION.map((d) => (
              <div
                key={d.key}
                className={`p-2.5 rounded-lg flex flex-col ${d.danger ? "bg-error-container/40" : "bg-surface-container-low"}`}
              >
                <span
                  className={`font-body-sm text-body-sm flex items-center gap-1.5 ${d.danger ? "text-error" : "text-on-surface-variant"}`}
                >
                  <span className={`w-2 h-2 rounded-full ${d.dot}`} />
                  {d.label}
                </span>
                <span className={`font-timer-display text-headline-sm mt-1 ${d.danger ? "text-error" : "text-on-surface"}`}>
                  {d.count} Students
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-space-md mt-space-md rounded-lg bg-surface-container-low p-space-sm flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center flex-shrink-0 text-secondary">
          <Icon name="assignment_late" />
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-label-md text-label-md text-on-surface truncate">Remedial Session Scheduled</span>
          <span className="font-code-sm text-code-sm text-on-surface-variant">Thu, 3:30 PM • Room 204</span>
        </div>
        <button className="h-8 px-2.5 rounded bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-sm text-[11px] font-semibold transition-colors">
          Manage
        </button>
      </div>
    </div>
  );
}

export default function AnalyticsSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
      <ComparisonCard />
      <DistributionCard />
    </section>
  );
}
