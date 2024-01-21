

import throttle from 'lodash.throttle';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const keyLocalStorage = "feedback-form-state";

const formEl = document.querySelector('form');
const textareaEl = document.querySelector('textarea');
const inputsEl = {
    name: Array.from(document.querySelectorAll('.backdrop__input'))[0],
    telephone: Array.from(document.querySelectorAll('.backdrop__input'))[1],
    email: Array.from(document.querySelectorAll('.backdrop__input'))[2],
};
const chekInputEl = document.querySelector('#signature')

let data = {
    name: '',
    telephone: '',
    email: '',
    message: ''
};

const storageSet = () => {
    data.name = inputsEl.name.value
    data.telephone = inputsEl.telephone.value
    data.email = inputsEl.email.value
    data.message = textareaEl.value
    localStorage.setItem(keyLocalStorage, JSON.stringify(data))
}

const storageGet = () => {

    if (localStorage.getItem(keyLocalStorage)) {
        const parseData = JSON.parse(localStorage.getItem(keyLocalStorage))
        inputsEl.name.value = parseData.name
        inputsEl.telephone.value = parseData.telephone
        inputsEl.email.value = parseData.email
        textareaEl.value = parseData.message
    }
}

iziToast.settings({
    position: 'topRight',
});


storageGet()

localStorage.removeItem(keyLocalStorage)

formEl.addEventListener('input', throttle(function sayMamba(event) {
    if (event.target === textareaEl || Object.values(inputsEl).includes(event.target)) {
        storageSet()
    } else {
        return;
    }
}, 500));

formEl.addEventListener('submit', (event) => {
    event.preventDefault()


    if ((!inputsEl.name.value || !inputsEl.telephone.value || !inputsEl.email.value || !textareaEl.value)) {
        return iziToast.error({
            title: 'Error',
            message: 'Please fill in the blank input fields',
        });
    }
    if (!chekInputEl.checked) {
        return iziToast.info({
            title: 'Hello',
            message: 'Please agree to the privacy policy!',
        });
    }
    iziToast.success({
        title: 'Success',
        message: 'Data sent successfully!',
    });
    localStorage.removeItem(keyLocalStorage)
    console.log(data)
    formEl.reset()
})





