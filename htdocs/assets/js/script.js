document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.navbar-nav .dropdown');

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('show.bs.dropdown', function () {
      var dropdownMenu = this.querySelector('.dropdown-menu');
      dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('hide.bs.dropdown', function () {
      var dropdownMenu = this.querySelector('.dropdown-menu');
      dropdownMenu.classList.remove('show');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', function() {
    this.classList.toggle('open');
  });
});