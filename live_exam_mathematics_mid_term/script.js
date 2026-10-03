(function initExamEngine() {
  // Countdown Timer Logic (1 hour 18 min 42 sec = 4722 seconds)
  let totalSeconds = 4722;
  const timerDisplay = document.getElementById('countdown-text');
  const timerPill = document.getElementById('exam-timer-pill');
  const modalTime = document.getElementById('modal-remaining-time');

  function formatTime(sec) {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    return [hrs, mins, secs].map(v => String(v).padStart(2, '0')).join(':');
  }

  const timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      if (timerDisplay) timerDisplay.textContent = '00:00:00';
      return;
    }
    totalSeconds--;
    const formatted = formatTime(totalSeconds);
    if (timerDisplay) timerDisplay.textContent = formatted;
    if (modalTime) modalTime.textContent = formatted;

    // Visual warning alert state if < 10 mins (600 seconds)
    if (totalSeconds < 600 && timerPill) {
      timerPill.classList.remove('bg-surface-container', 'text-secondary');
      timerPill.classList.add('bg-error-container', 'text-on-error-container', 'border-error');
    }
  }, 1000);

  // Submit Confirmation Modal triggers
  const submitBtn = document.getElementById('trigger-submit-modal');
  const submitModal = document.getElementById('submit-confirm-modal');
  const cancelModalBtn = document.getElementById('cancel-submit-modal');

  if (submitBtn && submitModal) {
    submitBtn.addEventListener('click', () => {
      submitModal.classList.remove('hidden');
    });
  }

  if (cancelModalBtn && submitModal) {
    cancelModalBtn.addEventListener('click', () => {
      submitModal.classList.add('hidden');
    });
  }

  // Formula Sheet Modal toggles
  const formulaBtn = document.getElementById('open-formula-btn');
  const formulaModal = document.getElementById('formula-modal');
  const closeFormulaBtn = document.getElementById('close-formula-btn');
  const closeFormulaBottomBtn = document.getElementById('close-formula-bottom-btn');

  function toggleFormulaModal(show) {
    if (!formulaModal) return;
    if (show) {
      formulaModal.classList.remove('hidden');
    } else {
      formulaModal.classList.add('hidden');
    }
  }

  if (formulaBtn) formulaBtn.addEventListener('click', () => toggleFormulaModal(true));
  if (closeFormulaBtn) closeFormulaBtn.addEventListener('click', () => toggleFormulaModal(false));
  if (closeFormulaBottomBtn) closeFormulaBottomBtn.addEventListener('click', () => toggleFormulaModal(false));

  // Quick Scientific Calculator toast notification
  const calcBtn = document.getElementById('open-calc-btn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      alert('Built-in Scientific Calculator overlay active. Candidate workspace initialized.');
    });
  }
})();
