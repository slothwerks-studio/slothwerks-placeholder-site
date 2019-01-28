// Dump DOM elements to variables
const menu = document.getElementById("menu");
const contentContainer = document.getElementById("contentContainer");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const landing = document.getElementById("landing");
const about = document.getElementById("about");
const techCalendar = document.getElementById("techCalendar");
const enaCalendar = document.getElementById("enaCalendar");
const audioArchives = document.getElementById("audioArchives");

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

// Navigation functionality
// Takes in argument of desired view
// Hides any current view and shows desired content
// Expected arguments:  landing, about, techCalendar, enaCalendar, audioArchives
function navigation(content) {
  console.log("Show content for " + content + ".");
  if (content === "landing") {
    // The following should work regardless if current view is already landing
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    landing.classList.remove("hidden");
    // If menu is currently displayed, hide it and scroll to top of page
    // We do not use togglemenu here, as this option is not in the menu (it's in the logo in the header bar)
    window.scrollTo(0,0);
    menu.classList.add("hidden");
    contentContainer.classList.remove("hidden");
    closeMenuButton.classList.add("hidden");
    openMenuButton.classList.remove("hidden");
  } else if (content === "about") {
    // The following should work regardless if current view is already about
    landing.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    about.classList.remove("hidden");
    toggleMenu();
  } else if (content === "techCalendar") {
    // The following should work regardless if current view is already techCalendar
    landing.classList.add("hidden");
    about.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    techCalendar.classList.remove("hidden");
    toggleMenu();
  } else if (content === "enaCalendar") {
    // The following should work regardless if current view is already enaCalendar
    landing.classList.add("hidden");
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    enaCalendar.classList.remove("hidden");
    toggleMenu();
  } else if (content === "audioArchives") {
    // The following should work regardless if current view is already audioArchives
    landing.classList.add("hidden");
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.remove("hidden");
    toggleMenu();
  } else {
    // If argument is unexpected, show landing page
    console.log(content + " is not an expected argument for content.");
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    landing.classList.remove("hidden");
    toggleMenu();
  }
}
