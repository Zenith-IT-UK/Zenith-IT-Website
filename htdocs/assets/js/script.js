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

  // Ensure Bootstrap's collapse functionality works for the mobile nav menu
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function (event) {
    // Prevent toggling if the menu is already transitioning
    if (navbarCollapse.classList.contains("collapsing")) {
      event.preventDefault();
      return;
    }

    // Toggle the menu visibility
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    } else {
      navbarCollapse.classList.add("show");
    }
  });

  // Close the mobile menu when a link is clicked
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
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
  const animateElements = document.querySelectorAll(".animate-section"); // updated selector
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
  animateElements.forEach(element => {
    animateObserver.observe(element);
  });

  // Dark mode toggle script
  const darkModeToggleDesktop = document.getElementById("darkModeToggleDesktop");
  const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
  const body = document.body;
  const iconDesktop = darkModeToggleDesktop.querySelector("i");
  const iconMobile = darkModeToggleMobile.querySelector("i");

  // Check local storage for saved mode and apply
  if (localStorage.getItem("darkMode") === "enabled" || 
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    body.classList.add("dark-mode");
    iconDesktop.classList.replace("fa-moon", "fa-sun");
    iconMobile.classList.replace("fa-moon", "fa-sun");
  }

  function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      iconDesktop.classList.replace("fa-moon", "fa-sun");
      iconMobile.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("darkMode", "enabled");
    } else {
      iconDesktop.classList.replace("fa-sun", "fa-moon");
      iconMobile.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("darkMode", "disabled");
    }
  }

  darkModeToggleDesktop.addEventListener("click", toggleDarkMode);
  darkModeToggleMobile.addEventListener("click", toggleDarkMode);

  // Remove custom cookie consent logic
  // const cookieDisclaimer = document.getElementById("cookieDisclaimer");
  // const acceptCookiesButton = document.getElementById("acceptCookies");
  // const declineCookiesButton = document.getElementById("declineCookies");
  // const settingsCookiesButton = document.getElementById("settingsCookies");
  // const cookieOverlay = document.getElementById("cookieOverlay");
  // const cookieSettingsMenu = document.getElementById("cookieSettingsMenu");
  // const backToConsentButton = document.getElementById("backToConsent");
  // const saveCookieSettingsButton = document.getElementById("saveCookieSettings");
  // // ...existing cookie consent check and event listeners...
});