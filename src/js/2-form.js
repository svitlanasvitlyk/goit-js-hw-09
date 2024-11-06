<<<<<<< Updated upstream
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const textInput = document.querySelector('textarea');

const localStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
input.value = savedData.email || '';
textInput.value = savedData.message || '';

input.addEventListener('focus', () => {
  input.placeholder = 'Type area';
});
input.addEventListener('blur', () => {
  input.placeholder = '';
=======
const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const textInput = document.querySelector("textarea");

const localStorageKey = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
input.value = savedData.email || "";
textInput.value = savedData.message || "";

input.addEventListener("focus", () => {
  input.placeholder = "Type area";
});
input.addEventListener("blur", () => {
  input.placeholder = "";
>>>>>>> Stashed changes
});

function saveForm() {
  const formData = {
    email: input.value,
    message: textInput.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

<<<<<<< Updated upstream
input.addEventListener('input', saveForm);
textInput.addEventListener('input', saveForm);

form.addEventListener('submit', submitBtn);
=======
input.addEventListener("input", saveForm);
textInput.addEventListener("input", saveForm);

form.addEventListener("submit", submitBtn);
>>>>>>> Stashed changes

function submitBtn(event) {
  event.preventDefault();
  const email = input.value.trim();
  const message = textInput.value.trim();
<<<<<<< Updated upstream
  if (email === '' || message === '') {
    return alert('Email field must be filled in');
=======
  if (email === "" || message === "") {
    return alert("Email field must be filled in");
>>>>>>> Stashed changes
  }

  const userData = {
    email,
    message,
  };

  console.log(userData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
