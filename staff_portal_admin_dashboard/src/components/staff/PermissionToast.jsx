import Icon from '../Icon.jsx';

export default function PermissionToast({ visible, message, onClose }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 flex items-center gap-3 px-4 py-3 bg-surface-container-lowest text-on-surface rounded-xl shadow-xl max-w-md ${
        visible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-7 h-7 rounded-full bg-secondary-container text-secondary flex items-center justify-center flex-shrink-0">
        <Icon name="verified" className="text-[18px]" />
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <p className="font-label-md text-label-md text-on-surface truncate">{message}</p>
        <span className="font-code-sm text-[11px] text-secondary">Synced across active classroom LAN nodes</span>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <Icon name="close" className="text-[18px]" />
      </button>
    </div>
  );
}
