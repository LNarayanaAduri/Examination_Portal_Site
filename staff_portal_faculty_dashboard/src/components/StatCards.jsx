import Icon from "./Icon.jsx";

export default function StatCards({ stats }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
      {/* Highest */}
      <div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-secondary-container/20 pointer-events-none" />
        <div>
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Highest Score</span>
            <span className="w-8 h-8 rounded-lg bg-secondary-container/50 text-secondary flex items-center justify-center">
              <Icon name="emoji_events" size={18} />
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-space-sm">
            <span className="font-timer-display text-display-lg text-on-surface">{stats.highest}</span>
            <span className="font-label-md text-label-md text-on-surface-variant">/ 100</span>
          </div>
        </div>
        <div className="pt-space-md mt-space-md flex flex-col gap-1 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface truncate">Aarav Sharma</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">Class 12-A</span>
          </div>
          <div className="flex items-center gap-1.5 text-secondary">
            <Icon name="arrow_upward" size={16} />
            <span className="font-code-sm text-code-sm font-semibold">+4 vs last exam benchmark</span>
          </div>
        </div>
      </div>

      {/* Lowest */}
      <div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-error-container/20 pointer-events-none" />
        <div>
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Lowest Score</span>
            <span className="w-8 h-8 rounded-lg bg-error-container text-error flex items-center justify-center">
              <Icon name="warning" size={18} />
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-space-sm">
            <span className="font-timer-display text-display-lg text-on-surface">{stats.lowest}</span>
            <span className="font-label-md text-label-md text-on-surface-variant">/ 100</span>
          </div>
        </div>
        <div className="pt-space-md mt-space-md flex flex-col gap-1 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-error flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-error" />
              Needs Remediation
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">Threshold: 50%</span>
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <Icon name="group_remove" size={16} />
            <span className="font-code-sm text-code-sm">3 students below 50% passing threshold</span>
          </div>
        </div>
      </div>

      {/* Average */}
      <div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-secondary-container/20 pointer-events-none" />
        <div>
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Class Section Average</span>
            <span className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center">
              <Icon name="equalizer" size={18} />
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-space-sm">
            <span className="font-timer-display text-display-lg text-secondary">{stats.avg}</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">cohort mean</span>
          </div>
        </div>
        <div className="pt-space-md mt-space-md flex flex-col gap-1 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
          <div className="flex items-center justify-between">
            <span className="font-code-sm text-code-sm text-on-surface-variant">College Grade Avg: 74.2%</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">38 Enrolled</span>
          </div>
          <div className="flex items-center gap-1.5 text-secondary">
            <Icon name="trending_up" size={16} />
            <span className="font-code-sm text-code-sm font-semibold">+5.2% Outperforming</span>
          </div>
        </div>
      </div>
    </section>
  );
}
