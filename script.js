let currentTheme = localStorage.getItem("theme");
let html = document.documentElement;
let profilePicture = document.getElementById("profile-picture");
if (currentTheme == "light") {
  html.classList.toggle("light");
  profilePicture.setAttribute("src", "./assets/avatar-light.png");
}
if(currentTheme == null || currentTheme == "dark") {
  localStorage.setItem("theme", "dark");
  profilePicture.setAttribute("src", "./assets/avatar.png");
}

document.getElementById("switch").addEventListener("click", toggleTheme);

function toggleTheme() {
  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    currentTheme = "light";
    localStorage.setItem("theme", currentTheme);
  } else {
    currentTheme = "dark";
    localStorage.setItem("theme", currentTheme);
  }
  profilePicture.style.opacity = 0;
  setTimeout(() => {
    profilePicture.setAttribute("src", "./assets/avatar" + (currentTheme==='light' ? "-light" : "") + ".png");
    profilePicture.style.opacity = 1;
  }, 150);
}