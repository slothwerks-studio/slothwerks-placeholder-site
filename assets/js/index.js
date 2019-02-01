// Dump DOM elements to variables
const menu = document.getElementById("menu");
const footer = document.getElementById("footer");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const landing = document.getElementById("landing");
const about = document.getElementById("about");
const techCalendar = document.getElementById("techCalendar");
const enaCalendar = document.getElementById("enaCalendar");
const audioArchives = document.getElementById("audioArchives");

// Declare currentView; set to "landing" as default
// Actually loading the element here rather than a string
let currentView = landing;

// Toggle the mobile nav menu
function toggleMenu() {
  // If not currently displayed, display the nav and hide the current content view
  // Also flip the menu button to a "close" button
  // If currently displayed, re-load current view and hide the nav menu
  // Flip the menu close button to standard "menu" button
  if (menu.className.includes("hidden")) {
    console.log("Show mobile nav menu.");
    // Hide current content view
    currentView.classList.add("hidden");
    // Hide footer
    footer.classList.add("hidden");
    // Show menu
    menu.classList.remove("hidden");
    // Hide open menu button
    openMenuButton.classList.add("hidden");
    // Show close menu button
    closeMenuButton.classList.remove("hidden");
  } else {
    console.log("Hide mobile nav menu.");
    // Scroll to top of page
    window.scrollTo(0,0);
    // Hide menu
    menu.classList.add("hidden");
    // Re-load current content
    currentView.classList.remove("hidden");
    // Unhide footer
    footer.classList.remove("hidden");
    // Hide close menu button
    closeMenuButton.classList.add("hidden");
    // Show open menu button
    openMenuButton.classList.remove("hidden");
  }
}

// Close the mobile nav menu
// Need to break this out for compatibility for tablet and desktop menu
function closeMenu() {
  console.log("Hide mobile nav menu.");
  // Scroll to top of page
  window.scrollTo(0,0);
  // Hide menu
  menu.classList.add("hidden");
  // Re-load current content
  currentView.classList.remove("hidden");
  // Unhide footer
  footer.classList.remove("hidden");
  // Hide close menu button
  closeMenuButton.classList.add("hidden");
  // Show open menu button
  openMenuButton.classList.remove("hidden");
}

// Navigation functionality
// Takes in argument of desired view
// Hides any current view and shows desired content
// Expected arguments:  landing, about, techCalendar, enaCalendar, audioArchives
function navigation(view) {
  console.log("Show view for " + view + ".");
  if (view === "landing") {
    currentView = landing; // Update current view
    // The following should work regardless if current view is already landing
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    landing.classList.remove("hidden");
    // If menu is currently displayed, hide it and scroll to top of page
    closeMenu();
  } else if (view === "about") {
    currentView = about; // Update current view
    // The following should work regardless if current view is already about
    landing.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    about.classList.remove("hidden");
    closeMenu()
  } else if (view === "techCalendar") {
    currentView = techCalendar; // Update current view
    // The following should work regardless if current view is already techCalendar
    landing.classList.add("hidden");
    about.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    techCalendar.classList.remove("hidden");
    closeMenu()
  } else if (view === "enaCalendar") {
    currentView = enaCalendar;
    // The following should work regardless if current view is already enaCalendar
    landing.classList.add("hidden");
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    enaCalendar.classList.remove("hidden");
    closeMenu()
  } else if (view === "audioArchives") {
    currentView = audioArchives; // Update current view
    // The following should work regardless if current view is already audioArchives
    landing.classList.add("hidden");
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.remove("hidden");
    closeMenu()
  } else {
    currentView = "landing";
    // If argument is unexpected, show landing page
    console.log(view + " is not an expected argument for content; re-routing to landing page.");
    about.classList.add("hidden");
    techCalendar.classList.add("hidden");
    enaCalendar.classList.add("hidden");
    audioArchives.classList.add("hidden");
    landing.classList.remove("hidden");
    closeMenu()
  }
}
