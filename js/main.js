const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const form = document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});
const email = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const inputContainer = document.getElementById("input-container");
document.querySelector("#hamburger").addEventListener("click", openNav);
document.querySelector("#close").addEventListener("click", closeNav);

function openNav() {
  header.classList.add("open");
  nav.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeNav() {
  header.classList.remove("open");
  nav.classList.remove("open");
  document.body.style.overflow = "auto";
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function setError(message) {
  inputContainer.className = "input-container error";
  errorMessage.innerText = message;
}

function setSuccess() {
  inputContainer.className = "input-container";
}

function validateInput() {
  let emailValue = email.value.trim();
  if (emailValue === "") {
    setError("Email name cannot be blank");
  } else if (!validateEmail(emailValue)) {
    setError("Whoops, make sure it's an email");
  } else {
    setSuccess();
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("featureCard");
  var toggle = document.getElementsByClassName("slider__toggle");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    toggle[i].classList.remove("activeToggle");
  }

  slides[n - 1].style.display = "block";
  toggle[n - 1].classList.add("activeToggle");
}
