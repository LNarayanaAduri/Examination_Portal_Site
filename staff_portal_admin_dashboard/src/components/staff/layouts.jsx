import Icon from '../Icon.jsx';
import StaffLayout from './StaffLayout.jsx';
import { ADMIN_HEADER_LOGO_URL } from '../../data/assets.js';
import { adminNav, adminUser, supervisorNav, supervisorUser } from '../../data/staff.js';

export function SupervisorLayout({ section = 'Supervisor Exam Management' }) {
  return (
    <StaffLayout
      nav={supervisorNav}
      user={supervisorUser}
      topBarLeading={
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant"
        >
          <span className="font-label-md text-label-md text-on-surface">Staff Portal</span>
          <Icon name="chevron_right" className="text-[14px]" />
          <span className="font-label-md text-label-md text-secondary font-semibold">{section}</span>
        </nav>
      }
    />
  );
}

export function AdminLayout() {
  return (
    <StaffLayout
      nav={adminNav}
      user={adminUser}
      topBarLeading={
        <div className="flex items-center gap-space-sm">
          <img src={ADMIN_HEADER_LOGO_URL} alt="Vikas Portal" className="h-7 w-auto object-contain" />
          <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <Icon name="chevron_right" className="text-[14px] text-outline-variant" />
            <span className="font-code-sm text-code-sm font-medium">JC-MAIN-2025</span>
          </div>
        </div>
      }
    />
  );
}
