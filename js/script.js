const hamburgerIcon = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  navList.classList.toggle("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hamburgerIcon.classList.remove("active");
    navList.classList.remove("active");
  });
});
