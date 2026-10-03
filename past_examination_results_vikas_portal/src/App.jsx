import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout.jsx';
import LiveExamPage from './pages/LiveExamPage.jsx';
import PastResultsPage from './pages/PastResultsPage.jsx';
import ComingSoonPage from './pages/ComingSoonPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/exam-schedule" replace />} />
        <Route path="/exam-schedule" element={<LiveExamPage />} />
        <Route path="/past-results" element={<PastResultsPage />} />
        {/* Convert the remaining screens one by one and replace these */}
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  );
}
