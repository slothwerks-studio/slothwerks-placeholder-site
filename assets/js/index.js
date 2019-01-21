// Dump DOM elements to variables
const menu = document.getElementById("menu");
const contentContainer = document.getElementById("contentContainer");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");

// Toggle the nav menu
// If not currently displayed, display the nav and hide the content container
// Also flip the menu button to a "close" button
// If currently displayed, show the content container and hide the nav menu
// Flip the menu close button to standard "menu" button
function toggleMenu() {
  if (menu.className.includes("hidden")) {
    // Hide content container
    contentContainer.classList.add("hidden");
    // Show menu
    menu.classList.remove("hidden");
    // Hide open menu button
    openMenuButton.classList.add("hidden");
    // Show close menu button
    closeMenuButton.classList.remove("hidden");
  } else {
    // Scroll to top of page
    window.scrollTo(0,0);
    // Hide menu
    menu.classList.add("hidden");
    // Show content container
    contentContainer.classList.remove("hidden");
    // Hide close menu button
    closeMenuButton.classList.add("hidden");
    // Show open menu button
    openMenuButton.classList.remove("hidden");
  }
}
