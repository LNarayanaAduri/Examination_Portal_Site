// Columns of the per-faculty permission matrix.
export const permissionTabs = [
  { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', widthClass: 'min-w-[150px]' },
  { key: 'performance', label: 'Student Performance', icon: 'analytics', widthClass: 'min-w-[190px]' },
  { key: 'questionBank', label: 'Question Bank', icon: 'auto_stories', widthClass: 'min-w-[180px]' },
  { key: 'printLedgers', label: 'Print Ledgers', icon: 'print', widthClass: 'min-w-[170px]' },
];

// Faculty baseline: what a Junior College Faculty member gets without overrides.
const facultyDefaults = {
  dashboard: true,
  performance: true,
  questionBank: false,
  printLedgers: false,
};

function member(id, name, initials, department, email, overrides = {}) {
  return {
    id,
    name,
    initials,
    department,
    email,
    defaults: facultyDefaults,
    initial: { ...facultyDefaults, ...overrides },
  };
}

export const faculty = [
  member('FAC-0102', 'Dr. Rajesh K. Varma', 'RV', 'Mathematics', 'r.varma@vikasjc.edu.in', { questionBank: true }),
  member('FAC-0105', 'Sunita Rao', 'SR', 'Computer Science', 's.rao@vikasjc.edu.in'),
  member('FAC-0118', 'Prof. Tariq Mansoor', 'TM', 'Chemistry', 't.mansoor@vikasjc.edu.in'),
  member('FAC-0089', 'Dr. Suresh N. Nambiar', 'SN', 'Physics', 's.nambiar@vikasjc.edu.in', { printLedgers: true }),
  member('FAC-0142', 'Ananya Roy Kulkarni', 'AK', 'English Literature', 'a.kulkarni@vikasjc.edu.in'),
  member('FAC-0155', 'Vikramaditya Deshmukh', 'VD', 'Mathematics', 'v.deshmukh@vikasjc.edu.in'),
];

// Read-only role tier comparison.
export const baselineColumns = [
  'Dashboard',
  'Question Papers',
  'Results & Marks',
  'Student Performance',
  'Question Bank',
  'Print Ledgers',
  'Access Control',
];

export const baselineRoles = [
  {
    id: 'admin',
    label: 'System Administrator',
    dotClass: 'bg-primary',
    labelClass: 'text-on-surface',
    access: [true, true, true, true, true, true, true],
  },
  {
    id: 'supervisor',
    label: 'Supervisor (Exam Cell)',
    note: 'Your active role',
    dotClass: 'bg-secondary',
    labelClass: 'text-secondary font-semibold',
    rowClass: 'bg-secondary-container/10',
    access: [true, true, true, false, true, true, true],
  },
  {
    id: 'faculty',
    label: 'Junior College Faculty',
    note: 'Baseline defaults',
    dotClass: 'bg-surface-dim',
    labelClass: 'text-on-surface',
    access: [true, false, false, true, false, false, false],
  },
];

export const campusScope = 'Campus Scope: Junior Wing B';
export const policyVersion = 'Read-Only Specification • Policy v4.2';
