import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader.jsx';
import AppFooter from './AppFooter.jsx';

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
