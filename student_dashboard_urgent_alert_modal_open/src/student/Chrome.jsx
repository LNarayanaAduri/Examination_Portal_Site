import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { LOGO_SIDEBAR } from "../data.js";
import { ADVISORY, AVATAR_URL, STUDENT, STUDENT_NAV } from "./data.js";

export function StudentHeader() {
  const [active, setActive] = useState("Dashboard");
  return (
    <header className="border-b border-surface-container-high bg-surface-container-lowest sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 whitespace-nowrap gap-4">
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-2" href="#/student">
              <img src={LOGO_SIDEBAR} alt="Vikas Examination Portal" className="h-9 w-auto object-contain" />
            </a>
            <nav className="hidden md:flex items-center gap-2">
              {STUDENT_NAV.map((label) => (
                <a
                  key={label}
                  href="#/student"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(label);
                  }}
                  className={
                    active === label
                      ? "rounded-lg px-4 py-2 bg-on-surface text-surface font-semibold text-sm transition-colors"
                      : "rounded-lg px-3 py-2 text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors"
                  }
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src={AVATAR_URL}
                alt={STUDENT.name}
                className="w-9 h-9 rounded-full object-cover border border-surface-container-high"
              />
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-on-surface leading-tight">{STUDENT.name}</div>
                <div className="text-[11px] text-on-surface-variant font-code-sm">Roll: {STUDENT.roll}</div>
              </div>
            </div>
            <div className="hidden sm:block h-6 w-px bg-surface-container-high" />
            <button className="flex items-center gap-1.5 text-xs font-medium text-on-surface-variant hover:text-error transition-colors">
              <Icon name="logout" size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AdvisoryBar() {
  return (
    <div className="bg-red-50 border-b border-red-200 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-sm">
            📢 URGENT ADVISORY:
          </span>
        </div>
        <div className="flex-1 overflow-hidden whitespace-nowrap text-red-900 font-medium text-ellipsis">
          <span>{ADVISORY}</span>
        </div>
        <a className="shrink-0 font-semibold text-red-700 hover:text-red-900 underline flex items-center gap-1" href="#/student">
          <span>View Details</span>
          <Icon name="arrow_forward" size={16} />
        </a>
      </div>
    </div>
  );
}

export function StudentFooter() {
  return (
    <footer className="mt-auto border-t border-surface-container-high bg-surface-container-lowest py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-on-surface-variant">
        <p>© 2024 Vikas Junior College. Examination Management System. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span>Server Status: Operational (Latency 18ms)</span>
          <span>•</span>
          <span>Version 4.2.1-prod</span>
        </div>
      </div>
    </footer>
  );
}

export function AlertToast({ onDismiss }) {
  return (
    <div className="fixed top-20 right-6 z-50 w-80 bg-surface-container-lowest rounded-xl shadow-2xl border border-surface-container-high p-3">
      <div className="flex items-start gap-2.5">
        <span className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
          <Icon name="warning" size={16} />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <div className="flex items-center gap-1.5">
              <span className="inline-block px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px] uppercase tracking-wider">
                Urgent
              </span>
              <span className="text-[10px] text-on-surface-variant font-code-sm">10:15 AM</span>
            </div>
            <button
              onClick={onDismiss}
              aria-label="Dismiss alert"
              className="text-slate-400 hover:text-slate-700 w-5 h-5 rounded hover:bg-surface-container flex items-center justify-center transition-colors text-xs font-semibold"
            >
              ✕
            </button>
          </div>
          <h4 className="text-xs font-bold text-on-surface leading-tight font-headline-md">Hall Tickets Available</h4>
          <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
            Obtain Section Dean signature prior to <span className="font-semibold text-on-surface">Oct 30, 2024</span>.
          </p>
          <div className="mt-2 pt-2 border-t border-surface-container-high flex items-center justify-end">
            <button onClick={onDismiss} className="text-[11px] text-on-surface-variant hover:text-on-surface font-medium transition-colors">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
