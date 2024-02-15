const burgerBtn = document.getElementById("humbergerMenu");
const navMenu = document.querySelector("#navMenu");
burgerBtn.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
