import throttle from 'lodash.throttle';
import refs from './refs';
import onFormChange from './03-form-change';
import populateForm from './03-populate-form';
import onFormSubmit from './03-form-submit';

refs.formEl.addEventListener('input', throttle(onFormChange, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

populateForm();
