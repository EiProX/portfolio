// Scroll fluide vers les ancres
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });

    // Ferme le menu mobile après clic
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Fonction pour toggle le menu burger
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}
