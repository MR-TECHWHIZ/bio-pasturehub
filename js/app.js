// ===== MOBILE NAV TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ===== FAQ ACCORDION =====
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// ===== SIMPLE SCROLL-REVEAL ANIMATION =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Handle Contact Form Submission
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button temporarily
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Send data to Formspree
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('✅ Thank you! Your message has been sent successfully.');
      form.reset();
    } else {
      alert('❌ There was a problem submitting your form. Please try again.');
    }

    // Re-enable button
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
  });
}
// Handle Contact Form Submission with SweetAlert2
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for reaching out to Bio-Pasture Hub. We’ll get back to you soon.',
        confirmButtonColor: '#1b9448'
      });
      form.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'There was a problem sending your message. Please try again later.',
        confirmButtonColor: '#1b9448'
      });
    }

    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
  });
}



