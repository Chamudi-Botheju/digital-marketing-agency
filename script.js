
// ======================
// SAFE ELEMENT CHECK
// ======================
function $(selector) {
    return document.querySelector(selector);
}


// ======================
// SMOOTH SCROLL BUTTONS
// ======================
const servicesBtn = $(".secondary-btn");
const contactBtn = $(".nav-btn");
const primaryBtn = $(".primary-btn");

if (servicesBtn) {
    servicesBtn.addEventListener("click", function () {
        document.querySelector("#services")
        .scrollIntoView({ behavior: "smooth" });
    });
}

if (contactBtn) {
    contactBtn.addEventListener("click", function () {
        document.querySelector("#contact")
        .scrollIntoView({ behavior: "smooth" });
    });
}

if (primaryBtn) {
    primaryBtn.addEventListener("click", function () {
        document.querySelector("#contact")
        .scrollIntoView({ behavior: "smooth" });
    });
}


// ======================
// EMAILJS FORM SUBMISSION
// ======================
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const templateParams = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
            "service_bjkoogp",
            "template_858svqu",
            templateParams
        )
        .then(() => {

            alert("Message sent successfully 🚀");

            form.reset();

        })
        .catch((error) => {

            console.log("EmailJS Error:", error);

            alert("Failed to send message. Try again.");

        });

    });
}


// ======================
// NAVBAR SHADOW ON SCROLL
// ======================
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
    }

});


// ======================
// FADE-IN ANIMATION
// ======================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});