function togglePasswordVisibility() {
  const input = document.getElementById('password');
  const icon = document.getElementById('pwd-icon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.innerText = 'visibility_off';
  } else {
    input.type = 'password';
    icon.innerText = 'visibility';
  }
}

function selectRole(role) {
  const studentBtn = document.getElementById('tab-student');
  const staffBtn = document.getElementById('tab-staff');
  const heading = document.getElementById('portal-heading');
  const subheading = document.getElementById('portal-subheading');
  const labelIdentifier = document.getElementById('label-identifier');
  const identifierInput = document.getElementById('identifier');
  const btnLabel = document.getElementById('button-label');

  if (role === 'student') {
    if (studentBtn) studentBtn.className = 'px-3.5 py-1.5 rounded-md font-label-sm text-label-sm font-semibold transition-all duration-200 bg-surface-container-lowest text-primary shadow-sm flex items-center gap-1.5';
    if (staffBtn) staffBtn.className = 'px-3.5 py-1.5 rounded-md font-label-sm text-label-sm font-semibold transition-all duration-200 text-on-surface-variant hover:text-on-surface flex items-center gap-1.5';
    
    if (heading) heading.innerText = 'Sign In to Student Portal';
    if (subheading) subheading.innerText = 'Access scheduled mid-terms, test analytics, and verified hall passes.';
    if (labelIdentifier) labelIdentifier.innerText = 'Student Roll Number or College Email';
    if (identifierInput) identifierInput.placeholder = 'e.g. 24JC-1082 or aarav.sharma@vikasjc.edu.in';
    if (btnLabel) btnLabel.innerText = 'Sign In to Student Portal';
  } else {
    if (staffBtn) staffBtn.className = 'px-3.5 py-1.5 rounded-md font-label-sm text-label-sm font-semibold transition-all duration-200 bg-surface-container-lowest text-primary shadow-sm flex items-center gap-1.5';
    if (studentBtn) studentBtn.className = 'px-3.5 py-1.5 rounded-md font-label-sm text-label-sm font-semibold transition-all duration-200 text-on-surface-variant hover:text-on-surface flex items-center gap-1.5';
    
    if (heading) heading.innerText = 'Sign In to Staff & Evaluator Portal';
    if (subheading) subheading.innerText = 'Invigilator oversight console, live batch proctoring, and paper marking.';
    if (labelIdentifier) labelIdentifier.innerText = 'Faculty Employee Code / Vikas Official ID';
    if (identifierInput) identifierInput.placeholder = 'e.g. FAC-209 or registrar@vikasjc.edu.in';
    if (btnLabel) btnLabel.innerText = 'Sign In to Faculty Console';
  }
}

function triggerAuth() {
  const btn = document.getElementById('submit-button');
  const btnLabel = document.getElementById('button-label');
  const originalText = btnLabel.innerText;
  btnLabel.innerText = 'Verifying Credentials...';
  btn.disabled = true;
  btn.classList.add('opacity-80');
  setTimeout(() => {
    btnLabel.innerText = originalText;
    btn.disabled = false;
    btn.classList.remove('opacity-80');
    alert('Secure Station Verification complete. Proceeding to Examination Dashboard.');
  }, 1000);
}
