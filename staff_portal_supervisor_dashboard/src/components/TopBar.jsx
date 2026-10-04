import Icon from "./Icon.jsx";
import { LOGO_HEADER } from "../data.js";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl">
      <div className="flex items-center gap-space-sm">
        <img src={LOGO_HEADER} alt="Vikas Portal" className="h-7 w-auto object-contain" />
        <div className="h-4 w-px bg-surface-container-high mx-1" />
        <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
          <span className="font-label-md text-label-md text-on-surface">Staff Portal</span>
          <Icon name="chevron_right" size={14} />
          <span className="font-body-sm text-body-sm text-on-surface">Academic Faculty &amp; Section Performance</span>
        </div>
      </div>

      <div className="flex items-center gap-space-lg">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary border border-secondary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-code-sm text-code-sm font-semibold tracking-wide uppercase">LAN Exam Node Active</span>
        </div>
        <div className="flex items-center gap-space-sm">
          <button className="relative p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
            <Icon name="notifications" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error" />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Icon name="person" size={18} className="text-on-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
