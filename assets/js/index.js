// Dump DOM elements to variables
const landingPageLogo = document.getElementById("landing-page-logo");
const techCalendar = document.getElementById("tech-calendar");
const enaCalendar = document.getElementById("ena-calendar");
const audioArchives = document.getElementById("audio-archives");

function showTechCalendar() {
  // Close any currently open views
  landingPageLogo.classList.add("hidden");
  enaCalendar.classList.add("hidden");
  audioArchives.classList.add("hidden");
  // Remove hidden class from tech calendar
  techCalendar.classList.remove("hidden");
}

function showArchives() {
  // Close any currently open views
  landingPageLogo.classList.add("hidden");
  techCalendar.classList.add("hidden");
  enaCalendar.classList.add("hidden");
  // Remove hidden class from tech calendar
  audioArchives.classList.remove("hidden");
}

function showCommunityCalendar() {
  // Close any currently open views
  landingPageLogo.classList.add("hidden");
  techCalendar.classList.add("hidden");
  audioArchives.classList.add("hidden");
  // Remove hidden class from tech calendar
  enaCalendar.classList.remove("hidden");
}