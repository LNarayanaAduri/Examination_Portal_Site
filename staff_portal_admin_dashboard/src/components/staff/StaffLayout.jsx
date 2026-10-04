import { Outlet } from 'react-router-dom';
import StaffSidebar from './StaffSidebar.jsx';
import StaffTopBar from './StaffTopBar.jsx';

// Shell shared by every staff screen. Each screen group passes its own
// sidebar config and top bar content (see layouts.jsx).
export default function StaffLayout({ nav, user, topBarLeading }) {
  return (
    <>
      <StaffSidebar nav={nav} user={user} />
      <div className="pl-72">
        <StaffTopBar>{topBarLeading}</StaffTopBar>
        <main className="relative pt-16 w-full px-space-xl bg-surface min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
}
