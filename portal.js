document.querySelectorAll('#year').forEach((node) => node.textContent = new Date().getFullYear());

const terms = document.querySelector('#terms-form');
if (terms) terms.addEventListener('submit', (event) => {
  if (!document.querySelector('#accept').checked) event.preventDefault();
});

const show = document.querySelector('#show');
if (show) show.addEventListener('click', () => {
  const field = document.querySelector('#password');
  const hidden = field.type === 'password';
  field.type = hidden ? 'text' : 'password';
  show.textContent = hidden ? 'Hide' : 'Show';
});

const form = document.querySelector('#login-form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('#username').value.trim().toLowerCase();
  const password = document.querySelector('#password').value;
  const error = document.querySelector('#login-error');
  const status = document.querySelector('#status');
  const usernamePattern = /^(cs|ec|ee|me|ce)\d{2}[bm]\d{4}$/;
  error.hidden = true;
  status.hidden = true;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  if (!usernamePattern.test(username)) {
    error.textContent = 'Use cs, ec, ee, me or ce + a two-digit entry year + b/m + a four-digit roll number (for example, cs23b1045).';
    error.hidden = false;
    return;
  }
  if (password !== `${username}@nitpy!`) {
    error.textContent = 'For this local demo, the password is your lowercase username followed by @nitpy!.';
    error.hidden = false;
    return;
  }
  document.querySelector('#connected-user').textContent = username.toUpperCase();
  status.hidden = false;
  form.classList.add('is-connected');
  document.querySelector('#step-signin').classList.remove('active');
  document.querySelector('#step-signin').classList.add('done');
  document.querySelector('#step-signin b').textContent = '✓';
  document.querySelector('#step-connect').classList.add('active');
});
