import Icon from "../components/Icon.jsx";
import ProfileHeader from "../components/profile/ProfileHeader.jsx";
import ProfileFooter from "../components/profile/ProfileFooter.jsx";
import ProfileHero from "../components/profile/ProfileHero.jsx";
import MetricStrip from "../components/profile/MetricStrip.jsx";
import HallTicketCard from "../components/profile/HallTicketCard.jsx";
import CurriculumRoster from "../components/profile/CurriculumRoster.jsx";
import SecurityCard from "../components/profile/SecurityCard.jsx";
import StationCard from "../components/profile/StationCard.jsx";
import GuardianCard from "../components/profile/GuardianCard.jsx";
import { profile } from "../profileData.js";

export default function ProfilePage({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileHeader active="profile" onNavigate={onNavigate} />

      <main className="w-full pt-24 bg-surface flex-1">
        <div className="w-full px-gutter py-space-lg flex flex-col gap-space-lg max-w-7xl mx-auto">
          {/* Breadcrumb + session chips */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.("dashboard"); }} className="font-label-md text-label-md hover:text-on-surface transition-colors">
                Portal Home
              </a>
              <Icon name="chevron_right" className="text-sm" />
              <a href="#" className="font-label-md text-label-md hover:text-on-surface transition-colors">
                Academic Registry
              </a>
              <Icon name="chevron_right" className="text-sm" />
              <span className="font-label-md text-label-md text-secondary font-semibold">
                Candidate Record &amp; Verification
              </span>
            </nav>

            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Terminal Session Validated
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant font-mono bg-surface-container-high px-2.5 py-1 rounded-md">
                STATION: {profile.station}
              </span>
            </div>
          </div>

          <ProfileHero />
          <MetricStrip />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <HallTicketCard />
              <CurriculumRoster />
            </div>
            <aside className="lg:col-span-4 flex flex-col gap-space-lg">
              <SecurityCard />
              <StationCard />
              <GuardianCard />
            </aside>
          </div>
        </div>
      </main>

      <ProfileFooter />
    </div>
  );
}
