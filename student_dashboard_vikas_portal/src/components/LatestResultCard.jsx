import Icon from "./Icon.jsx";
import { latestResult as r } from "../data.js";

export default function LatestResultCard() {
  return (
    <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
          Latest Publication
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-code-sm text-code-sm text-on-surface font-medium">
          {r.status}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm text-secondary font-semibold">{r.code}</span>
        <h3 className="font-headline-md text-headline-md text-on-surface">{r.title}</h3>
      </div>

      {/* Score banner */}
      <div className="p-space-lg bg-surface-container-low rounded-xl flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Earned Marks
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-timer-display text-timer-display text-on-surface font-bold tracking-tight">
              {r.marks}
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">/ {r.total}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="px-3 py-1 rounded-md bg-secondary text-on-secondary font-headline-sm text-headline-sm font-bold">
            {r.grade}
          </span>
          <span className="font-code-sm text-code-sm text-secondary font-semibold mt-1">
            {r.rankNote}
          </span>
        </div>
      </div>

      {/* Benchmarks */}
      <div className="grid grid-cols-2 gap-space-sm">
        <div className="p-space-sm bg-surface-container rounded-lg flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Percentile Score</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            {r.percentile}
          </span>
        </div>
        <div className="p-space-sm bg-surface-container rounded-lg flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Class Standing</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            {r.standing}
          </span>
        </div>
      </div>

      {/* Section breakdown */}
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
          Section Breakdown
        </span>
        {r.sections.map((s) => (
          <div
            key={s.name}
            className="flex flex-col gap-space-xs p-space-sm bg-surface-container-low rounded-lg"
          >
            <div className="flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface font-medium">{s.name}</span>
              <span className="font-code-sm text-code-sm text-on-surface font-bold">
                {s.got} / {s.max}
              </span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div
                className="bg-secondary h-full rounded-full"
                style={{ width: `${(s.got / s.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-space-xs p-space-sm rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface transition-colors flex items-center justify-center gap-space-sm font-label-md text-label-md font-semibold text-center"
      >
        <Icon name="file_download" className="text-[18px] text-secondary" />
        <span>Download Detailed Grade Card (PDF)</span>
      </a>
    </section>
  );
}
