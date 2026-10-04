import Icon from "../Icon.jsx";
import { metrics } from "../../profileData.js";

export default function MetricStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              {m.label}
            </span>
            <Icon name={m.icon} className="text-secondary text-xl" />
          </div>

          {m.headline ? (
            <span className="font-headline-md text-headline-md font-bold text-secondary">
              {m.headline}
            </span>
          ) : m.mono ? (
            <span className="font-code-sm text-headline-sm font-bold font-mono text-on-surface">
              {m.mono}
            </span>
          ) : (
            <div className="flex items-baseline gap-1.5">
              <span className="font-timer-display text-timer-display font-bold text-on-surface">
                {m.value}
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                {m.valueSuffix}
              </span>
            </div>
          )}

          <div
            className={`mt-2 flex items-center gap-1 font-label-sm text-label-sm ${
              m.noteAccent ? "text-secondary font-semibold" : "text-on-surface-variant"
            }`}
          >
            {m.noteIcon && <Icon name={m.noteIcon} className="text-sm" />}
            {m.noteDot && <span className="w-1.5 h-1.5 rounded-full bg-secondary" />}
            <span>{m.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
