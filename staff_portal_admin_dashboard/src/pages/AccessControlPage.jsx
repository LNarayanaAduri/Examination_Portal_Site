import { useMemo, useState } from 'react';
import AccessHeader from '../components/access/AccessHeader.jsx';
import AccessToolbar from '../components/access/AccessToolbar.jsx';
import StaffMatrix from '../components/access/StaffMatrix.jsx';
import BaselineTable from '../components/access/BaselineTable.jsx';
import PermissionToast from '../components/staff/PermissionToast.jsx';
import { usePermissions } from '../hooks/usePermissions.js';
import { useToast } from '../hooks/useToast.js';
import { faculty } from '../data/accessControl.js';

export default function AccessControlPage() {
  const { perms, isCustomized, setPermission, resetMember, resetAll, overrideCount } = usePermissions(faculty);
  const { toast, show, hide } = useToast(4000);

  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('all');
  const [overridesOnly, setOverridesOnly] = useState(false);

  const departments = useMemo(() => [...new Set(faculty.map((m) => m.department))], []);

  const visibleMembers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faculty.filter((m) => {
      const matchesSearch =
        q === '' ||
        m.name.toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q) ||
        m.department.toLowerCase().includes(q);
      const matchesDept = department === 'all' || m.department === department;
      const matchesOverrides = !overridesOnly || isCustomized(m);
      return matchesSearch && matchesDept && matchesOverrides;
    });
  }, [query, department, overridesOnly, isCustomized]);

  const handleToggle = (member, tab, checked) => {
    // TODO: persist the change through your API so LAN nodes pick it up
    setPermission(member.id, tab.key, checked);
    show(`✓ Permission updated: ${member.name} — '${tab.label}' set to ${checked ? 'Visible' : 'Hidden'}`);
  };

  const handleResetMember = (member) => {
    resetMember(member.id);
    show(`Reset permissions for ${member.name} to default institutional baseline`);
  };

  const handleRestoreAll = () => {
    resetAll();
    show('All faculty permissions restored to baseline role defaults');
  };

  const clearFilters = () => {
    setQuery('');
    setDepartment('all');
    setOverridesOnly(false);
  };

  return (
    <div className="flex flex-col w-full pb-space-2xl">
      <AccessHeader
        onAuditLog={() => show('Access log export: Last authorization audit timestamped 14 mins ago')}
        onRestoreAll={handleRestoreAll}
      />
      <AccessToolbar
        query={query}
        onQueryChange={setQuery}
        departments={departments}
        department={department}
        onDepartmentChange={setDepartment}
        overridesOnly={overridesOnly}
        onToggleOverridesOnly={() => setOverridesOnly((v) => !v)}
        overrideCount={overrideCount}
      />
      <StaffMatrix
        members={visibleMembers}
        perms={perms}
        isCustomized={isCustomized}
        onToggle={handleToggle}
        onReset={handleResetMember}
        onClearFilters={clearFilters}
      />
      <BaselineTable />
      <PermissionToast visible={toast.visible} message={toast.message} onClose={hide} />
    </div>
  );
}
