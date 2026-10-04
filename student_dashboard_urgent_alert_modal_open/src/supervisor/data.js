export const SUPERVISOR = {
  name: "Prof. Meera Swaminathan",
  initials: "MS",
  role: "Supervisor (Exam Cell)",
  email: "meera.s@vikasjc.edu.in",
};

export const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", target: "top" },
  { id: "question-papers", label: "Question Papers", icon: "description", target: "question-papers" },
  { id: "results-ledger", label: "Results", icon: "school", target: "results-ledger" },
  { id: "access-control", label: "Access Control", icon: "verified_user", target: "access-control" },
];

export const SUBJECTS = [
  { code: "MATH-201", name: "Mathematics II" },
  { code: "PHY-102", name: "Physics Core" },
  { code: "CHEM-301", name: "Chemistry Advanced" },
  { code: "CS-401", name: "Computer Science" },
];

export const CLASS_STANDARDS = ["Std XII (Senior Secondary)", "Std XI (Junior Secondary)"];

export const INITIAL_QUESTIONS = [
  { id: 1, title: "Calculus: Find derivative of f(x) = sin²(x)...", marks: 4 },
  { id: 2, title: "Limits: Evaluate lim(x→0) (sin x / x)...", marks: 4 },
];

export const INITIAL_PAPERS = [
  { id: 1, subject: "Mathematics II", code: "MATH-201", examDate: "Nov 04, 2024", fileType: "pdf", fileLabel: "PDF (1.4 MB)", uploadDate: "Oct 22, 2024", status: "ready" },
  { id: 2, subject: "Physics Mid-Term", code: "PHY-102", examDate: "Nov 06, 2024", fileType: "manual", fileLabel: "Manual (30 Qs)", uploadDate: "Oct 21, 2024", status: "ready" },
  { id: 3, subject: "Chemistry Unit 3", code: "CHEM-301", examDate: "Nov 10, 2024", fileType: "pdf", fileLabel: "PDF (820 KB)", uploadDate: "Oct 23, 2024", status: "pending" },
];

export const STATUS_META = {
  ready: { label: "Ready for Exam", pill: "bg-secondary-fixed/50 text-secondary", dot: "bg-secondary" },
  pending: { label: "Pending Moderation", pill: "bg-amber-100 text-amber-800", dot: "bg-amber-600" },
};

export const STATUS_FILTERS = [
  { value: "all", label: "All Papers" },
  { value: "ready", label: "Approved" },
  { value: "pending", label: "Pending Moderation" },
];

export const EXAM_OPTIONS = ["Mathematics II Mid-Term", "Physics Core Assessment", "Chemistry Periodic Test"];
export const SECTION_OPTIONS = ["Class 12 - Sec A", "Class 12 - Sec B", "Class 11 - Sec A"];

// Only Mathematics II / Class 12 - Sec A has data (other combos show the empty state)
export const RESULTS = [
  { roll: "24-XII-0101", name: "Ananya Ramanathan", subject: "Mathematics II", score: 98, percentile: "99.8%", date: "Oct 24, 2024", flagged: false },
  { roll: "24-XII-0102", name: "Kavya Krishnan", subject: "Mathematics II", score: 92, percentile: "96.4%", date: "Oct 24, 2024", flagged: false },
  { roll: "24-XII-0103", name: "Aditya Deshmukh", subject: "Mathematics II", score: 34, percentile: "38.1%", date: "Oct 24, 2024", flagged: true },
];

export const PERMISSION_COLUMNS = [
  { key: "view", label: "Question Papers View" },
  { key: "upload", label: "Upload Question Paper" },
  { key: "ledger", label: "Results Ledger" },
  { key: "edit", label: "Student Performance Edit" },
];

export const FACULTY_PERMISSIONS = [
  { id: "venkat", name: "Dr. R. Venkatraman", dept: "Dept. of Mathematics", perms: { view: true, upload: false, ledger: true, edit: false } },
  { id: "sunita", name: "Prof. Sunita Sharma", dept: "Dept. of Physics", perms: { view: true, upload: true, ledger: true, edit: false } },
  { id: "anupam", name: "Dr. Anupam Banerjee", dept: "Dept. of Chemistry", perms: { view: true, upload: false, ledger: false, edit: false } },
];

export const TICKER_ITEMS = [
  { tag: "[URGENT]", tagClass: "font-bold text-error", text: "Moderator review for Chemistry Unit 3 (CHEM-301) required before 14:00 hrs" },
  { tag: "[System]", tagClass: "font-bold text-primary", text: "Term II Moderation Ledger synchronization live across all terminal nodes" },
  { tag: "", text: "Question paper encryption keys updated for Std XII Mathematics." },
];
