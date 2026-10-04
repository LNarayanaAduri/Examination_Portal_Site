import Icon from "./Icon.jsx";
import { FACULTY, LOGO_SIDEBAR } from "../data.js";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="px-space-lg pt-space-lg pb-space-md flex items-center gap-space-sm">
          <img src={LOGO_SIDEBAR} alt="Vikas Examination Portal" className="h-9 w-auto object-contain" />
        </div>
        <div className="px-space-lg py-space-xs">
          <div className="h-px bg-surface-container-high w-full" />
        </div>
        <nav className="flex-1 px-space-md py-space-md flex flex-col gap-space-xs">
          <a
            href="#"
            className="flex items-center px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors"
          >
            <Icon name="dashboard" filled className="mr-space-sm" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-body-md"
          >
            <Icon name="insights" className="mr-space-sm" />
            Student Performance
          </a>
        </nav>
      </div>

      <div className="p-space-md bg-surface-container-low">
        <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Icon name="person" size={18} className="text-on-primary" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-on-surface truncate">{FACULTY.name}</span>
              <span className="inline-flex items-center w-max px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] uppercase font-semibold">
                {FACULTY.role}
              </span>
              <span className="font-code-sm text-[11px] text-on-surface-variant truncate">{FACULTY.email}</span>
            </div>
          </div>
          <a
            className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-surface-container-high transition-colors flex items-center justify-center"
            href="#"
            title="Logout"
          >
            <Icon name="logout" />
          </a>
        </div>
      </div>
    </aside>
  );
}
