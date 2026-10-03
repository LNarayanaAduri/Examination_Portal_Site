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
