// ----------------------
// SKILL BAR ANIMATION
// ----------------------
const skillLevels = document.querySelectorAll(".skill-level");

function animateSkills() {
    skillLevels.forEach(skill => {
        const level = skill.getAttribute("data-level");
        skill.style.width = level;
    });
}

// Trigger animation on scroll
window.addEventListener("scroll", () => {
    const skillsSection = document.querySelector("#skills");
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos - 100) {
        animateSkills();
    }
});

// ----------------------
// BACK TO TOP BUTTON
// ----------------------
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ----------------------
// THEME TOGGLE
// ----------------------
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ----------------------
// PROJECT CARD CLICK
// ----------------------
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if (link) {
            window.open(link, "_blank");
        }
    });
});

// ----------------------
// IMAGE SLIDER
// ----------------------
const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]; // Add your slide images here
let currentSlide = 0;

const slideImage = document.getElementById("slideImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(index) {
    if (index < 0) currentSlide = images.length - 1;
    else if (index >= images.length) currentSlide = 0;
    else currentSlide = index;

    slideImage.src = images[currentSlide];
}

prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

// ----------------------
// CONTACT FORM
// ----------------------
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let msgBox = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        msgBox.style.color = "red";
        msgBox.innerText = "Please fill out all fields.";
        return;
    }

    // Store data in localStorage
    localStorage.setItem("formName", name);
    localStorage.setItem("formEmail", email);
    localStorage.setItem("formMessage", message);

    // Redirect to form-details page
    window.location.href = "form-details.html";
});

// ----------------------
// CANVAS EXAMPLE ANIMATION
// ----------------------
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = 50;
let y = 50;
let dx = 2;
let dy = 2;

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#4b7bec";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    if (x + 20 > canvas.width || x - 20 < 0) dx = -dx;
    if (y + 20 > canvas.height || y - 20 < 0) dy = -dy;

    x += dx;
    y += dy;

    requestAnimationFrame(drawCanvas);
}

drawCanvas();
