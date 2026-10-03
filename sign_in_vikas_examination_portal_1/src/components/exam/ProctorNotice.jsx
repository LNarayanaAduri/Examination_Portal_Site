import Icon from '../Icon.jsx';
import { exam } from '../../data/exam.js';

export default function ProctorNotice() {
  return (
    <div className="w-full p-4 rounded-xl bg-surface-container-low flex items-start gap-3 text-on-surface-variant shadow-sm">
      <Icon name="verified_user" className="text-secondary text-[22px] shrink-0 mt-0.5" />
      <div className="flex-1 text-left">
        <span className="font-label-sm text-label-sm font-semibold text-on-surface block mb-0.5">
          Automated Integrity &amp; Proctor Engine Active
        </span>
        <p className="font-body-sm text-body-sm leading-relaxed">
          Window resizing, tab toggling, or secondary display events are actively monitored. Any
          unauthorized event will be logged and instantly flagged to Proctor ID:{' '}
          <span className="font-code-sm font-medium text-on-surface">{exam.proctorId}</span>.
        </p>
      </div>
      <div className="shrink-0 flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1 rounded-full text-secondary font-code-sm text-code-sm font-medium shadow-sm">
        <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
        <span>Feed Synchronized</span>
      </div>
    </div>
  );
}
