import Icon from '../Icon.jsx';
import { notice } from '../../data/login.js';

export default function ExamNotice({ bordered = false }) {
  return (
    <div className={`mt-6 p-4 rounded-xl bg-surface-container-low flex items-start gap-3 relative overflow-hidden ${
        bordered ? 'border border-border-subtle' : ''
      }`}>
      <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex-shrink-0 flex items-center justify-center mt-0.5">
        <Icon name="campaign" className="text-base" />
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-label-md text-label-md text-on-surface font-bold">{notice.title}</span>
          <span className="font-code-sm text-code-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold">
            {notice.time}
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{notice.body}</p>
      </div>
    </div>
  );
}
