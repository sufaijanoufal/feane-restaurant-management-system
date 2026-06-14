import { API_URL } from '../../config.js';

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  return await res.json();
};
export const logout = async () => {
  await fetch(`${API_URL}/users/logout`, {
    method: 'GET',
    credentials: 'include'
  });
};
// GET CURRENT USER
export const getMe = async () => {
  const res = await fetch(`${API_URL}/users/me`, {
    credentials: 'include'
  });

  if (!res.ok) throw new Error('Not logged in');

  return await res.json();
};