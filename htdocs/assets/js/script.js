// Initialize Google Map
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

// Navbar shrink on scroll
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('#hero');

  window.addEventListener('scroll', function() {
    if (window.scrollY > hero.offsetHeight) {
      navbar.classList.add('navbar-shrink');
    } else {
      navbar.classList.remove('navbar-shrink');
    }
  });

  // Trigger scroll event once to initialize state
  window.dispatchEvent(new Event('scroll'));
});

// Navbar toggler and dropdown chevron toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', function() {
    this.classList.toggle('open');
  });

  const dropdownToggles = document.querySelectorAll('.nav-link[data-bs-toggle="collapse"]');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const chevron = this.querySelector('.fa-chevron-down');
      if (chevron) {
        chevron.classList.toggle('rotate');
      }
    });
  });
});

// Intersection Observer for section fade-in
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});