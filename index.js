const menu = document.querySelector(".nav-menu");
const toggle = document.querySelector(".menu-toggle");
const spaceToggle = document.querySelector(".space-toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

spaceToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
