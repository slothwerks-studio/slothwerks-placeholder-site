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

// Display audio player based on id passed in via argument
function showAudioPlayer(id) {
  // Fetch audio players from the DOM
  const hackShow2016 = document.getElementById("hack-show-2016");
  const psychedelicBreakfast = document.getElementById("psychedelic-breakfast");
  const arabianNights = document.getElementById("arabian-nights");
  const arcoIris = document.getElementById("arco-iris");
  // Fetch "now playing" message from the DOM
  const nowPlaying = document.getElementById("now-playing");
  // If the player is not the currently selected one, hide it
  if (hackShow2016.id !== id) { hackShow2016.classList.add("hidden"); }
  if (psychedelicBreakfast.id !== id) { psychedelicBreakfast.classList.add("hidden"); }
  if (arabianNights.id !== id) { arabianNights.classList.add("hidden"); }
  if (arcoIris.id !== id) { arcoIris.classList.add("hidden"); }
  // Unhide currently selected player
  const playerId = document.getElementById(id);
  playerId.classList.remove("hidden");
  // Create now playing message
  let showName;
  if (id === "hack-show-2016") { showName = "The Sloth Psychedelic HACK! Show (2016)"}
  if (id === "psychedelic-breakfast") { showName = "Sloth's Psychedelic Breakfast (2007)"}
  if (id === "arabian-nights") { showName = "1001 Arabian Nights (2005)"}
  if (id === "arco-iris") { showName = "Sloth and Eric Newton Live at Arco Iris (1999)"}
  const nowPlayingMessage = "Now playing: " + showName;
  // Insert message into the DOM
  nowPlaying.innerHTML = nowPlayingMessage;
}