const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  console.log("asd");
  navBar.classList.toggle("show-nav");
});
