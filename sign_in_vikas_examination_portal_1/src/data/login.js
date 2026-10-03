// Copy for the sign-in screen. `variants` comes from the old selectRole()
// function in script.js; the default variant matches the exported screen.

export const brand = {
  badge: 'Official Assessment Portal',
  name: 'VIKAS EXAMINATION PORTAL',
  tagline: 'Junior College Assessment System',
  affiliation: 'Affiliated to State Pre-University Board',
  session: {
    label: 'Live Session',
    status: 'ACTIVE TEST RUN',
    title: 'Standard XII Term Examinations',
    subtitle: 'Computer Science, Mathematics & Physics streams',
    candidates: '5,400+ Candidates',
    candidatesNote: 'Synchronous Secure Evaluation',
  },
  encryption: 'End-to-End Proctor Encrypted',
  verification: 'Secured by Biometric & Device Identity Verification System v4.8',
};

export const variants = {
  portal: {
    heading: 'Sign In to Vikas Examination Portal',
    subheading:
      'Access examination modules, hall tickets, faculty evaluation, or administration dashboards with your institutional ID.',
    identifierLabel: 'Institutional ID or Official College Email',
    identifierPlaceholder: 'e.g. 24JC-1082 (Student) or r.varma@vikasjc.edu.in (Staff)',
    submitLabel: 'Sign In to Portal',
  },
  student: {
    heading: 'Sign In to Student Portal',
    subheading: 'Access scheduled mid-terms, test analytics, and verified hall passes.',
    identifierLabel: 'Student Roll Number or College Email',
    identifierPlaceholder: 'e.g. 24JC-1082 or aarav.sharma@vikasjc.edu.in',
    submitLabel: 'Sign In to Student Portal',
  },
  staff: {
    heading: 'Sign In to Staff & Evaluator Portal',
    subheading: 'Invigilator oversight console, live batch proctoring, and paper marking.',
    identifierLabel: 'Faculty Employee Code / Vikas Official ID',
    identifierPlaceholder: 'e.g. FAC-209 or registrar@vikasjc.edu.in',
    submitLabel: 'Sign In to Faculty Console',
  },
};

export const formCopy = {
  systemBadge: 'Institutional Assessment System 2024-2025',
  passwordLabel: 'Password / Passcode',
  passwordPlaceholder: 'Enter your account password or workstation secret',
  resetLabel: 'Reset Password',
  rememberLabel: 'Remember my exam workstation',
  lanStatus: 'LAN Station Active',
  verifyingLabel: 'Verifying Credentials...',
};

export const notice = {
  title: 'Examination Notice',
  time: '10:00 AM IST',
  body: 'Mid-Term assessment sessions are currently active. Candidates must present verified College ID / Hall Pass; invigilators and evaluators must verify workstation station IDs.',
};

export const helpdesk = {
  title: 'Examination Helpdesk',
  contact: 'ext. 4410 • helpdesk@vikasjc.edu.in',
  governance: 'IT Governance & Examination Cell',
  logging: 'All sessions recorded & logged',
};

// Where to go after a successful sign-in.
export const AUTH_REDIRECT = '/dashboard';
