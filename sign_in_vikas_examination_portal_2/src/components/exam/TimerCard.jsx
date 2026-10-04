import Icon from '../Icon.jsx';
import { exam } from '../../data/exam.js';
import { formatTime } from '../../utils/time.js';

export default function TimerCard({ remaining }) {
  const low = remaining < exam.lowTimeThresholdSeconds;
  const percent = Math.max(0, Math.min(100, (remaining / exam.durationSeconds) * 100));

  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3.5 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="schedule" className="text-[18px] text-secondary" />
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Time Remaining
          </span>
        </div>
        <div
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-medium ${
            low ? 'bg-error-container text-on-error-container' : 'bg-secondary-container/30 text-secondary'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${low ? 'bg-error' : 'bg-secondary'}`} />
          <span>{low ? 'Low Time' : 'Normal Pace'}</span>
        </div>
      </div>

      <div className="flex items-baseline justify-between pt-1">
        <div className="flex items-baseline gap-2">
          <span
            role="timer"
            className={`font-timer-display text-[32px] leading-tight font-bold tracking-tight ${
              low ? 'text-error' : 'text-on-surface'
            }`}
          >
            {formatTime(remaining)}
          </span>
          <span className="font-code-sm text-code-sm text-on-surface-variant font-medium">
            / {formatTime(exam.durationSeconds)}
          </span>
        </div>
        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
          {exam.code}
        </span>
      </div>

      <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${low ? 'bg-error' : 'bg-secondary'}`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-on-surface-variant pt-0.5">
        <div className="flex items-center gap-1.5">
          <Icon name="lock_clock" className="text-[16px] text-secondary" />
          <span className="font-body-sm text-body-sm">Auto-submits when 00:00:00</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
          <span className="font-code-sm text-code-sm text-secondary font-medium">Online &amp; Syncing</span>
        </div>
      </div>
    </div>
  );
}
