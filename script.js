


// Navbar background effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#fff";
  } else {
    nav.style.background = "rgba(255,255,255,0.9)";
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
});



function sendMail() {
    // get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // ✅ check empty fields
    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields before sending.");
      return; // stop here
    }

    // ✅ email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // ✅ phone validation (7–15 digits only)
    const phonePattern = /^\+?\d{7,15}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (7 to 15 digits).");
      return;
    }

    // ✅ all good → send email
    const params = { name, email, phone, message };
    const serviceID = "service_8y3d5wu";
    const templateID = "template_ppj021j";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("contactForm").reset();
        console.log(res);
        alert("✅ Your message has been sent successfully!");
      })
      .catch(err => {
        console.error(err);
        alert("❌ Something went wrong. Please try again.");
      });
  }
  