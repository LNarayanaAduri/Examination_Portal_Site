import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout.jsx';
import LiveExamPage from './pages/LiveExamPage.jsx';
import PastResultsPage from './pages/PastResultsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import InstitutionalLoginPage from './pages/InstitutionalLoginPage.jsx';
import ComingSoonPage from './pages/ComingSoonPage.jsx';

export default function App() {
  return (
    <Routes>
      {/* Sign-in has no header or footer */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login-institutional" element={<InstitutionalLoginPage />} />
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
