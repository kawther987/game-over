import { changeTheme } from "./utlites/darkMode.module.js";
import {
  regexEmail,
  regexPass,
  validation,
} from "./utlites/validation.module.js";

const inputs = document.querySelectorAll("input");
const btnLogin = document.getElementById("btnLogin");
const formData = document.forms[0];
let isValid = false;


formData.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isValid == true) {
    setForm();
  }
});

formData.addEventListener("input", function () {
  if (validation(email, regexEmail) && validation(password, regexPass)) {
    isValid = true;
  } else {
    isValid = false;
  }
});

function setForm() {
  const user = {
    email: inputs[0].value,
    password: inputs[1].value,
  };
  console.log(user);
  loginForm(user);
}

async function loginForm(userData) {
  const api = await fetch(`https://movies-api.routemisr.com/signin`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const response = await api.json();

  if (response.message == "success") {
    localStorage.setItem("userName", response.token);
    location.href = "./home.html";
  } else {
    const msg = document.getElementById("msg");
    msg.innerHTML = response.message;
  }
  console.log(response);
}

/****************************************************/
//dark mode
mode.addEventListener("click" , changeTheme);
