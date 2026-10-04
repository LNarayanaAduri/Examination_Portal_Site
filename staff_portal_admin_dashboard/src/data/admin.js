export const adminMeta = {
  authLevel: 'System Auth: Root Level',
  node: 'NODE: HYD-CAMPUS-01',
};

// iconTone: 'primary' | 'secondary'   badgeTone: 'success' | 'neutral' | 'strong'
// noteTone: 'muted' | 'accent'        glow: 'low' | 'accent'
export const statCards = [
  {
    id: 'students',
    icon: 'groups',
    iconTone: 'primary',
    badge: '+48 this term',
    badgeTone: 'success',
    value: '1,280',
    label: 'Total Enrolled Students',
    note: 'Standard XI & XII Science',
    noteTone: 'muted',
    glow: 'low',
  },
  {
    id: 'staff',
    icon: 'badge',
    iconTone: 'secondary',
    badge: '42 Active',
    badgeTone: 'neutral',
    value: '42',
    label: 'Staff Accounts',
    note: '12 Admins/Sup, 30 Faculty',
    noteTone: 'muted',
    glow: 'accent',
  },
  {
    id: 'exams',
    icon: 'event_upcoming',
    iconTone: 'primary',
    badge: 'Active Session',
    badgeTone: 'strong',
    value: '6',
    label: 'Scheduled Exams',
    note: 'Physics Prep in 3 days',
    noteTone: 'accent',
    glow: 'low',
  },
  {
    id: 'papers',
    icon: 'task_alt',
    iconTone: 'secondary',
    badge: '75% Ready',
    badgeTone: 'success',
    value: '18',
    total: '/ 24',
    label: 'Papers Verified',
    progress: 75,
    glow: 'accent',
  },
];

// tone: 'neutral' | 'accent'
export const portalCards = [
  {
    id: 'supervisor',
    tone: 'neutral',
    icon: 'assignment_turned_in',
    module: 'MOD: SUPERVISOR-OPS',
    title: 'Supervisor Workspace - Question Papers & Verification',
    description:
      'Review queued question papers, approve manual entry sets, monitor proctor attendance logs, and oversee printable result ledgers prior to release.',
    metrics: [
      { value: '06', label: 'Pending Approvals' },
      { value: '100%', label: 'Proctor Coverage', accent: true },
    ],
    linkLabel: 'Open Question Bank & Results',
    to: '/staff/admin/question-bank',
  },
  {
    id: 'analytics',
    tone: 'accent',
    icon: 'insights',
    module: 'MOD: EVAL-ANALYTICS',
    title: 'Faculty Analytics - Student Performance & Grading',
    description:
      'Inspect cross-section grade distributions, Class 12 score trends, and comparative departmental analytics with raw percentile curves.',
    trend: { value: '84.2%', label: 'Median Cohort Avg' },
    linkLabel: 'View Academic Performance',
    to: '/staff/admin/evaluation-grading',
  },
];

export const staffMembers = [
  { id: 'meera', name: 'Prof. Meera Swaminathan', initials: 'MS', email: 'meera.s@vikasjc.edu.in', dept: 'Dept of Physics', role: 'supervisor', lastActive: '8m ago' },
  { id: 'rajesh', name: 'Dr. Rajesh K. Varma', initials: 'RV', email: 'rajesh.v@vikasjc.edu.in', dept: 'Dept of Mathematics', role: 'faculty', lastActive: '25m ago' },
  { id: 'ananya', name: 'Ananya Deshmukh', initials: 'AD', email: 'ananya.d@vikasjc.edu.in', dept: 'Examination Cell', role: 'admin', lastActive: 'Just now', live: true },
  { id: 'tariq', name: 'Prof. Tariq Mansoor', initials: 'TM', email: 'tariq.m@vikasjc.edu.in', dept: 'Dept of Chemistry', role: 'faculty', lastActive: '2h ago' },
  { id: 'sunita', name: 'Sunita Rao', initials: 'SR', email: 'sunita.r@vikasjc.edu.in', dept: 'Computer Science Dept', role: 'faculty', lastActive: '1d ago' },
];

export const roleOptions = [
  { value: 'all', label: 'Role: All Roles' },
  { value: 'admin', label: 'Role: Admin' },
  { value: 'supervisor', label: 'Role: Supervisor' },
  { value: 'faculty', label: 'Role: Faculty' },
];

export const roleStyles = {
  admin: { label: 'Admin', chip: 'bg-primary-container text-primary-fixed', avatar: 'bg-primary text-on-primary' },
  supervisor: {
    label: 'Supervisor',
    chip: 'bg-secondary-container text-on-secondary-container',
    avatar: 'bg-secondary-container text-on-secondary-container',
  },
  faculty: {
    label: 'Faculty',
    chip: 'bg-surface-container-highest text-on-surface',
    avatar: 'bg-surface-container-high text-on-surface',
  },
};
