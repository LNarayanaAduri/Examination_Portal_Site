import { useState } from "react";
import { StudentHeader, AdvisoryBar, StudentFooter, AlertToast } from "./Chrome.jsx";
import { WelcomeBanner, NoticeBoard, NextSession, LatestResult } from "./Sections.jsx";
import { TrendSection, HelpBanner, HallTicketModal } from "./TrendAndExtras.jsx";

export default function StudentApp() {
  const [showToast, setShowToast] = useState(true);
  const [hallTicketOpen, setHallTicketOpen] = useState(false);
  const openHallTicket = () => setHallTicketOpen(true);

  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <StudentHeader />
      <AdvisoryBar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <WelcomeBanner onViewHallTicket={openHallTicket} />
        <NoticeBoard />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <NextSession onViewHallTicket={openHallTicket} />
          <LatestResult />
          <TrendSection />
        </div>
        <HelpBanner />
      </main>
      <StudentFooter />
      {showToast && <AlertToast onDismiss={() => setShowToast(false)} />}
      <HallTicketModal open={hallTicketOpen} onClose={() => setHallTicketOpen(false)} />
    </div>
  );
}
