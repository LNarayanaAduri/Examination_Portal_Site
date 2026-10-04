import Icon from "./Icon.jsx";
import { logoUrl, navItems, student } from "../data.js";

export default function Header({ active = "dashboard", onNavigate }) {

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 w-full px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <img
            src={logoUrl}
            alt="Vikas Examination Portal"
            className="h-9 w-auto object-contain"
          />

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
                      ? "px-4 py-2 bg-on-surface text-surface font-label-md text-label-md font-semibold rounded-md shadow-sm transition-colors"
                      : "font-label-md text-label-md px-space-md py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-md"
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img
              src={student.avatar}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="hidden md:flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">
                {student.name}
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                Roll: {student.roll}
              </span>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-surface-container-high hidden sm:block" />

          <a
            href="#"
            className="font-label-sm text-label-sm text-secondary hover:text-on-secondary-container px-space-sm py-space-xs rounded-lg transition-colors flex items-center gap-space-xs font-semibold"
          >
            <Icon name="logout" className="text-[18px]" />
            <span className="hidden sm:inline">Logout</span>
          </a>
        </div>
      </div>
    </header>
  );
}
