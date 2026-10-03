import Icon from '../Icon.jsx';
import { helpdesk } from '../../data/login.js';

export default function HelpdeskFooter() {
  return (
    <div className="pt-6 mt-6 bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-surface-container flex items-center justify-center text-on-surface">
          <Icon name="support_agent" className="text-base" />
        </div>
        <div>
          <p className="font-label-sm text-label-sm font-semibold text-on-surface">{helpdesk.title}</p>
          <p className="font-code-sm text-code-sm text-on-surface-variant">{helpdesk.contact}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-label-sm text-label-sm text-outline">{helpdesk.governance}</p>
        <p className="font-label-sm text-label-sm text-secondary font-medium">{helpdesk.logging}</p>
      </div>
    </div>
  );
}
