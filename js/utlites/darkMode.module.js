const mode = document.getElementById("mode");

if (localStorage.getItem("theme") != null) {
  const themeData = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", themeData);
  if (themeData == "light") {
    mode.classList.replace("fa-sun", "fa-moon");
  }
} else {
  mode.classList.replace("fa-moon", "fa-sun");
}

export function changeTheme() {
  if (mode.classList.contains("fa-sun")) {
    document.documentElement.setAttribute("data-theme", "light");
    mode.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    mode.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
}
