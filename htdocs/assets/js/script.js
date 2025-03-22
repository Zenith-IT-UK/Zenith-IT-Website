// Google Maps Initialization
function initMap() {
  var birmingham = { lat: 52.4862, lng: -1.8904 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: birmingham,
  });
  var marker = new google.maps.Marker({
    position: birmingham,
    map: map,
  });
}

window.onload = initMap;

// Execute when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Navbar shrink on scroll
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector("#hero");

  window.addEventListener("scroll", function () {
    if (window.scrollY > hero.offsetHeight) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  });

  // Trigger scroll event once to initialize state
  window.dispatchEvent(new Event("scroll"));

  // Navbar toggler animation
  const toggler = document.querySelector(".navbar-toggler");
  toggler.addEventListener("click", function () {
    this.classList.toggle("open");
  });

  // Dropdown chevron toggle for mobile
  const dropdownToggles = document.querySelectorAll('.nav-link[data-bs-toggle="collapse"]');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      const chevron = this.querySelector(".fa-chevron-down");
      if (chevron) {
        chevron.classList.toggle("rotate");
      }
    });
  });

  // Intersection Observer for section fade-in effect
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach(section => {
    observer.observe(section);
  });

  // Intersection Observer for section animation
  const animateSections = document.querySelectorAll("section.animate-section");
  const animateObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          animateObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animateSections.forEach(section => {
    animateObserver.observe(section);
  });

  // Dark mode toggle script
  const darkModeToggleDesktop = document.getElementById("darkModeToggleDesktop");
  const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
  const darkModeTextDesktop = document.getElementById("darkModeTextDesktop");
  const darkModeTextMobile = document.getElementById("darkModeTextMobile");
  const body = document.body;
  const iconDesktop = darkModeToggleDesktop.querySelector("i");
  const iconMobile = darkModeToggleMobile.querySelector("i");

  // Check local storage for saved mode and apply
  if (localStorage.getItem("darkMode") === "enabled" || 
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    body.classList.add("dark-mode");
    darkModeTextDesktop.textContent = "Day Mode";
    darkModeTextMobile.textContent = "Day Mode";
    iconDesktop.classList.replace("fa-moon", "fa-sun");
    iconMobile.classList.replace("fa-moon", "fa-sun");
  }

  function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      darkModeTextDesktop.textContent = "Day Mode";
      darkModeTextMobile.textContent = "Day Mode";
      iconDesktop.classList.replace("fa-moon", "fa-sun");
      iconMobile.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeTextDesktop.textContent = "Night Mode";
      darkModeTextMobile.textContent = "Night Mode";
      iconDesktop.classList.replace("fa-sun", "fa-moon");
      iconMobile.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("darkMode", "disabled");
    }
  }

  darkModeToggleDesktop.addEventListener("click", toggleDarkMode);
  darkModeToggleMobile.addEventListener("click", toggleDarkMode);

  // Cookie Disclaimer
  const cookieDisclaimer = document.getElementById("cookieDisclaimer");
  const acceptCookiesButton = document.getElementById("acceptCookies");
  const declineCookiesButton = document.getElementById("declineCookies");
  const settingsCookiesButton = document.getElementById("settingsCookies");
  const cookieOverlay = document.getElementById("cookieOverlay");
  const cookieSettingsMenu = document.getElementById("cookieSettingsMenu");
  const backToConsentButton = document.getElementById("backToConsent");
  const saveCookieSettingsButton = document.getElementById("saveCookieSettings");

  // Check for existing cookie choice
  const cookieChoice = localStorage.getItem("cookiesAccepted");
  if (cookieChoice === null) {
    cookieDisclaimer.style.display = "flex";
    cookieOverlay.style.display = "block";
    document.body.classList.add("blur");
  } else {
    // If a choice exists, hide the cookie banner
    cookieDisclaimer.style.display = "none";
    cookieOverlay.style.display = "none";
    document.body.classList.remove("blur");
  }

  function fadeOutConsent() {
    cookieDisclaimer.style.opacity = "0";
    cookieOverlay.style.opacity = "0";
    setTimeout(() => {
      cookieDisclaimer.style.display = "none";
      cookieOverlay.style.display = "none";
      document.body.classList.remove("blur");
    }, 500);
  }

  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    fadeOutConsent();
  });

  declineCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "false");
    fadeOutConsent();
  });

  // Toggle the Cookie Settings Menu without redirecting
  settingsCookiesButton.addEventListener("click", function () {
    cookieSettingsMenu.style.display = "block";
    const consentActions = document.querySelector(".cookie-actions");
    if (consentActions) consentActions.style.display = "none";
  });

  // Back button returns to default consent view
  backToConsentButton.addEventListener("click", function () {
    cookieSettingsMenu.style.display = "none";
    const consentActions = document.querySelector(".cookie-actions");
    if (consentActions) consentActions.style.display = "flex";
  });

  // Save Settings just hides the settings menu (and could store individual settings)
  saveCookieSettingsButton.addEventListener("click", function () {
    // Optional: Save individual settings in localStorage here.
    cookieSettingsMenu.style.display = "none";
    const consentActions = document.querySelector(".cookie-actions");
    if (consentActions) consentActions.style.display = "flex";
  });
});