import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon.jsx';
import { LOGO_URL } from '../../data/assets.js';
import { staffNav, staffUser } from '../../data/staff.js';

const base = 'flex items-center px-space-md py-space-sm rounded-lg';
const active = `${base} bg-surface-container text-on-surface font-label-md text-label-md font-semibold`;
const idle = `${base} text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-body-md`;

export default function StaffSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="px-space-lg pt-space-lg pb-space-md flex items-center gap-space-sm">
          <img alt="Vikas Examination Portal" className="h-9 w-auto object-contain" src={LOGO_URL} />
        </div>
        <div className="px-space-lg py-space-xs">
          <div className="h-px bg-surface-container-high w-full" />
        </div>

        <nav aria-label="Staff" className="flex-1 px-space-md py-space-md flex flex-col gap-space-xs">
          {staffNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? active : idle)}>
              {({ isActive }) => (
                <>
                  <Icon
                    name={item.icon}
                    className={`mr-space-sm text-[20px] ${isActive ? 'text-secondary' : ''}`}
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-space-md bg-surface-container-low">
        <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0 font-bold text-xs">
              {staffUser.initials}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-on-surface truncate">{staffUser.name}</span>
              <span className="inline-flex items-center w-max px-1.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[9px] uppercase font-bold tracking-tight">
                {staffUser.role}
              </span>
              <span className="text-[10px] text-on-surface-variant truncate font-code-sm">{staffUser.email}</span>
            </div>
          </div>
          <Link
            to="/login"
            title="Logout"
            aria-label="Logout"
            className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-surface-container-high transition-colors flex items-center justify-center"
          >
            <Icon name="logout" className="text-[20px]" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
