// Dump DOM elements to variables
const landingPageLogo = document.getElementById("landing-page-logo");
const techCalendar = document.getElementById("tech-calendar");
const communityCalendar = document.getElementById("ena-calendar");
const audioArchives = document.getElementById("audio-archives");

function showTechCalendar() {
  // Close any currently open views
  landingPageLogo.classList.add("hidden");
  communityCalendar.classList.add("hidden");
  audioArchives.classList.add("hidden");
  // Remove hidden class from tech calendar
  techCalendar.classList.remove("hidden");
}

function closeTechCalendar() {
  // Close tech calendar
  techCalendar.classList.add("hidden");
  // Go back to landing page image
  landingPageLogo.classList.remove("hidden");
}

function showAudioArchives() {
  // Close any currently open views
  landingPageLogo.classList.add("hidden");
  techCalendar.classList.add("hidden");
  communityCalendar.classList.add("hidden");
  // Remove hidden class from tech calendar
  audioArchives.classList.remove("hidden");
}

function closeAudioArchives() {
  // Close audio archives
  audioArchives.classList.add("hidden");
  // Go back to landing page image
  landingPageLogo.classList.remove("hidden");
}

function showCommunityCalendar() {
  // Close any currently open views
  landingPageLogo.classList.add("hidden");
  techCalendar.classList.add("hidden");
  audioArchives.classList.add("hidden");
  // Remove hidden class from tech calendar
  communityCalendar.classList.remove("hidden");
}

function closeCommunityCalendar() {
  // Close ENA community calendar
  communityCalendar.classList.add("hidden");
  // Go back to landing page image
  landingPageLogo.classList.remove("hidden");
}