const burger = document.querySelector(".burger-btn");
const menu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});