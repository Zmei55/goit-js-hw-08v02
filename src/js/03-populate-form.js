import { STORAGE_KEY } from './03-form-data-key';
import refs from './refs';

export default function populateForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage?.EMAIL) {
    refs.formEl.children[0].firstElementChild.value = savedMessage.EMAIL;
  }

  if (savedMessage?.MESSAGE) {
    refs.formEl.children[1].firstElementChild.value = savedMessage.MESSAGE;
  }
}
