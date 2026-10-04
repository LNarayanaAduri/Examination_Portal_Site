import Icon from '../Icon.jsx';

export default function AccessHeader({ onAuditLog, onRestoreAll }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md py-space-lg">
      <div>
        <div className="flex items-center gap-space-xs text-secondary font-label-sm uppercase tracking-wider mb-1">
          <Icon name="security" className="text-[16px]" />
          <span>Scoped Authorization Matrix</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Access Control</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Manage which tabs and grading modules each staff member can see across college examination terminals.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-space-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-code-sm text-code-sm text-on-surface-variant">
            Changes sync to LAN nodes in real-time
          </span>
        </div>
        <button
          type="button"
          onClick={onAuditLog}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all"
        >
          <Icon name="history" className="text-[18px] text-secondary" />
          <span>Audit Access Log</span>
        </button>
        <button
          type="button"
          onClick={onRestoreAll}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-surface-container-highest hover:text-on-surface transition-all"
        >
          <Icon name="restore" className="text-[18px]" />
          <span>Restore All Defaults</span>
        </button>
      </div>
    </div>
  );
}
