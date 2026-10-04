import Icon from '../Icon.jsx';
import FacultyRow from './FacultyRow.jsx';
import { permissionTabs } from '../../data/accessControl.js';

export default function StaffMatrix({ members, perms, isCustomized, onToggle, onReset, onClearFilters }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col mb-space-2xl">
      <div className="px-space-lg py-space-md bg-surface-container-lowest flex items-center justify-between border-b border-surface-container">
        <div className="flex items-center gap-space-sm">
          <span className="font-headline-sm text-headline-sm text-on-surface">Staff Authorization Matrix</span>
          <span className="font-code-sm text-code-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
            Showing {members.length} Faculty Members
          </span>
        </div>
        <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
            <span>Tab Visible</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
            <span>Restricted (Hidden)</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">Tab permissions for each faculty member</caption>
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <th scope="col" className="py-3.5 px-space-lg sticky left-0 bg-surface-container-low z-20 min-w-[280px]">
                Faculty Member
              </th>
              {permissionTabs.map((tab) => (
                <th key={tab.key} scope="col" className={`py-3.5 px-4 text-center ${tab.widthClass}`}>
                  <div className="flex items-center justify-center gap-1.5">
                    <Icon name={tab.icon} className="text-[18px] text-secondary" />
                    <span>{tab.label}</span>
                  </div>
                </th>
              ))}
              <th scope="col" className="py-3.5 px-space-lg text-right min-w-[140px]">
                State &amp; Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container font-body-md text-body-md">
            {members.map((member) => (
              <FacultyRow
                key={member.id}
                member={member}
                permissions={perms[member.id]}
                customized={isCustomized(member)}
                onToggle={onToggle}
                onReset={onReset}
              />
            ))}
          </tbody>
        </table>

        {members.length === 0 && (
          <div className="py-16 px-space-lg flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-3">
              <Icon name="person_search" className="text-[24px]" />
            </div>
            <p className="font-headline-sm text-headline-sm text-on-surface mb-1">
              No faculty found matching search
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-4">
              Try searching by full staff name, junior college staff ID, or department designation.
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors"
            >
              Clear Search Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
