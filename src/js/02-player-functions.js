const STORAGE_KEY = 'videoplayer-current-time';

export function savedTime({ seconds }) {
  return setStorage(seconds);
}

function setStorage(seconds) {
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
}

export function getStorage() {
  return localStorage.getItem(STORAGE_KEY);
}
