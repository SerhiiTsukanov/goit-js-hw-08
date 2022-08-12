import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onInput), 500)
form.addEventListener("submit", onSubmit);

let formObject = {};
initForm();
// updateInputForm();


function onInput(evt) {
  evt.preventDefault();
 formObject[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
  console.log(formObject);
}

function initForm() {
  let persistedFilters = localStorage.getItem(STORAGE_KEY)
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
   Object.entries(persistedFilters).forEach (([name, value]) => {
    formObject[name] = value;
   form.elements[name].value = value;
   });
  }
}

function onSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;
  const formData = { email: email.value, message: message.value };

  if (email.value === '' || message.value === '') {
    return alert('Пожалуйста, заполните пустые строки!');
  }
  console.log('Отправляем форму: ', formData);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}

// function updateInputForm() {
//  const saveForm = localStorage.getItem(STORAGE_KEY);
//  const saveFormPars = JSON.parse(saveForm);

//  if(saveForm) {
//   form.elements.email.value = saveFormPars.email || '';
//   form.elements.message.value = saveFormPars.message || '';
//  };
// };


// function onInput(evt) {
//     evt.preventDefault();
//     const message = evt.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
// }

// function onSubmit(evt) {
//     evt.preventDefault();
//     const {
//         elements: { email, message },
//     } = evt.currentTarget;
//     const formData = { email: email.value, message: message.value };
//     console.log('отправка формы', formData);
//     evt.target.reset();
//     localStorage.removeItem(STORAGE_KEY)
// }

// function populateTextarea() {
//     const saveMessagr = localStorage.getItem(STORAGE_KEY);
//     if (saveMessagr) {
        
//     }
// }

