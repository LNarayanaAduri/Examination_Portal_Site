import { Outlet } from 'react-router-dom';
import StaffSidebar from './StaffSidebar.jsx';
import StaffTopBar from './StaffTopBar.jsx';

// Shell shared by every staff screen (sidebar + top bar).
export default function StaffLayout({ section = 'Supervisor Exam Management' }) {
  return (
    <>
      <StaffSidebar />
      <div className="pl-72">
        <StaffTopBar section={section} />
        <main className="relative pt-16 w-full px-space-xl bg-surface min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
}
