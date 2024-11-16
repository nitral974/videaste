document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__link");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu--active");
    nav.classList.toggle("nav--open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("burger-menu--active");
      nav.classList.remove("nav--open");
    });
  });
});
