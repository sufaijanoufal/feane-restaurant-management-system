import * as model from './authModel.js';

export const initLogin = () => {
  const form = document.getElementById('loginForm');

  console.log('FORM:', form);

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log('SUBMIT WORKING');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await model.login(email, password);

      console.log('LOGIN SUCCESS');

      window.location.assign('/admin/index.html');

    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  });
};
export const initLogout = () => {
  const logoutBtn = document.querySelector('[data-logout]');

  if (!logoutBtn) return;

  logoutBtn.addEventListener('click', async () => {
    await model.logout();

    window.location.assign('/admin/login.html');
  });
};
// PROTECT PAGE
export const protectPage = async () => {
  try {
    await model.getMe();
  } catch (err) {
    window.location.assign('/admin/login.html');
  }
};
export const renderLoggedInUser = async () => {
  try {
    const data = await model.getMe();

    const userEl = document.getElementById('loggedInUser');

    if (userEl) {
      userEl.textContent = userEl.textContent = data.data.name;;
    }
  } catch (err) {
    console.error(err);
  }
};