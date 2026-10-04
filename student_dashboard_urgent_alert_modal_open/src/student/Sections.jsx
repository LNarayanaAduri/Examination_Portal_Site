import { useEffect, useState } from "react";
import Icon from "../components/Icon.jsx";
import { LATEST_RESULT, NEXT_EXAM, NOTICES, STUDENT, UPCOMING } from "./data.js";

export function WelcomeBanner({ onViewHallTicket }) {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-5 sm:p-6 border border-surface-container-high shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-low text-secondary font-code-sm text-xs font-medium border border-secondary-container">
          <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
          <span>{STUDENT.session}</span>
        </div>
        <h2 className="text-on-surface text-2xl sm:text-3xl font-extrabold font-headline-lg tracking-tight">
          Welcome back, {STUDENT.name}!
        </h2>
        <p className="text-on-surface-variant text-sm font-body-md flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-medium text-on-surface">{STUDENT.className}</span>
          <span>•</span>
          <span className="font-code-sm text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface">Roll: {STUDENT.roll}</span>
          <span>•</span>
          <span>Enrollment: {STUDENT.enrollment}</span>
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onViewHallTicket}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors text-sm font-semibold border border-surface-container-highest"
        >
          <Icon name="badge" size={20} />
          <span>View Hall Ticket</span>
        </button>
        <button
          onClick={() => alert("Downloading Admit Slip (PDF)...")}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-secondary text-on-secondary hover:opacity-95 transition-opacity text-sm font-semibold shadow-sm"
        >
          <Icon name="download" size={20} />
          <span>Admit Slip (PDF)</span>
        </button>
      </div>
    </section>
  );
}

export function NoticeBoard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {NOTICES.map((n) => (
        <div
          key={n.id}
          className={`p-4 rounded-xl bg-surface-container-lowest border-l-4 ${n.accent} border border-surface-container-high shadow-sm flex items-start gap-3.5`}
        >
          <div className={`p-2 rounded-lg bg-surface-container ${n.iconClass} shrink-0`}>
            <Icon name={n.icon} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${n.labelClass}`}>{n.label}</span>
              <span className="text-[11px] text-on-surface-variant font-code-sm">{n.meta}</span>
            </div>
            <p className="text-sm font-semibold text-on-surface mt-0.5">{n.title}</p>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{n.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

// Counts down from NEXT_EXAM.startsInMinutes, measured from when the page loaded
function useMinutesLeft(startMinutes) {
  const [target] = useState(() => Date.now() + startMinutes * 60_000);
  const calc = () => Math.max(0, Math.ceil((target - Date.now()) / 60_000));
  const [left, setLeft] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setLeft(calc()), 15_000);
    return () => clearInterval(id);
  }, []);
  return left;
}

function startsInLabel(m) {
  if (m <= 0) return "Starting now";
  if (m === 1) return "Starts in 1 minute";
  if (m < 60) return `Starts in ${m} minutes`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return `Starts in ${h}h${r ? ` ${r}m` : ""}`;
}

export function NextSession({ onViewHallTicket }) {
  const minutes = useMinutesLeft(NEXT_EXAM.startsInMinutes);
  return (
    <section className="lg:col-span-7 flex flex-col gap-4">
      <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-secondary-container to-surface-variant" />
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <Icon name="schedule" size={16} />
              Next Active Session
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span>{startsInLabel(minutes)}</span>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-headline-md text-on-surface leading-tight">{NEXT_EXAM.title}</h3>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container flex items-center gap-3">
              <Icon name="calendar_today" className="text-secondary" />
              <div>
                <span className="text-on-surface-variant block font-label-sm">Examination Date</span>
                <span className="text-on-surface font-semibold text-sm">{NEXT_EXAM.date}</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container flex items-center gap-3">
              <Icon name="timelapse" className="text-secondary" />
              <div>
                <span className="text-on-surface-variant block font-label-sm">Time Window</span>
                <span className="text-on-surface font-semibold text-sm">{NEXT_EXAM.window}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3.5 rounded-lg bg-surface-container border border-surface-container-highest">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-bold text-on-surface flex items-center gap-1.5">
                <Icon name="menu_book" size={16} className="text-on-surface-variant" />
                Syllabus Summary
              </span>
              <span className="text-on-surface-variant font-code-sm">{NEXT_EXAM.hall}</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">{NEXT_EXAM.syllabus}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-surface-container-high flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={onViewHallTicket}
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-primary text-on-primary hover:bg-neutral-800 transition text-sm font-semibold shadow-sm"
          >
            <Icon name="description" size={16} />
            <span>View Exam Instructions &amp; Hall Ticket</span>
          </button>
          <span className="text-xs text-on-surface-variant text-center sm:text-right font-code-sm">
            Invigilator: {NEXT_EXAM.invigilator}
          </span>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-5 shadow-sm space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
          <Icon name="event_upcoming" size={16} />
          Upcoming Schedule in Current Cycle
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {UPCOMING.map((u) => (
            <div key={u.title} className="p-3.5 rounded-lg border border-surface-container-high bg-surface flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      u.highlight ? "text-secondary" : "text-on-surface-variant"
                    }`}
                  >
                    {u.kind}
                  </span>
                  <span className="text-xs font-code-sm text-on-surface-variant">{u.date}</span>
                </div>
                <p className="text-sm font-bold text-on-surface mt-1">{u.title}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{u.topics}</p>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-on-surface-variant pt-2 border-t border-surface-container">
                <span>{u.time}</span>
                <span className="text-on-surface font-medium">{u.marks}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LatestResult() {
  const r = LATEST_RESULT;
  return (
    <section className="lg:col-span-5 flex flex-col gap-4">
      <div className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-6 shadow-sm flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <Icon name="verified" size={16} />
              Latest Result Published
            </span>
            <span className="text-xs font-code-sm bg-surface-container-high px-2 py-0.5 rounded text-on-surface">Verified Record</span>
          </div>
          <h3 className="text-lg font-bold font-headline-md text-on-surface leading-snug">{r.title}</h3>
          <p className="text-xs text-on-surface-variant mt-0.5">{r.completed}</p>

          <div className="my-4 p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-center justify-between">
            <div>
              <span className="text-xs text-on-surface-variant font-label-sm block">Awarded Score</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-extrabold font-headline-lg text-on-surface tracking-tight">{r.score}</span>
                <span className="text-base text-on-surface-variant font-medium">/ {r.outOf}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 rounded bg-secondary text-on-secondary font-bold text-sm">Grade {r.grade}</span>
              <p className="text-xs font-medium text-secondary mt-1">{r.standing}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center mb-4">
            <div className="p-2.5 rounded-lg bg-surface border border-surface-container-high">
              <span className="text-xs text-on-surface-variant block">Percentile</span>
              <span className="text-lg font-bold font-headline-sm text-on-surface">{r.percentile}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-surface border border-surface-container-high">
              <span className="text-xs text-on-surface-variant block">Class Rank</span>
              <span className="text-lg font-bold font-headline-sm text-secondary">{r.rank}</span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            <span className="font-bold text-on-surface block uppercase tracking-wider text-[11px]">Sectional Performance</span>
            {r.sections.map((s) => {
              const pct = (s.got / s.max) * 100;
              const full = pct === 100;
              return (
                <div key={s.name}>
                  <div className="flex justify-between font-medium text-on-surface mb-1">
                    <span>{s.name}</span>
                    <span className={`font-code-sm font-bold ${full ? "text-secondary" : "text-on-surface"}`}>
                      {s.got} / {s.max} ({Number.isInteger(pct) ? pct : pct.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div
                      className={`${full ? "bg-secondary" : "bg-secondary-fixed-dim"} h-full rounded-full`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-surface-container-high">
          <a
            href="#/student"
            onClick={(e) => {
              e.preventDefault();
              alert("Downloading Detailed Grade Card (PDF)...");
            }}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs transition border border-surface-container-highest"
          >
            <Icon name="picture_as_pdf" size={16} className="text-secondary" />
            <span>Download Detailed Grade Card (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
