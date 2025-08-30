// Smooth scroll helper with navbar offset
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const navHeight = document.querySelector('nav').offsetHeight || 70;
  const destination = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;

  window.scrollTo({ top: destination, behavior: 'smooth' });

  // Close mobile menu if open
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
    mobileBtn.setAttribute('aria-expanded', 'false');
  }
}

// Dark mode toggle with localStorage persistence
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    darkModeToggle.textContent = '🌙';
  } else {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    darkModeToggle.textContent = '☀️';
  }
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    darkModeToggle.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    darkModeToggle.textContent = '🌙';
  }
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('ul.nav-menu');

mobileBtn.addEventListener('click', () => {
  const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
  mobileBtn.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('show');
});

// Contact form submission simulation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    !contactForm.name.value.trim() ||
    !contactForm.email.value.trim() ||
    !contactForm.message.value.trim()
  ) {
    formMessage.style.color = '#D66A6A';
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  formMessage.style.color = '#7C9ED9';
  formMessage.textContent = 'Sending message...';

  setTimeout(() => {
    formMessage.textContent = "Thank you! We'll get back to you soon.";
    contactForm.reset();
  }, 1800);
});
