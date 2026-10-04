export const LOGO_SIDEBAR =
  "https://lh3.googleusercontent.com/aida/AEtjO1VPJyDCWKdMLBOfODwAIVgJJtPC7yxk_B7kWDYOIpj3cGskPzczlOkPlM7T5mJa-Mam36t4Zk1-h4iE-DRtxyQ-FtFKyzruwVPmVUxljEdu-jTEDO0ZjzFKeLT0cqyPpkd3FCCurcF1RR9vmAHUqoRxh3Hp_dGjeFC9XjgJIjG981HizLxIjqAgz__OSqKtuqM691zNtt4gEMGtM1SLPZqos1wr2Y8LALcY_I1jsrXiF5gdjO43xvqjbx0";
export const LOGO_HEADER =
  "https://lh3.googleusercontent.com/aida/AEtjO1V6yCWbjKAXfBbQfeVpGGwAZRTgAVGLRsXLzqy5u6gkfMAMg6L3v0wlu1Sb5h1DOHGZRdXzaB8J1g3nyzfW8TPAvA-PXxSGdU1VHnqPWuOWgtjw6V0Z12rQGgdZl_eNxYqc3UJKsFN6nDpuneCE87ahTJ3DGdGVJ-nVorziB-jtfgRGWb7nVLJ1RdebL55klx_5vDOXHYmA7jmutv4STbqJ-7oWQdAyAXfpgyh_FICq-ncHX9OMj45T6sI";

export const FACULTY = {
  name: "Dr. Rajesh K. Varma",
  role: "Faculty (Mathematics)",
  email: "rajesh.v@vikasjc.edu.in",
};

export const CLASS_OPTIONS = [
  { value: "12-A", label: "Class 12 - Section A (PCMB)" },
  { value: "12-B", label: "Class 12 - Section B (PCMC)" },
  { value: "11-A", label: "Class 11 - Section A (General)" },
  { value: "EMPTY", label: "Class 11 - Section D (No Exam Data)" },
];

export const SUBJECT_OPTIONS = [
  { value: "MATH-102", label: "Mathematics & Calculus (MATH-102)" },
  { value: "PHY-101", label: "Physics (PHY-101)" },
  { value: "CHEM-103", label: "Chemistry (CHEM-103)" },
];

export const TERM_OPTIONS = [
  { value: "TERM-2", label: "Term II Mid-Terms (Oct 2024)" },
  { value: "TERM-1", label: "Term I Final Benchmark (Aug 2024)" },
  { value: "UNIT-1", label: "Unit Assessment 1 (Jul 2024)" },
];

export const DEFAULT_FILTERS = { cls: "12-A", subject: "MATH-102", term: "TERM-2" };

// Stat cards by class selection (mirrors applyInteractiveFilters in script.js)
export const STATS_BY_CLASS = {
  "12-A": { highest: "98", lowest: "42", avg: "79.4%" },
  "12-B": { highest: "92", lowest: "48", avg: "74.8%" },
  "11-A": { highest: "98", lowest: "42", avg: "79.4%" },
  EMPTY: { highest: "—", lowest: "—", avg: "0.0%" },
};

export const SECTION_BARS = [
  { label: "Sec A (PCMB)", value: 79.4, active: true, fill: "#006a61" },
  { label: "Sec B (PCMC)", value: 74.8, fill: "#d3e4fe" },
  { label: "Sec C (PCME)", value: 71.2, fill: "#d3e4fe" },
  { label: "Sec D (Comm)", value: 68.5, fill: "#eff4ff" },
];

export const DISTRIBUTION = [
  { key: "top", label: "Top Performers (>85%)", count: 18, pct: 48, dot: "bg-secondary", bar: "bg-secondary" },
  { key: "consistent", label: "Consistent (70-85%)", count: 12, pct: 32, dot: "bg-secondary-fixed-dim", bar: "bg-secondary-fixed-dim" },
  { key: "borderline", label: "Borderline (50-70%)", count: 5, pct: 12, dot: "bg-primary-fixed-dim", bar: "bg-primary-fixed-dim" },
  { key: "remedial", label: "Remedial (<50%)", count: 3, pct: 8, dot: "bg-error", bar: "bg-error", danger: true },
];

export const STUDENTS = [
  {
    roll: "24JC-1082", name: "Aarav Sharma", initials: "AS", email: "aarav.s24@vikasjc.edu.in",
    section: "Class 12-A", score: 94, grade: "A+", trend: "+6", up: true, category: "Top 5%",
    avatarClass: "bg-secondary-container text-on-secondary-container",
    gradeClass: "bg-secondary-container text-on-secondary-container",
    categoryClass: "bg-secondary-container/40 text-secondary", dotClass: "bg-secondary",
  },
  {
    roll: "24JC-1094", name: "Priya Patel", initials: "PP", email: "priya.p24@vikasjc.edu.in",
    section: "Class 12-A", score: 88, grade: "A", trend: "+3", up: true, category: "Consistent",
    avatarClass: "bg-primary-fixed text-on-primary-fixed",
    gradeClass: "bg-secondary-container text-on-secondary-container",
    categoryClass: "bg-surface-container-high text-on-surface", dotClass: "bg-secondary",
  },
  {
    roll: "24JC-1102", name: "Rohan Mehta", initials: "RM", email: "rohan.m24@vikasjc.edu.in",
    section: "Class 12-A", score: 76, grade: "B+", trend: "-5", up: false, category: "Needs Focus",
    avatarClass: "bg-surface-container-highest text-on-surface",
    gradeClass: "bg-surface-container text-on-surface",
    categoryClass: "bg-surface-variant text-on-surface-variant", dotClass: "bg-outline",
  },
  {
    roll: "24JC-1115", name: "Kavita Nair", initials: "KN", email: "kavita.n24@vikasjc.edu.in",
    section: "Class 12-A", score: 91, grade: "A+", trend: "+2", up: true, category: "High Achiever",
    avatarClass: "bg-secondary-container text-on-secondary-container",
    gradeClass: "bg-secondary-container text-on-secondary-container",
    categoryClass: "bg-secondary-container/40 text-secondary", dotClass: "bg-secondary",
  },
  {
    roll: "24JC-1130", name: "Vikram Singh", initials: "VS", email: "vikram.s24@vikasjc.edu.in",
    section: "Class 12-A", score: 42, grade: "C", trend: "-8", up: false, category: "Remedial Queue", danger: true,
    avatarClass: "bg-error-container text-error",
    gradeClass: "bg-error-container text-on-error-container",
    categoryClass: "bg-error-container text-error", dotClass: "bg-error",
  },
];

export const SAMPLE_QUESTIONS = [
  { q: "Q1. Evaluation of Limit as x tends to 0 of (sin 3x / x)", a: "Student Answer: [B] 3 (Correct)", marks: "+2 / 2", ok: true },
  { q: "Q2. Derivative of ln(cos x) with respect to x", a: "Student Answer: [C] -tan(x) (Correct)", marks: "+2 / 2", ok: true },
  { q: "Q3. Definite Integral of e^(2x) from 0 to 1", a: "Student Answer: [A] (e^2)/2 (Incorrect: Missing -0.5 constant)", marks: "0 / 2", ok: false },
];
