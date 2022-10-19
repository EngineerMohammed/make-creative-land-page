let img = document.querySelector(".img");
let container = document.querySelector(".container");

function change(phone) {
  img.src = phone;
}

function colors(e) {
  container.style.background = e;
}
