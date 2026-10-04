import Icon from '../Icon.jsx';
import { baselineColumns, baselineRoles, policyVersion } from '../../data/accessControl.js';

function AccessCell({ allowed }) {
  return (
    <td className={`py-3 px-3 text-center ${allowed ? 'text-secondary' : 'text-on-surface-variant/40'}`}>
      <Icon name={allowed ? 'check_circle' : 'remove'} className="text-[18px]" />
      <span className="sr-only">{allowed ? 'Allowed' : 'Not allowed'}</span>
    </td>
  );
}

export default function BaselineTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
        <div>
          <div className="flex items-center gap-2">
            <Icon name="policy" className="text-secondary text-[20px]" />
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Institutional Role Baseline Defaults
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Defines standard system navigation permissions for each staff tier. Only System Administrators can
            modify baseline policies.
          </p>
        </div>
        <span className="font-code-sm text-code-sm bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full w-max">
          {policyVersion}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <th scope="col" className="py-3 px-4 rounded-l-lg">Role Tier</th>
              {baselineColumns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={`py-3 px-3 text-center ${i === baselineColumns.length - 1 ? 'rounded-r-lg' : ''}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container font-body-md text-body-md">
            {baselineRoles.map((role) => (
              <tr
                key={role.id}
                className={`hover:bg-surface-container-low/40 transition-colors ${role.rowClass ?? ''}`}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${role.dotClass}`} />
                    {role.note ? (
                      <div className="flex flex-col">
                        <span className={`font-label-md text-label-md ${role.labelClass}`}>{role.label}</span>
                        <span className="text-[10px] text-on-surface-variant font-code-sm">{role.note}</span>
                      </div>
                    ) : (
                      <span className={`font-label-md text-label-md ${role.labelClass}`}>{role.label}</span>
                    )}
                  </div>
                </td>
                {role.access.map((allowed, i) => (
                  <AccessCell key={baselineColumns[i]} allowed={allowed} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
