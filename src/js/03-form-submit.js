import { STORAGE_KEY } from './03-form-data-key';

export default function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
