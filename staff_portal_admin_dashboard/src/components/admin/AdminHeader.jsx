import Icon from '../Icon.jsx';
import { adminMeta } from '../../data/admin.js';

// The two action buttons have no behaviour in the exported design yet.
export default function AdminHeader() {
  return (
    <div className="pt-space-lg pb-space-xl flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs max-w-3xl">
        <div className="flex items-center gap-space-sm mb-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            {adminMeta.authLevel}
          </span>
          <span className="text-outline-variant font-code-sm text-code-sm">/</span>
          <span className="font-code-sm text-code-sm text-on-surface-variant">{adminMeta.node}</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Institutional Administrative Console
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Real-time oversight of college examination operations, staff credentials, and department authorizations
          across Junior College streams.
        </p>
      </div>

      <div className="flex items-center gap-space-sm flex-wrap self-start lg:self-center">
        {/* TODO: wire up audit log export */}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-colors duration-150"
        >
          <Icon name="file_download" className="text-[18px]" />
          Export Audit Log
        </button>
        {/* TODO: open the add-staff flow */}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:opacity-90 transition-all duration-150 active:scale-[0.98]"
        >
          <Icon name="person_add" className="text-[18px]" />
          + Add New Staff
        </button>
      </div>
    </div>
  );
}
