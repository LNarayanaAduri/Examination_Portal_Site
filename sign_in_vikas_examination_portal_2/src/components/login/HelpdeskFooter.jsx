import Icon from '../Icon.jsx';
import { helpdesk } from '../../data/login.js';

export default function HelpdeskFooter({ bordered = false }) {
  return (
    <div
      className={`pt-6 mt-6 bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-4 ${
        bordered ? 'border-t border-border-subtle' : ''
      }`}
    >
      <div className={`flex items-center ${bordered ? 'gap-2.5' : 'gap-2'}`}>
        <div
          className={`${
            bordered ? 'w-8 h-8' : 'w-7 h-7'
          } rounded-md bg-surface-container flex items-center justify-center text-on-surface`}
        >
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
