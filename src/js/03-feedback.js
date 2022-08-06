import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const form = document.querySelector("input", "textarea")
const submit = document.querySelector("button")
console.log(form);


form.addEventListener("input", throttle(onInput, 500));
submit.addEventListener("submit", onSubmit);

function onInput(evt) {
    evt.preventDefault();
    const message = evt.target.value;

    localStorage.setItem("feedback-form-state", message);
}

function onSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, message },
    } = evt.currentTarget;
    const formData = { email: email.value, message: message.value };
    console.log('тправка формы');
    evt.target.reset("feedback-form-state");
    localStorage.removeItem()
}

function populateTextarea() {
    const saveMessagr = localStorage.getItem("feedback-form-state");
    if (saveMessagr) {
        
    }
}