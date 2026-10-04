export const AVATAR_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1UAkPhjS94qWS4ogDi51ibAgwP98o2WU3a51ZZEy3wHFAUB5ksqVngGxf6Vrw7DtCqAwGnNPxjrXlg_w-Le71INfhkA8PKx14AFWs7GVOI9532MxsoiYwh-Zg6tXpENY11VYECunGEHMtxxsXpi-qGz8xopWUiIISVVCJGMqIzKh7_5_KBirQdpXzb9y6oT3WwTfWkMpEsmJi1-stX9_LOZ7KCDqnelE4wwSgq59BBR-w6VZDBKxBYiXQ";

export const STUDENT = {
  name: "Aarav Sharma",
  roll: "24JC-1082",
  className: "Class 12 - Science Section A",
  enrollment: "HSC-2024-MAH-90182",
  session: "Academic Session 2024–2025 • Term Finals",
};

export const STUDENT_NAV = ["Dashboard", "Past Results", "Exam Schedule", "Profile", "Help & Support"];

export const ADVISORY =
  "HSC Pre-Board Examinations commence on October 15, 2024. Hall tickets are now available for verification and download under the Exam Schedule section. Ensure biometric verification at LAN Desk-18.";

export const NOTICES = [
  {
    id: "hall",
    icon: "campaign",
    label: "Urgent Advisory",
    meta: "Today, 08:30 AM",
    title: "Hall Ticket for Term Finals available for download",
    body: "Ensure signature verification from Class Coordinator prior to entering examination centers. Hard-copy printout required.",
    accent: "border-l-secondary",
    iconClass: "text-secondary",
    labelClass: "text-secondary",
  },
  {
    id: "rules",
    icon: "info",
    label: "Notice & Rules",
    meta: "Valid Oct 24–Nov 05",
    title: "Scientific calculators allowed for Physics Paper only",
    body: "Mobile devices and programmable smart wearables are strictly prohibited inside the hall. Non-programmable FX-991ES accepted.",
    accent: "border-l-primary-container",
    iconClass: "text-primary-container",
    labelClass: "text-on-surface-variant",
  },
];

export const NEXT_EXAM = {
  title: "Mathematics - Advanced Calculus & Trigonometry",
  date: "October 24, 2024",
  window: "10:00 AM – 11:30 AM (90 mins)",
  hall: "Hall No: 304 (Desk: 14)",
  syllabus:
    "Modules 3 & 4 (Differential Calculus, Integral Calculus, Vectors & Analytical Coordinate Geometry). Total 80 Marks.",
  invigilator: "Dr. R. K. Varma",
  startsInMinutes: 42,
};

export const UPCOMING = [
  { kind: "Laboratory Viva", highlight: true, date: "Oct 28", title: "Physics Lab Practical & Viva", topics: "Optics, Potentiometer & Circuit Systems", time: "01:30 PM • Lab 2", marks: "30 Marks" },
  { kind: "Theory Exam", date: "Nov 02", title: "Chemistry Mid-Term Paper", topics: "Organic Transformations & Thermodynamics", time: "10:00 AM • Main Hall", marks: "70 Marks" },
];

export const LATEST_RESULT = {
  title: "Computer Science Paper I",
  completed: "Evaluation completed on Oct 19, 2024",
  score: 94,
  outOf: 100,
  grade: "A+",
  standing: "Top 5% in College",
  percentile: "96.8%",
  rank: "#3 of 128",
  sections: [
    { name: "Section A (MCQs & Conceptual Theory)", got: 30, max: 30 },
    { name: "Section B (Coding, Logic & Algorithms)", got: 64, max: 70 },
  ],
};

export const TREND = {
  benchmark: 78,
  points: [
    { label: "Unit Test 1", score: 82, x: 80 },
    { label: "Physics Mid-Term", score: 88, x: 220 },
    { label: "Chemistry I", score: 85, x: 370 },
    { label: "Math Prep", score: 91, x: 520 },
    { label: "CS Paper", score: 94, x: 650 },
  ],
};

export const SUMMARY_METRICS = [
  { icon: "grade", label: "Cumulative GPA", value: "3.82", suffix: "/ 4.0", iconBox: "bg-secondary text-on-secondary" },
  { icon: "assignment_turned_in", label: "Total Exams Completed", value: "8 Papers", iconBox: "bg-surface-container text-on-surface" },
  { icon: "fact_check", label: "Exam Attendance Rate", value: "100% Perfect", valueClass: "text-secondary", iconBox: "bg-secondary-container text-on-secondary-container" },
];

export const HALL_TICKET_RULES = [
  "Carry a signed hard copy of this hall ticket and your college ID card.",
  "Report to the examination hall at least 30 minutes before the start time.",
  "Mobile phones and programmable wearables are strictly prohibited.",
  "Biometric verification is mandatory at LAN Desk-18.",
];
