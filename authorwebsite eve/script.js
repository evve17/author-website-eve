const navLinks = document.querySelector(".nav");
const lines = document.querySelector(".burger");

lines.addEventListener("click", () => {
  navLinks.classList.toggle("nav--open");
  lines.classList.toggle("burger--open");
});

// navLinks.addEventListener("click", () => {
//   navLinks.classList.remove("nav--open");
//   lines.classList.remove("burger--open");
// });
