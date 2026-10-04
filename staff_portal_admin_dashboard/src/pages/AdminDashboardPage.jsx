import AdminHeader from '../components/admin/AdminHeader.jsx';
import StatCards from '../components/admin/StatCards.jsx';
import PortalCards from '../components/admin/PortalCards.jsx';
import StaffDirectory from '../components/admin/StaffDirectory.jsx';
import InvitationsBanner from '../components/admin/InvitationsBanner.jsx';
import RevokeStaffModal from '../components/admin/RevokeStaffModal.jsx';
import { useStaffDirectory } from '../hooks/useStaffDirectory.js';
import { portalCards, staffMembers, statCards } from '../data/admin.js';

export default function AdminDashboardPage() {
  const directory = useStaffDirectory(staffMembers);

  return (
    <div className="flex flex-col w-full pb-space-2xl">
      <AdminHeader />
      <StatCards cards={statCards} />
      <PortalCards cards={portalCards} />
      <StaffDirectory directory={directory} />
      <InvitationsBanner />
      <RevokeStaffModal
        member={directory.pendingRemoval}
        onCancel={directory.cancelRemoval}
        onConfirm={directory.confirmRemoval}
      />
    </div>
  );
}
