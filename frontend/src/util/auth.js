import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const expiration = new Date(localStorage.getItem('expiration'));
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}
