import Icon from "../Icon.jsx";
import { logoUrl, navItems, student } from "../../data.js";
import { urgentAdvisory } from "../../profileData.js";

export default function ProfileHeader({ active, onNavigate }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-24 w-full px-gutter flex flex-col justify-between">
        <div className="h-16 flex items-center justify-between gap-gutter">
          <div className="flex items-center gap-space-md">
            <img src={logoUrl} alt="Vikas Examination Portal" className="h-8 w-auto object-contain" />
          </div>

          <nav className="hidden lg:flex items-center gap-space-xs">
            {navItems.map((item) => {
              const isActive = item.key === active;
              return (
                <a
                  key={item.key}
                  href="#"
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(item.key);
                  }}
                  className={
                    isActive
                      ? "px-space-md py-space-sm transition-colors bg-primary-container text-on-primary font-label-md rounded-lg"
                      : "px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors rounded-lg"
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-sm pl-space-sm">
              <div className="hidden sm:flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface leading-tight">
                  {student.name}
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">
                  Roll: {student.roll}
                </span>
              </div>
              <img src={student.avatar} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
            </div>
            <button
              type="button"
              className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-sm text-label-sm"
            >
              <Icon name="logout" className="text-base" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Urgent advisory strip */}
        <div className="h-8 w-full bg-error-container text-on-error-container px-space-md flex items-center overflow-hidden rounded-md">
          <div className="flex items-center gap-space-sm shrink-0 pr-space-md">
            <Icon name="campaign" className="text-base text-error" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-error">
              Urgent Advisory:
            </span>
          </div>
          <div className="overflow-hidden relative w-full whitespace-nowrap">
            <span className="inline-block font-body-sm text-body-sm text-on-error-container">
              {urgentAdvisory}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
