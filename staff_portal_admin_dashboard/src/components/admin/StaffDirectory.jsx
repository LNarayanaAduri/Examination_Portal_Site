import Icon from '../Icon.jsx';
import { roleOptions, roleStyles } from '../../data/admin.js';

function StaffRow({ member, removing, onRevoke }) {
  const style = roleStyles[member.role];
  return (
    <tr
      className={`hover:bg-surface-bright transition-all duration-300 ${
        removing ? 'opacity-0 translate-x-5' : ''
      }`}
    >
      <td className="py-4 px-space-lg">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center font-label-md text-label-md font-bold flex-shrink-0 ${style.avatar}`}
          >
            {member.initials}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-md text-label-md font-semibold text-on-surface truncate">{member.name}</span>
            <div className="flex items-center gap-2">
              <span className="font-body-sm text-body-sm text-outline truncate">{member.email}</span>
              <span className="text-outline-variant">•</span>
              <span className="font-code-sm text-code-sm text-on-surface-variant font-medium">{member.dept}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 px-space-md">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold tracking-wide ${style.chip}`}
        >
          {style.label}
        </span>
      </td>
      <td className="py-4 px-space-md">
        <span
          className={`font-code-sm text-code-sm ${member.live ? 'text-secondary font-semibold' : 'text-on-surface'}`}
        >
          {member.lastActive}
        </span>
      </td>
      <td className="py-4 px-space-md">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-medium">
          <span className={`w-1.5 h-1.5 rounded-full bg-secondary ${member.live ? 'animate-pulse' : ''}`} />
          Verified Active
        </div>
      </td>
      <td className="py-4 px-space-lg text-right">
        <div className="inline-flex items-center gap-1">
          {/* TODO: open the edit-role flow */}
          <button
            type="button"
            aria-label={`Edit role for ${member.name}`}
            className="px-2.5 py-1 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors"
          >
            Edit Role
          </button>
          <button
            type="button"
            onClick={() => onRevoke(member)}
            title="Revoke Staff Access"
            aria-label={`Revoke access for ${member.name}`}
            className="p-1.5 rounded-md text-outline hover:text-error hover:bg-error-container/20 transition-colors"
          >
            <Icon name="delete" className="text-[18px]" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function StaffDirectory({ directory }) {
  const { visible, query, setQuery, role, setRole, removingId, requestRemoval } = directory;

  return (
    <div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm mb-space-2xl overflow-hidden">
      <div className="p-space-lg border-b border-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Staff &amp; Roles Directory</h2>
            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-code-sm text-code-sm font-semibold">
              {visible.length} Records
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Authorizations, dual-authentication state, and stream privileges for junior college staff.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="relative min-w-[240px]">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline" />
            <label htmlFor="staff-search" className="sr-only">
              Search staff
            </label>
            <input
              id="staff-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search staff by name or email..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-surface font-body-sm text-body-sm text-on-surface placeholder:text-outline border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="relative">
            <label htmlFor="role-filter" className="sr-only">
              Filter by role
            </label>
            <select
              id="role-filter"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 rounded-lg bg-surface font-label-md text-label-md text-on-surface border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Icon
              name="expand_more"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[16px] text-outline pointer-events-none"
            />
          </div>

          {/* TODO: open the add-staff flow */}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-neutral-800 transition-colors"
          >
            <Icon name="add" className="text-[18px]" />
            Add Staff Member
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">Staff members and their roles</caption>
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <th scope="col" className="py-3 px-space-lg font-semibold">Staff Member</th>
              <th scope="col" className="py-3 px-space-md font-semibold">Assigned Role</th>
              <th scope="col" className="py-3 px-space-md font-semibold">Last Active</th>
              <th scope="col" className="py-3 px-space-md font-semibold">2FA &amp; Status</th>
              <th scope="col" className="py-3 px-space-lg text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {visible.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-10 text-center font-body-sm text-body-sm text-on-surface-variant">
                  No staff members match your search.
                </td>
              </tr>
            ) : (
              visible.map((member) => (
                <StaffRow
                  key={member.id}
                  member={member}
                  removing={removingId === member.id}
                  onRevoke={requestRemoval}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="py-3 px-space-lg bg-surface-container-low flex items-center justify-between">
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Showing active directory members for Academic Year 2024-2025
        </span>
        <span className="font-code-sm text-code-sm text-outline">ENCRYPTION: AES-256 GCM</span>
      </div>
    </div>
  );
}
