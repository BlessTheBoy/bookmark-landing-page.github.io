const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
document.querySelector("#hamburger").addEventListener("click", openNav);
document.querySelector("#close").addEventListener("click", closeNav);

function openNav() {
  header.classList.add("open");
  nav.classList.add("open");
}
function closeNav() {
  header.classList.remove("open");
  nav.classList.remove("open");
}
