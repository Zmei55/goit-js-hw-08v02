const STORAGE_KEY = 'feedback-form-state';

export default function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
