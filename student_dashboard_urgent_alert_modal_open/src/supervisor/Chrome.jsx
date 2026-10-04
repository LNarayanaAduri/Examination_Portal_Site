import Icon from "../components/Icon.jsx";
import { LOGO_SIDEBAR } from "../data.js";
import { NAV_ITEMS, SUPERVISOR, TICKER_ITEMS } from "./data.js";

export function SupSidebar({ active, onNavigate }) {
  return (
    <aside className="w-72 bg-surface-container-low border-r border-outline-variant flex flex-col justify-between shrink-0 sticky top-0 h-screen">
      <div className="flex flex-col">
        <div className="p-6 border-b border-outline-variant flex items-center gap-3">
          <img src={LOGO_SIDEBAR} alt="Vikas Examination Portal" className="h-9 w-auto object-contain" />
        </div>
        <div className="px-4 py-6">
          <p className="px-3 text-xs font-semibold uppercase tracking-wider text-outline mb-3">Supervisor Workspace</p>
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = item.id === active;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item);
                  }}
                  className={
                    isActive
                      ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-headline-sm text-sm border-l-4 border-primary"
                      : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-headline-sm text-sm transition-colors"
                  }
                >
                  <Icon name={item.icon} filled={isActive} className={isActive ? "text-primary" : "text-outline"} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-outline-variant bg-surface-container-lowest">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative size-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-on-surface border border-outline-variant">
            <span>{SUPERVISOR.initials}</span>
            <span className="absolute bottom-0 right-0 size-2.5 bg-secondary rounded-full ring-2 ring-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-on-surface truncate">{SUPERVISOR.name}</span>
            <span className="inline-block text-[11px] font-semibold text-secondary-container bg-primary-container px-1.5 py-0.5 rounded w-fit my-0.5">
              {SUPERVISOR.role}
            </span>
            <span className="text-[11px] text-outline truncate">{SUPERVISOR.email}</span>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg text-xs font-semibold transition-colors">
          <Icon name="logout" size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export function SupHeader() {
  return (
    <header className="h-16 px-8 border-b border-outline-variant bg-surface-container-lowest flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-outline font-medium">Staff Portal</span>
        <span className="text-outline">/</span>
        <span className="font-semibold text-on-surface">Supervisor Exam Management</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-secondary-fixed/30 border border-secondary/30 rounded-full text-xs font-semibold text-secondary">
          <span className="size-2 rounded-full bg-secondary animate-pulse" />
          <span>Term II Moderation Active</span>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-semibold hover:bg-primary-container transition-colors shadow-sm"
        >
          <Icon name="print" size={16} />
          <span>Print Consolidated Ledger</span>
        </button>
      </div>
    </header>
  );
}

function TickerLine() {
  return (
    <>
      {TICKER_ITEMS.map((t, i) => (
        <span key={i}>
          {t.tag && <span className={t.tagClass}>{t.tag}</span>} {t.text} &nbsp;•&nbsp;{" "}
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <div className="w-full bg-amber-100 border-b border-outline-variant px-4 py-2 flex items-center gap-3 overflow-hidden text-xs">
      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary-container text-white font-semibold rounded shrink-0">
        <span className="text-xs">📢</span>
        <span className="text-[11px] tracking-wider uppercase font-bold text-amber-600">EXAM CELL DISPATCH</span>
      </div>
      <div className="overflow-hidden relative flex-1 font-medium text-amber-800">
        <div className="inline-block whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          <TickerLine />
          <TickerLine />
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 text-[11px] text-outline font-medium px-2 border-l border-outline-variant">
        <span className="size-1.5 rounded-full bg-amber-600 animate-pulse" />
        <span>Live Bulletin</span>
      </div>
    </div>
  );
}
