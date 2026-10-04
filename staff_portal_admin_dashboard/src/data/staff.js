export const supervisorUser = {
  name: 'Prof. Meera Swaminathan',
  initials: 'MS',
  role: 'Supervisor (Exam Cell)',
  email: 'meera.s@vikasjc.edu.in',
};

export const supervisorNav = {
  activeIconClass: 'text-secondary',
  items: [
    { label: 'Dashboard', icon: 'dashboard', to: '/staff/dashboard' },
    { label: 'Question Papers', icon: 'quiz', to: '/staff/question-papers' },
    { label: 'Results', icon: 'fact_check', to: '/staff/results' },
    { label: 'Access Control', icon: 'admin_panel_settings', to: '/staff/access-control' },
  ],
};

export const adminUser = {
  name: 'Dr. R. Sharma',
  role: 'Supervisor',
};

export const adminNav = {
  activeIconClass: '',
  items: [
    { label: 'Overview', icon: 'grid_view', to: '/staff/admin', end: true },
    { label: 'Live Exam Monitor', icon: 'sensors', to: '/staff/admin/live-exam-monitor' },
    { label: 'Question Bank', icon: 'quiz', to: '/staff/admin/question-bank' },
    { label: 'Candidate Roster', icon: 'groups', to: '/staff/admin/candidate-roster' },
    { label: 'Attendance & Biometrics', icon: 'how_to_reg', to: '/staff/admin/attendance-biometrics' },
    { label: 'Evaluation & Grading', icon: 'fact_check', to: '/staff/admin/evaluation-grading' },
    { label: 'Incident Logs', icon: 'report_problem', to: '/staff/admin/incident-logs' },
    { label: 'System Settings', icon: 'settings', to: '/staff/admin/system-settings' },
  ],
};
