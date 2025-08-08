document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        this.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});




document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Thank you! I will get back to you.";
        formMessage.style.color = "green";
        this.reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    }
});



let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
    const carousel = document.getElementById("projectCarousel");
    if (index < 0) currentSlide = slides.length - 1;
    else if (index >= slides.length) currentSlide = 0;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        this.reset();
    } else {
        formMessage.textContent = "Please fill all fields.";
        formMessage.style.color = "red";
    }
});
