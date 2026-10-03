// Realistic exam detail mock database
const examDetails = {
  'CS-2024-T1': {
    title: 'Computer Science Paper I',
    code: 'CS-2024-T1',
    score: '94',
    maxScore: '100',
    percentile: '96.8%',
    percentileVal: 96.8,
    rank: 'Rank 14 / 450',
    s1: { name: 'Section 1: MCQ & Fundamentals', score: '30 / 30 (100%)', pct: '100%', detail: 'Questions Attempted: 30/30' },
    s2: { name: 'Section 2: Data Structures & Logic', score: '40 / 45 (88.8%)', pct: '88.8%', detail: 'Questions Attempted: 45/45' },
    s3: { name: 'Section 3: Algorithm Design', score: '24 / 25 (96%)', pct: '96%', detail: 'Questions Attempted: 5/5' },
    remark: 'Outstanding performance in boolean logic and tree structures. Minor syntax deduction in question 14.',
    instructor: 'Prof. V. Raghavan'
  },
  'PHY-2024-T1': {
    title: 'Physics Mid-Term Exam',
    code: 'PHY-2024-T1',
    score: '88',
    maxScore: '100',
    percentile: '91.4%',
    percentileVal: 91.4,
    rank: 'Rank 38 / 450',
    s1: { name: 'Section 1: Kinematics & Laws of Motion', score: '28 / 30 (93.3%)', pct: '93.3%', detail: 'Questions Attempted: 30/30' },
    s2: { name: 'Section 2: Thermodynamics & Fluid Mech', score: '36 / 40 (90%)', pct: '90%', detail: 'Questions Attempted: 40/40' },
    s3: { name: 'Section 3: Numerical Derivations', score: '24 / 30 (80%)', pct: '80%', detail: 'Questions Attempted: 6/6' },
    remark: 'Good analytical breakdown in projectile motion. Improve step documentation in second law derivations.',
    instructor: 'Dr. Sunita Rao'
  },
  'CHEM-2024-T1': {
    title: 'Chemistry Unit Test',
    code: 'CHEM-2024-T1',
    score: '85',
    maxScore: '100',
    percentile: '89.1%',
    percentileVal: 89.1,
    rank: 'Rank 52 / 450',
    s1: { name: 'Section 1: Atomic Models & Bonding', score: '26 / 30 (86.7%)', pct: '86.7%', detail: 'Questions Attempted: 30/30' },
    s2: { name: 'Section 2: Organic Reaction Mechanisms', score: '35 / 40 (87.5%)', pct: '87.5%', detail: 'Questions Attempted: 40/40' },
    s3: { name: 'Section 3: Stoichiometric Calculation', score: '24 / 30 (80%)', pct: '80%', detail: 'Questions Attempted: 5/5' },
    remark: 'Proficient grasp of hybridization and resonance. Practice dimensional analysis in gas law equilibrium.',
    instructor: 'Prof. K. N. Murthy'
  },
  'MATH-2024-T1': {
    title: 'Mathematics Prep Exam',
    code: 'MATH-2024-T1',
    score: '91',
    maxScore: '100',
    percentile: '95.2%',
    percentileVal: 95.2,
    rank: 'Rank 21 / 450',
    s1: { name: 'Section 1: Differential Calculus', score: '30 / 30 (100%)', pct: '100%', detail: 'Questions Attempted: 30/30' },
    s2: { name: 'Section 2: Vectors & 3D Geometry', score: '37 / 40 (92.5%)', pct: '92.5%', detail: 'Questions Attempted: 40/40' },
    s3: { name: 'Section 3: Probability Distribution', score: '24 / 30 (80%)', pct: '80%', detail: 'Questions Attempted: 5/5' },
    remark: 'Exemplary clarity in continuous limits and trigonometric substitution proofs. Highly recommended for Olympiad squad.',
    instructor: 'Prof. S. R. Iyengar'
  },
  'ENG-2024-T1': {
    title: 'English Literature & Rhetoric',
    code: 'ENG-2024-T1',
    score: '79',
    maxScore: '100',
    percentile: '81.5%',
    percentileVal: 81.5,
    rank: 'Rank 84 / 450',
    s1: { name: 'Section 1: Reading Comprehension', score: '26 / 30 (86.7%)', pct: '86.7%', detail: 'Questions Attempted: 30/30' },
    s2: { name: 'Section 2: Critical Poetry Commentary', score: '31 / 40 (77.5%)', pct: '77.5%', detail: 'Questions Attempted: 40/40' },
    s3: { name: 'Section 3: Discursive Essay', score: '22 / 30 (73.3%)', pct: '73.3%', detail: 'Questions Attempted: 1/1' },
    remark: 'Insightful thematic synthesis of Victorian motifs. Work on transition pacing between argument paragraphs.',
    instructor: 'Dr. Anita Das'
  }
};

function selectExam(examId) {
  const data = examDetails[examId];
  if (!data) return;

  // Highlight row
  document.querySelectorAll('.result-row').forEach(row => {
    if (row.getAttribute('data-exam-id') === examId) {
      row.classList.add('bg-secondary/5');
      row.querySelector('button').classList.remove('text-on-surface-variant');
      row.querySelector('button').classList.add('text-secondary');
    } else {
      row.classList.remove('bg-secondary/5');
      row.querySelector('button').classList.add('text-on-surface-variant');
      row.querySelector('button').classList.remove('text-secondary');
    }
  });

  // Populate Right Panel
  document.getElementById('panelExamId').textContent = data.code;
  document.getElementById('panelExamTitle').textContent = data.title;
  document.getElementById('panelScore').textContent = data.score;
  document.getElementById('panelDonutText').textContent = data.percentile;
  
  // Animate SVG Donut
  const circle = document.getElementById('donutCircle');
  circle.setAttribute('stroke-dasharray', `${data.percentileVal}, 100`);

  // Sections
  document.getElementById('s1Name').textContent = data.s1.name;
  document.getElementById('s1Score').textContent = data.s1.score;
  document.getElementById('s1Bar').style.width = data.s1.pct;

  document.getElementById('s2Name').textContent = data.s2.name;
  document.getElementById('s2Score').textContent = data.s2.score;
  document.getElementById('s2Bar').style.width = data.s2.pct;

  document.getElementById('s3Name').textContent = data.s3.name;
  document.getElementById('s3Score').textContent = data.s3.score;
  document.getElementById('s3Bar').style.width = data.s3.pct;

  // Remark
  document.getElementById('panelRemark').innerHTML = `&ldquo;${data.remark}&rdquo;`;
}

// Filter Table functionality
const searchInput = document.getElementById('searchInput');
const subjectFilter = document.getElementById('subjectFilter');
const tableRows = document.querySelectorAll('.result-row');

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  const subject = subjectFilter.value;

  tableRows.forEach(row => {
    const rowSubject = row.getAttribute('data-subject');
    const text = row.textContent.toLowerCase();

    const matchesSearch = query === '' || text.includes(query);
    const matchesSubject = subject === 'All' || rowSubject === subject;

    if (matchesSearch && matchesSubject) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', applyFilters);
subjectFilter.addEventListener('change', applyFilters);

// Term Tab switching
const tabTerm1 = document.getElementById('tabTerm1');
const tabTerm2 = document.getElementById('tabTerm2');
const term1View = document.getElementById('term1View');
const term2View = document.getElementById('term2View');
const statsBanner = document.getElementById('statsBanner');

function switchTab(term) {
  if (term === 'term1') {
    tabTerm1.className = 'font-label-md text-label-md px-space-md py-space-xs rounded-lg bg-primary text-on-primary shadow-sm transition-all flex items-center gap-space-xs';
    tabTerm2.className = 'font-label-md text-label-md px-space-md py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all';
    term1View.classList.remove('hidden');
    term2View.classList.add('hidden');
    statsBanner.classList.remove('hidden');
  } else {
    tabTerm2.className = 'font-label-md text-label-md px-space-md py-space-xs rounded-lg bg-primary text-on-primary shadow-sm transition-all flex items-center gap-space-xs';
    tabTerm1.className = 'font-label-md text-label-md px-space-md py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all';
    term1View.classList.add('hidden');
    term2View.classList.remove('hidden');
    statsBanner.classList.add('hidden');
  }
}

tabTerm1.addEventListener('click', () => switchTab('term1'));
tabTerm2.addEventListener('click', () => switchTab('term2'));

// Toast feedback micro-interaction
function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  toastMessage.textContent = message;
  toastIcon.textContent = isSuccess ? 'check_circle' : 'info';
  toastIcon.className = isSuccess ? 'material-symbols-outlined text-secondary-fixed text-[20px]' : 'material-symbols-outlined text-error text-[20px]';

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3200);
}

function handleDownloadPDF() {
  const currentCode = document.getElementById('panelExamId').textContent;
  showToast(`Generating certified PDF for ${currentCode}...`);
}

function handleReeval() {
  const currentCode = document.getElementById('panelExamId').textContent;
  showToast(`Re-evaluation request lodged for ${currentCode}. Acknowledgment: #REV-${Math.floor(1000 + Math.random() * 9000)}`);
}
