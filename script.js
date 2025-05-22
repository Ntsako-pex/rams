// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Animate stats on scroll
const statsSection = document.querySelector('.stats');
const statItems = document.querySelectorAll('.stat-item');

function animateStats() {
    statItems.forEach(item => {
        const target = +item.querySelector('h3').getAttribute('data-target');
        const count = +item.querySelector('h3').innerText;
        if (count < target) {
            item.querySelector('h3').innerText = Math.ceil(count + target / 50);
            setTimeout(animateStats, 30);
        } else {
            item.querySelector('h3').innerText = target;
        }
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    if (sectionPos < screenPos) {
        animateStats();
    }
});