export const student = {
  name: "Aarav Sharma",
  roll: "24JC-1082",
  id: "VIKAS-STD-2409",
  className: "Class 12 - Science Section A",
  stream: "PCMC",
  session: "2024-25",
  avatar:
    "https://lh3.googleusercontent.com/aida/AEtjO1UAkPhjS94qWS4ogDi51ibAgwP98o2WU3a51ZZEy3wHFAUB5ksqVngGxf6Vrw7DtCqAwGnNPxjrXlg_w-Le71INfhkA8PKx14AFWs7GVOI9532MxsoiYwh-Zg6tXpENY11VYECunGEHMtxxsXpi-qGz8xopWUiIISVVCJGMqIzKh7_5_KBirQdpXzb9y6oT3WwTfWkMpEsmJi1-stX9_LOZ7KCDqnelE4wwSgq59BBR-w6VZDBKxBYiXQ",
};

export const logoUrl =
  "https://lh3.googleusercontent.com/aida/AEtjO1VPJyDCWKdMLBOfODwAIVgJJtPC7yxk_B7kWDYOIpj3cGskPzczlOkPlM7T5mJa-Mam36t4Zk1-h4iE-DRtxyQ-FtFKyzruwVPmVUxljEdu-jTEDO0ZjzFKeLT0cqyPpkd3FCCurcF1RR9vmAHUqoRxh3Hp_dGjeFC9XjgJIjG981HizLxIjqAgz__OSqKtuqM691zNtt4gEMGtM1SLPZqos1wr2Y8LALcY_I1jsrXiF5gdjO43xvqjbx0";

export const navItems = [
  { key: "dashboard", label: "Dashboard" },
  { key: "past-results", label: "Past Results" },
  { key: "exam-schedule", label: "Exam Schedule" },
  { key: "profile", label: "Profile" },
  { key: "help-support", label: "Help & Support" },
];

export const tickerItems = [
  {
    tag: "Advisory",
    text: "HSC Pre-Board Examinations commence on October 15, 2024. Hall tickets are now available for verification and download under the Exam Schedule section. Ensure biometric verification at LAN Desk-18.",
  },
  {
    tag: "Notice",
    text: "Scientific calculators (fx-82/991 series) permitted for Physics Paper only",
  },
  {
    tag: "Exam Cell",
    text: "Biometric verification desks open at 08:30 AM in Digital Block A",
  },
];

export const upcomingExam = {
  startsIn: "Starts in 42 minutes",
  courseCode: "MTH-12-301",
  title: "Mathematics - Advanced Calculus & Trigonometry",
  details: [
    { label: "Schedule Date", value: "October 24, 2024", sub: "Thursday" },
    { label: "Window & Duration", value: "10:00 AM – 11:30 AM", sub: "90 Minutes Active" },
    { label: "Examination Room", value: "Digital Lab 04", sub: "Terminal Desk #18" },
  ],
  syllabus: {
    modules: "Modules 3 & 4",
    topics:
      "Differential & Integral Calculus, Limits & Continuity, Three-Dimensional Coordinate Geometry.",
  },
  unlockNote: "Terminal will unlock at 09:55 AM",
  queue: [
    { title: "Physics Lab Viva", when: "October 28, 2024 • 02:00 PM", icon: "science" },
    { title: "Chemistry Mid-Term", when: "November 02, 2024 • 10:00 AM", icon: "biotech" },
  ],
};

export const performance = {
  collegeAvg: 78,
  points: [
    { label: "Unit Test 1", short: "Unit Test 1", score: 82 },
    { label: "Physics Mid-Term", short: "Physics Mid", score: 88 },
    { label: "Chemistry I", short: "Chemistry I", score: 85 },
    { label: "Math Prep", short: "Math Prep", score: 91 },
    { label: "CS Paper I", short: "CS Paper I", score: 94 },
  ],
  metrics: [
    { label: "Cumulative GPA", value: "3.82", suffix: "/ 4.0", icon: "grade" },
    { label: "Exams Completed", value: "8 Assessments", icon: "fact_check" },
    { label: "Assessment Attendance", value: "100.0%", icon: "event_available", accent: true },
  ],
};

export const latestResult = {
  code: "CS-12-P1",
  title: "Computer Science Paper I",
  status: "Evaluated",
  marks: 94,
  total: 100,
  grade: "A+",
  rankNote: "Top 5% in College",
  percentile: "96.8%",
  standing: "Rank #3",
  sections: [
    { name: "Section A: MCQs & Conceptual", got: 30, max: 30 },
    { name: "Section B: Algorithms & Coding", got: 64, max: 70 },
  ],
};

export const notices = [
  {
    id: 1,
    tag: "ADMIT CARD",
    tagClass: "bg-surface-variant",
    time: "Today",
    title: "Hall Ticket for Term Finals available for download",
    body: "Students must download and get it signed by the Section Dean prior to Oct 30.",
    cta: "Direct Download",
  },
  {
    id: 2,
    tag: "PROTOCOL",
    tagClass: "bg-surface-container",
    time: "2h ago",
    title: "Calculators allowed for Physics Paper only",
    body: "Standard scientific non-programmable models only (fx-82/991 series). Barred in Mathematics exams.",
  },
];
