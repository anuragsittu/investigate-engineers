// ===============================
// MOBILE MENU TOGGLE
// ===============================
console.log("Script Loaded");
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ===============================
// CLOSE MENU ON LINK CLICK
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,0.95)";
    }

});

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute("id");

        const currentLink =
            document.querySelector(
                `.nav-links a[href*=${sectionId}]`
            );

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {

            navLinks.forEach(link =>
                link.classList.remove("active")
            );

            if (currentLink) {
                currentLink.classList.add("active");
            }
        }
    });
});

// ===============================
// SMOOTH REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".service-card, .product-card, .why-card, .about-card, .contact-info, .contact-form"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// CONTACT FORM
// ===============================

// EMAILJS CONTACT FORM

emailjs.init("YoOCQiNi9LZSdj-QE");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_43rbc8l",
        "template_nszcncp",
        this
    )
    .then(() => {

        alert("Inquiry sent successfully!");

        contactForm.reset();

    })
    .catch((error) => {

        alert("Failed to send inquiry.");
        console.log(error);

    });

});

// ===============================
// WHATSAPP BUTTON
// ===============================

const whatsappBtn =
    document.querySelector(".whatsapp-btn");

if (whatsappBtn) {

    whatsappBtn.href =
        "https://wa.me/919711055840";

}

// ===============================
// YEAR AUTO UPDATE (OPTIONAL)
// ===============================

const yearElement =
    document.querySelector(".current-year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}