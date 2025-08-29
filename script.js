// Smooth scroll to section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 70; // navbar height approx
  const bodyRect = document.body.getBoundingClientRect().top;
  const elRect = el.getBoundingClientRect().top;
  const elPosition = elRect - bodyRect;
  const offsetPosition = elPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  // Close mobile menu if open
  hideMobileMenu();
}

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkModeToggle.textContent = ☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkModeToggle.textContent = "🌙";
  }
});

// Load theme preference
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    darkModeToggle.textContent = "☀️";
  } else {
    document.documentElement.classList.remove("dark");
    darkModeToggle.textContent = "🌙";
  }
});

// Mobile menu toggle
const mobileToggleBtn = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");

mobileToggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Hide mobile menu on link click
function hideMobileMenu() {
  if (mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
  }
}

// Contact Form submission simulation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple validation (HTML5 also ensures this)
  if (
    !contactForm.name.value.trim() ||
    !contactForm.email.value.trim() ||
    !contactForm.message.value.trim()
  ) {
    formMessage.textContent = "Please fill all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.style.color = ""; // reset
  formMessage.textContent = "Sending message...";

  setTimeout(() => {
    formMessage.textContent = "Thanks for reaching out! We'll get back to you soon.";
    contactForm.reset();
  }, 1500);
});

// Navbar background change on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
