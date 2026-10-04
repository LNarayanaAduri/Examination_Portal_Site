import Icon from '../Icon.jsx';
import PermissionToggle from './PermissionToggle.jsx';
import { permissionTabs } from '../../data/accessControl.js';

export default function FacultyRow({ member, permissions, customized, onToggle, onReset }) {
  return (
    <tr className="hover:bg-surface-container-low/60 transition-colors">
      <td className="py-4 px-space-lg sticky left-0 bg-surface-container-lowest z-10">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-label-md flex-shrink-0 ${
              customized
                ? 'bg-secondary-container text-on-secondary-container'
                : 'bg-surface-container text-on-surface'
            }`}
          >
            {member.initials}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm text-on-surface truncate">{member.name}</span>
              {customized && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-code-sm bg-secondary-container/60 text-secondary">
                  OVERRIDE
                </span>
              )}
            </div>
            <span className="text-body-sm text-on-surface-variant truncate">
              Dept. of {member.department} • {member.id}
            </span>
            <span className="text-body-sm text-on-surface-variant/80 text-[12px] truncate">{member.email}</span>
          </div>
        </div>
      </td>

      {permissionTabs.map((tab) => (
        <td key={tab.key} className="py-4 px-4 text-center">
          <PermissionToggle
            label={`${tab.label} access for ${member.name}`}
            checked={permissions[tab.key]}
            isDefault={member.defaults[tab.key]}
            onChange={(checked) => onToggle(member, tab, checked)}
          />
        </td>
      ))}

      <td className="py-4 px-space-lg text-right">
        {customized ? (
          <button
            type="button"
            onClick={() => onReset(member)}
            title="Revert to Faculty baseline defaults"
            className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:text-on-surface transition-colors"
          >
            <Icon name="undo" className="text-[16px]" />
            <span>Reset</span>
          </button>
        ) : (
          <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant/60">
            <Icon name="check_circle" className="text-[15px]" />
            <span>Default</span>
          </span>
        )}
      </td>
    </tr>
  );
}
