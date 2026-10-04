import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon.jsx';
import { AVATAR_URL, LOGO_URL } from '../../data/assets.js';
import { student } from '../../data/exam.js';

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Past Results', to: '/past-results' },
  { label: 'Exam Schedule', to: '/exam-schedule' },
  { label: 'Profile', to: '/profile' },
  { label: 'Help & Support', to: '/help-support' },
];

const base = 'font-label-md text-label-md transition-colors';
const active = 'px-4 py-2 bg-on-surface text-surface font-semibold rounded-md';
const idle =
  'px-space-md py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg';

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 w-full px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <Link to="/" className="flex items-center gap-space-sm">
            <img alt="Vikas Examination Portal" className="h-9 w-auto object-contain" src={LOGO_URL} />
          </Link>
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-space-xs">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${base} ${isActive ? active : idle}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img alt={student.name} className="w-8 h-8 rounded-full object-cover" src={AVATAR_URL} />
            <div className="hidden md:flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">
                {student.name}
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">Roll: {student.roll}</span>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-surface-container-high hidden sm:block" />
          <Link
            to="/login"
            className="font-label-sm text-label-sm text-secondary hover:text-on-secondary-container px-space-sm py-space-xs rounded-lg transition-colors flex items-center gap-space-xs font-semibold"
          >
            <Icon name="logout" className="text-[18px]" />
            <span className="hidden sm:inline">Logout</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
