// JavaScript for the carousel effect
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function nextSlide() {
    // Reset all slides to remove active class
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);
