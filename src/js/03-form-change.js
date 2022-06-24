import { STORAGE_KEY, FormData } from './03-form-data-key';

const STORAGE_KEY = 'feedback-form-state';

export default function onFormChange(event) {
  if (event.target.nodeName === 'INPUT') {
    FormData.EMAIL = event.target.value;
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
  }

  if (event.target.nodeName === 'TEXTAREA') {
    FormData.MESSAGE = event.target.value;
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
  }
}
