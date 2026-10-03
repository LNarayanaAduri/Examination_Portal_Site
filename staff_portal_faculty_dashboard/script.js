(function syncFacultyShellContext() {
  try {
    const aside = document.querySelector('aside');
    if (aside) {
      const brandText = aside.querySelector('.font-headline-sm');
      if (brandText) brandText.textContent = "Vikas Faculty";
      const subText = aside.querySelector('.font-label-sm');
      if (subText) subText.textContent = "Junior College Examination Portal";

      const nav = aside.querySelector('nav');
      if (nav) {
        nav.innerHTML = `
          <a href="#" class="flex items-center px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md font-semibold transition-colors">
            <span class="material-symbols-outlined mr-space-sm text-[20px]" style="font-variation-settings: 'FILL' 1;">dashboard</span>
            Dashboard
          </a>
          <a href="#" class="flex items-center px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-md text-body-md">
            <span class="material-symbols-outlined mr-space-sm text-[20px]">insights</span>
            Student Performance
          </a>
        `;
      }

      const profileName = aside.querySelector('.font-label-md.truncate');
      if (profileName) profileName.textContent = "Dr. Rajesh K. Varma";

      const profileBadge = aside.querySelector('.font-label-sm.text-\\[10px\\]');
      if (profileBadge) {
        profileBadge.textContent = "Faculty (Mathematics)";
        profileBadge.className = "inline-flex items-center w-max px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] uppercase font-semibold";
      }

      const profileCol = profileName?.parentElement;
      if (profileCol && !profileCol.querySelector('.profile-email-label')) {
        const emailSpan = document.createElement('span');
        emailSpan.className = 'font-code-sm text-[11px] text-on-surface-variant truncate profile-email-label';
        emailSpan.textContent = 'rajesh.v@vikasjc.edu.in';
        profileCol.appendChild(emailSpan);
      }
    }

    const headerBreadcrumb = document.querySelector('header .font-body-sm');
    if (headerBreadcrumb) {
      headerBreadcrumb.innerHTML = `
        <span class="font-label-md text-label-md text-on-surface">Staff Portal</span>
        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
        <span class="font-body-sm text-body-sm text-on-surface">Academic Faculty & Section Performance</span>
      `;
    }
  } catch (err) {
    console.warn("Shell synchronization notice:", err);
  }
})();

function handleStudentSearch(query) {
  const q = query.trim().toLowerCase();
  const rows = document.querySelectorAll('.student-record');
  const emptyCard = document.getElementById('emptySearchCard');
  const table = document.getElementById('studentPerformanceTable');
  const countBadge = document.getElementById('studentCountBadge');
  let visibleCount = 0;

  rows.forEach(row => {
    const name = (row.getAttribute('data-name') || '').toLowerCase();
    const roll = (row.getAttribute('data-roll') || '').toLowerCase();
    if (name.includes(q) || roll.includes(q)) {
      row.classList.remove('hidden');
      visibleCount++;
    } else {
      row.classList.add('hidden');
    }
  });

  if (visibleCount === 0) {
    table.classList.add('hidden');
    emptyCard.classList.remove('hidden');
    countBadge.textContent = 'Showing 0 Students in Class 12-A';
  } else {
    table.classList.remove('hidden');
    emptyCard.classList.add('hidden');
    countBadge.textContent = `Showing ${visibleCount} Student${visibleCount === 1 ? '' : 's'} in Class 12-A`;
  }
}

function applyInteractiveFilters() {
  const cls = document.getElementById('filterClass').value;
  const emptyCard = document.getElementById('emptySearchCard');
  const table = document.getElementById('studentPerformanceTable');
  const statHighest = document.getElementById('statHighestVal');
  const statLowest = document.getElementById('statLowestVal');
  const statAvg = document.getElementById('statAvgVal');

  if (cls === 'EMPTY') {
    table.classList.add('hidden');
    emptyCard.classList.remove('hidden');
    statHighest.textContent = "—";
    statLowest.textContent = "—";
    statAvg.textContent = "0.0%";
  } else if (cls === '12-B') {
    table.classList.remove('hidden');
    emptyCard.classList.add('hidden');
    statHighest.textContent = "92";
    statLowest.textContent = "48";
    statAvg.textContent = "74.8%";
    handleStudentSearch('');
  } else {
    table.classList.remove('hidden');
    emptyCard.classList.add('hidden');
    statHighest.textContent = "98";
    statLowest.textContent = "42";
    statAvg.textContent = "79.4%";
    handleStudentSearch('');
  }
}

function resetInteractiveFilters() {
  const form = document.getElementById('analyticsFilterForm');
  if (form) form.reset();
  const search = document.getElementById('studentSearchInput');
  if (search) search.value = '';
  applyInteractiveFilters();
}

function demoEmptyViewTrigger() {
  const search = document.getElementById('studentSearchInput');
  if (search) search.value = '';
  handleStudentSearch('');
}

function toggleExportMenu() {
  const menu = document.getElementById('exportMenu');
  if (menu) menu.classList.toggle('hidden');
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('exportMenu');
  if (menu && !menu.contains(e.target) && !e.target.closest('button[onclick*="toggleExportMenu"]')) {
    menu.classList.add('hidden');
  }
});

function openExamAnswerSheet(roll, name, score) {
  const modal = document.getElementById('answerSheetModal');
  const nameEl = document.getElementById('modalStudentName');
  const metaEl = document.getElementById('modalStudentMeta');
  const scoreEl = document.getElementById('modalScoreDisplay');

  if (nameEl) nameEl.textContent = name;
  if (metaEl) metaEl.textContent = `Roll: ${roll} • Class 12-A (PCMB)`;
  if (scoreEl) scoreEl.textContent = `${score} / 100`;

  if (modal) modal.classList.remove('hidden');
}

function closeExamAnswerSheet() {
  const modal = document.getElementById('answerSheetModal');
  if (modal) modal.classList.add('hidden');
}
