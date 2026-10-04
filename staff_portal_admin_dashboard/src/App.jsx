import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout.jsx';
import LiveExamPage from './pages/LiveExamPage.jsx';
import PastResultsPage from './pages/PastResultsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import InstitutionalLoginPage from './pages/InstitutionalLoginPage.jsx';
import AccessControlPage from './pages/AccessControlPage.jsx';
import { AdminLayout, SupervisorLayout } from './components/staff/layouts.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import ComingSoonPage from './pages/ComingSoonPage.jsx';

export default function App() {
  return (
    <Routes>
      {/* Sign-in has no header or footer */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login-institutional" element={<InstitutionalLoginPage />} />
      {/* Admin screens (own sidebar + top bar) */}
      <Route path="/staff/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
      {/* Supervisor screens */}
      <Route element={<SupervisorLayout section="Supervisor Exam Management" />}>
        <Route path="/staff/access-control" element={<AccessControlPage />} />
        <Route path="/staff/*" element={<ComingSoonPage />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/exam-schedule" element={<LiveExamPage />} />
        <Route path="/past-results" element={<PastResultsPage />} />
        {/* Convert the remaining screens one by one and replace these */}
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  );
}
