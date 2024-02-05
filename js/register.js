import { changeTheme } from "./utlites/darkMode.module.js";
import {
  regexAge,
  regexEmail,
  regexName,
  regexPass,
  validation,
} from "./utlites/validation.module.js";

const inputs = document.querySelectorAll("input");
const btnRegister = document.getElementById("btnRegister");
const formData = document.forms[0];
let isValid = false;

formData.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isValid == true) {
    setForm();
  }
});

formData.addEventListener("input", function () {
  if (
    validation(inputs[0], regexName) &&
    validation(inputs[1], regexName) &&
    validation(inputs[2], regexEmail) &&
    validation(inputs[3], regexPass) &&
    validation(inputs[4], regexAge)
  ) {
    isValid = true;
  } else {
    isValid = false;
  }
});

function setForm() {
  const user = {
    first_name: inputs[0].value,
    last_name: inputs[1].value,
    email: inputs[2].value,
    password: inputs[3].value,
    age: inputs[4].value,
  };
  console.log(user);
  registerForm(user);
}

async function registerForm(userData) {
  const api = await fetch(`https://movies-api.routemisr.com/signup`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const response = await api.json();

  if (response.message == "success") {
    location.href = "./index.html";
  } else {
    const msg = document.getElementById("msg");
    msg.innerHTML = response.errors?.email.message;
  }
  console.log(response);
}

/****************************************************/

//dark mode
mode.addEventListener("click", changeTheme);
