const burgerBtn = document.getElementById("humbergerMenu");
const navMenu = document.querySelector("#navMenu");
burgerBtn.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const btnTop = document.querySelector("#backToTop");
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    btnTop.classList.remove("hidden");
    btnTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    btnTop.classList.remove("flex");
    btnTop.classList.add("hidden");
  }
};

window.addEventListener("click", function (e) {
  console.log(e.target.closest("#humbergerMenu"));
  if (
    burgerBtn.classList.contains("hamburger-active") &&
    !navMenu.classList.contains("hidden") &&
    !e.target.closest("#humbergerMenu")
  ) {
    if (!e.target.closest("#navMenu")) {
      burgerBtn.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  }
});

const btnDarkMode = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

btnDarkMode.addEventListener("click", function () {
  if (this.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  btnDarkMode.checked = true;
} else {
  btnDarkMode.checked = false;
}
