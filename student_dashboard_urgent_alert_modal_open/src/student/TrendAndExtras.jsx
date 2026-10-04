import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { HALL_TICKET_RULES, NEXT_EXAM, STUDENT, SUMMARY_METRICS, TREND } from "./data.js";

// Chart geometry (same as the design): y = 20 + (100 - score) * 2
const yFor = (score) => 20 + (100 - score) * 2;
const GRID = [100, 80, 60, 40];

function TrendChart() {
  const pts = TREND.points.map((p) => ({ ...p, y: yFor(p.score) }));
  const line = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const first = pts[0];
  const last = pts[pts.length - 1];
  const area = `M ${first.x} ${first.y} ${pts.slice(1).map((p) => `L ${p.x} ${p.y}`).join(" ")} L ${last.x} 170 L ${first.x} 170 Z`;
  const benchY = yFor(TREND.benchmark);
  const [hover, setHover] = useState(null);

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="min-w-[620px] h-[220px] relative">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200">
          <defs>
            <linearGradient id="scoreAreaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#006a61" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#006a61" stopOpacity="0" />
            </linearGradient>
          </defs>

          {GRID.map((g) => (
            <g key={g}>
              <line stroke="#eff4ff" strokeWidth="1.5" x1="40" x2="680" y1={yFor(g)} y2={yFor(g)} />
              <text fill="#76777d" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="30" y={yFor(g) + 4}>
                {g}
              </text>
            </g>
          ))}

          <line stroke="#c6c6cd" strokeDasharray="4 4" strokeWidth="1.5" x1="40" x2="680" y1={benchY} y2={benchY} />
          <text fill="#76777d" fontFamily="JetBrains Mono" fontSize="10" x="685" y={benchY + 3}>
            Avg {TREND.benchmark}%
          </text>

          <path d={area} fill="url(#scoreAreaGradient)" />
          <polyline fill="none" points={line} stroke="#006a61" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />

          {pts.map((p, i) => {
            const isLast = i === pts.length - 1;
            const active = hover === i;
            return (
              <g key={p.label} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
                <circle cx={p.x} cy={p.y} r={isLast || active ? 6 : 5} fill="#006a61" stroke="#ffffff" strokeWidth={isLast ? 2.5 : 2} />
                <rect fill="#006a61" height="18" rx="4" width="30" x={p.x - 15} y={p.y - 24} />
                <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" textAnchor="middle" x={p.x} y={p.y - 12}>
                  {p.score}
                </text>
                <text
                  fill="#45464d" fontFamily="Inter" fontSize="11" fontWeight={isLast ? 700 : 500}
                  textAnchor="middle" x={p.x} y="185"
                >
                  {p.label}
                </text>
                {/* generous hit area */}
                <rect x={p.x - 40} y="0" width="80" height="195" fill="transparent" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export function TrendSection() {
  return (
    <section className="lg:col-span-12">
      <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Icon name="monitoring" className="text-secondary" />
              <h3 className="text-lg font-bold font-headline-md text-on-surface">Term Performance &amp; Consistency Trend</h3>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Historical examination progression compared against College Average Benchmark
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-on-surface">Student Score</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 border-t-2 border-dashed border-outline-variant" />
              <span className="text-on-surface-variant">College Benchmark ({TREND.benchmark}%)</span>
            </div>
          </div>
        </div>

        <TrendChart />

        <div className="mt-6 pt-5 border-t border-surface-container-high grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SUMMARY_METRICS.map((m) => (
            <div key={m.label} className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-container">
              <div className={`w-10 h-10 rounded-lg ${m.iconBox} flex items-center justify-center shrink-0`}>
                <Icon name={m.icon} />
              </div>
              <div>
                <span className="text-xs text-on-surface-variant font-label-sm block">{m.label}</span>
                <span className={`text-lg font-bold font-headline-md ${m.valueClass ?? "text-on-surface"}`}>
                  {m.value}
                  {m.suffix && <span className="text-xs font-normal text-secondary"> {m.suffix}</span>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HelpBanner() {
  return (
    <div className="rounded-xl border border-surface-container-high bg-surface-container-low p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
      <div className="flex items-center gap-2">
        <Icon name="help_center" className="text-secondary" />
        <span>Facing issue with desk allocation or hall ticket barcode? Contact Exam Superintendent Desk at Room 102.</span>
      </div>
      <div className="flex items-center gap-4 shrink-0 font-medium">
        <a className="hover:text-on-surface underline" href="#/student">Exam Grievance Form</a>
        <a className="hover:text-on-surface underline" href="tel:+912024419988">Helpline: +91 (020) 2441-9988</a>
      </div>
    </div>
  );
}

export function HallTicketModal({ open, onClose }) {
  if (!open) return null;
  const rows = [
    ["Candidate", STUDENT.name],
    ["Roll Number", STUDENT.roll],
    ["Enrollment", STUDENT.enrollment],
    ["Paper", NEXT_EXAM.title],
    ["Date", NEXT_EXAM.date],
    ["Time", NEXT_EXAM.window],
    ["Seating", NEXT_EXAM.hall],
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
              <Icon name="badge" />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Hall Ticket &amp; Instructions</h3>
              <span className="font-code-sm text-code-sm text-on-surface-variant">Term Finals • {STUDENT.roll}</span>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant">
            <Icon name="close" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <dl className="grid grid-cols-3 gap-y-2 text-xs">
            {rows.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-on-surface-variant">{k}</dt>
                <dd className="col-span-2 font-semibold text-on-surface">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="p-3.5 rounded-lg bg-surface-container border border-surface-container-highest">
            <span className="font-bold text-on-surface text-xs block mb-1.5">Exam Instructions</span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-on-surface-variant">
              {HALL_TICKET_RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4 bg-surface-container-low flex justify-end gap-2">
          <button onClick={onClose} className="h-10 px-4 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors">
            Close
          </button>
          <button
            onClick={() => alert("Downloading Admit Slip (PDF)...")}
            className="h-10 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2"
          >
            <Icon name="download" size={18} />
            Admit Slip (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
