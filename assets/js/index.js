// Dump DOM elements to variables
const menu = document.getElementById("menu");

function toggleMenu() {
  if (menu.className.includes("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}
