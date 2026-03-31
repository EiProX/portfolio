const navLinks = document.getElementById('navLinks');
const burger = document.querySelector('.burger');
const yearTarget = document.getElementById('currentYear');

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

function toggleMenu() {
  navLinks.classList.toggle('active');
  const expanded = navLinks.classList.contains('active');
  burger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('click', (event) => {
  const clickedInsideNav = event.target.closest('nav');
  if (!clickedInsideNav && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  }
});
