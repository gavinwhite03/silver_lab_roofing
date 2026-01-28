import '../css/styles.css'

// Simple Review Slider
let currentReview = 0;
const reviews = document.querySelectorAll(".review-card");

function showReview() {
  reviews.forEach(r => r.style.display = "none");
  reviews[currentReview].style.display = "block";
  currentReview = (currentReview + 1) % reviews.length;
}

if (reviews.length > 0) {
  showReview();
  setInterval(showReview, 4000);
}

// Fade-in animation on scroll
const cards = document.querySelectorAll(".service-card-img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));
