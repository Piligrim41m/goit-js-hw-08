import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);



function onFormInput(event) {
  const formData = {}
  formData.email = event.elements.email.value
  formData.message = event.elements.message.value
  // formData[event.target.name] = event.target.value
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
  console.log(localStorage.getItem("feedback-form-state"))
  
}

function onFormSubmit(event) {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("feedback-form-state"));
  const email = document.querySelector(".feedback-form input");
    const message = document.querySelector(".feedback-form textarea");
  if (data) {
    // email.value = data.email !== undefined ? data.email : "";
    // message.value = data.message !== undefined ? data.message : "";
    email.value = data.email;
    message.value = data.message;
  }
})();





