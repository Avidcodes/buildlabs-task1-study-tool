// Mobile menu stuff
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinksList = document.getElementById('navLinksList');

hamburgerBtn.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
  hamburgerBtn.classList.toggle('active');
});

// Close menu when you click a link
document.querySelectorAll('.nav-item').forEach((link) => {
  link.addEventListener('click', () => {
    navLinksList.classList.remove('open');
    hamburgerBtn.classList.remove('active');
  });
});
