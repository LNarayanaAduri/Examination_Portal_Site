export const profile = {
  name: "Aarav Sharma",
  roll: "24JC-1082",
  enrollment: "HSC-2024-MAH-90182",
  standard: "Std XII – Science (Sec A)",
  stream: "PCMC (Advanced Track)",
  email: "aarav.sharma24@vikasjc.edu.in",
  phone: "+91 98201 44521",
  station: "LAB04-DSK18",
};

export const urgentAdvisory =
  "HSC Pre-Board Examinations commence on October 15, 2024. Hall tickets are now available for verification and download under the Exam Schedule section. Ensure biometric verification status is marked complete prior to reporting.";

export const metrics = [
  {
    label: "Cumulative GPA",
    icon: "auto_graph",
    value: "3.82",
    valueSuffix: "/ 4.00",
    note: "Top 3% of Cohort",
    noteIcon: "trending_up",
    noteAccent: true,
  },
  {
    label: "Lab & Class Attendance",
    icon: "event_available",
    value: "98.4%",
    valueSuffix: "Aggregate",
    note: "Required threshold: 75.0%",
  },
  {
    label: "Eligibility Clearance",
    icon: "task_alt",
    headline: "Fully Cleared",
    note: "Zero Backlogs • Dues Settled",
    noteDot: true,
  },
  {
    label: "Exam Terminal Station",
    icon: "desktop_windows",
    mono: "LAN-Desk-18",
    note: "Digital Complex 04 (Floor 2)",
  },
];

export const hallTicket = {
  title: "Term Final Assessment Allocation (Oct-Nov 2024)",
  subtitle: "Validated Hall Ticket status authorized for Maharashtra State Higher Secondary Board",
  passNo: "Admit Pass #TX-24901",
  seat: { label: "Assigned Seat", value: "Row C • Seat 14", sub: "Central Exam Hall West" },
  center: { label: "Testing Center", value: "Campus II - Lab 04", sub: "Authorized LAN Station 18" },
  verification: {
    label: "Verification Status",
    value: "Counter-Signed & Sealed",
    sub: "Dean Dr. R. K. Varma (Oct 22)",
  },
  hash: "HASH: SHA256-8A99B23-VIKAS-2024-HSC-1082-OK",
  hashNote: "Ready for automated station turnstile scanner",
  barcodeText: "24JC1082-HSC",
};

// [x, width] pairs for the simulated barcode (viewBox 160x35)
export const barcodeBars = [
  [0, 4], [6, 2], [11, 5], [19, 2], [23, 3], [29, 6], [38, 2], [42, 4], [49, 2],
  [54, 5], [62, 3], [68, 2], [73, 6], [82, 4], [88, 2], [93, 3], [99, 5], [107, 2],
  [112, 4], [119, 6], [128, 2], [133, 3], [139, 5], [147, 2], [152, 4],
];

export const courses = [
  { abbr: "MTH", name: "Mathematics Advanced (Calculus & Vectors)", code: "MTH-12-301", faculty: "Prof. S. N. Deshmukh", credits: 6, syllabus: 94, score: 48 },
  { abbr: "PHY", name: "Physics (Optics, Mechanics & Modern)", code: "PHY-12-102", faculty: "Dr. Ananya Mukherjee", credits: 6, syllabus: 90, score: 47 },
  { abbr: "CHM", name: "Chemistry (Physical & Organic Synthesis)", code: "CHM-12-201", faculty: "Prof. K. R. Iyer", credits: 6, syllabus: 88, score: 45 },
  { abbr: "CSC", name: "Computer Science (Algorithms & C++)", code: "CS-12-P1", faculty: "Dr. P. Venkatesh", credits: 6, syllabus: 96, score: 50 },
  { abbr: "ENG", name: "Functional English & Technical Writing", code: "ENG-12-001", faculty: "Mrs. Shirley Fernandez", credits: 4, syllabus: 91, score: 46 },
];

export const biometrics = [
  { icon: "fingerprint", title: "Fingerprint Scan", sub: "Oct 15, 2024 • Matched", status: "ACTIVE" },
  { icon: "face", title: "Facial Mesh Model", sub: "Confidence: 99.82%", status: "ACTIVE" },
  { icon: "password", title: "Smart Pass 2FA PIN", sub: "Bound to Mobile Token", status: "READY" },
];

export const stationRows = [
  { label: "Registered Terminal:", value: "Workstation #18 (Lab 04)", valueClass: "font-mono font-semibold text-on-surface" },
  { label: "IP / Subnet Bind:", value: "192.168.104.18 (VLAN 40)", valueClass: "font-mono text-on-surface" },
  { label: "Network Gateway:", value: "Secured Offline Intranet", valueClass: "font-mono text-on-surface" },
  { label: "Browser Lockdown:", value: "SafeExamBrowser v3.4.1", valueClass: "text-secondary font-semibold" },
];

export const guardian = {
  initials: "RS",
  name: "Mr. Rajesh Sharma",
  relation: "Father / Primary Guardian",
  phone: "+91 98201 44521",
};
