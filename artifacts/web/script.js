/* Slider */

const images = [
  "images/banner1.webp",
  "images/banner2.webp",
  "images/banner3.jpg",
];

let current = 0;

const slide = document.getElementById("slide");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  // Fade out
  slide.style.opacity = 0;

  setTimeout(() => {
    // Change image
    slide.src = images[current];

    // Update active dot
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[current].classList.add("active");

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
