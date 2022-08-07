import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STOREGE_KEY = "feedback-form-state";

const submit = document.querySelector(".feedback-form")

form.addEventListener("input", throttle(onInput, 500));
submit.addEventListener("submit", onSubmit);

function onInput(evt) {
    evt.preventDefault();
    const message = evt.target.value;

    localStorage.setItem(STOREGE_KEY, message);
}

function onSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, message },
    } = evt.currentTarget;
    const formData = { email: email.value, message: message.value };
    console.log('тправка формы', formData);
    evt.target.reset();
    localStorage.removeItem(STOREGE_KEY)
}

function populateTextarea() {
    const saveMessagr = localStorage.getItem(STOREGE_KEY);
    if (saveMessagr) {
        
    }
}