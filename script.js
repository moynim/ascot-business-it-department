/* Slider */

const slide = document.getElementById("slide");
const dots = document.querySelectorAll(".dot");

if (slide) {
  const images = [
    "images/banner1.webp",
    "images/banner2.webp",
    "images/banner3.jpg",
  ];

  let current = 0;

  function updateSlider() {
    // Fade out
    slide.style.opacity = 0;

    setTimeout(() => {
      // Change image
      slide.src = images[current];

      // Update active dot
      dots.forEach((dot) => dot.classList.remove("active"));

      if (dots[current]) {
        dots[current].classList.add("active");
      }

      // Fade back in
      slide.style.opacity = 1;
    }, 400);
  }

  function nextSlide() {
    current++;

    if (current >= images.length) {
      current = 0;
    }

    updateSlider();
  }

  // Auto slideshow
  setInterval(nextSlide, 5000);

  // Make dots clickable
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      current = index;
      updateSlider();
    });
  });
}

/* Contact Form */

function sendEmail() {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const recipient = "ascothighbusdep@gmail.com";

  const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
