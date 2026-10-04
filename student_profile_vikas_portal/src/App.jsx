import { useState } from "react";
import Header from "./components/Header.jsx";
import Ticker from "./components/Ticker.jsx";
import WelcomeBanner from "./components/WelcomeBanner.jsx";
import UpcomingExamCard from "./components/UpcomingExamCard.jsx";
import PerformanceChart from "./components/PerformanceChart.jsx";
import LatestResultCard from "./components/LatestResultCard.jsx";
import NoticeBoard from "./components/NoticeBoard.jsx";
import Footer from "./components/Footer.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function DashboardPage({ onNavigate }) {
  return (
    <>
      <Header active="dashboard" onNavigate={onNavigate} />

      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]">
        <Ticker />

        <div className="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-xl">
          <WelcomeBanner />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <UpcomingExamCard />
              <PerformanceChart />
            </div>
            <aside className="lg:col-span-4 flex flex-col gap-space-lg">
              <LatestResultCard />
              <NoticeBoard />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

const PAGES = { dashboard: DashboardPage, profile: ProfilePage };

export default function App() {
  const [page, setPage] = useState("dashboard");
  const Page = PAGES[page];

  // Only pages that exist are navigable; other nav links are no-ops for now.
  const navigate = (key) => {
    if (PAGES[key]) {
      setPage(key);
      window.scrollTo({ top: 0 });
    }
  };

  return <Page onNavigate={navigate} />;
}
