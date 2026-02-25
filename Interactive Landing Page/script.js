const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 2000,
});

const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
        form.reset();
    }
});
const counters = document.querySelectorAll(".count");
let started = false;

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M+";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K+";
    } else {
        return num + "+";
    }
}

window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;
    const sectionTop = statsSection.offsetTop;

    if (window.scrollY > sectionTop - window.innerHeight + 100 && !started) {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 150;

            const update = () => {
                count += increment;

                if (count < target) {
                    counter.innerText = formatNumber(Math.floor(count));
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = formatNumber(target);
                }
            };

            update();
        });

        started = true;
    }
});
const modal = document.getElementById("modal");
const buyBtns = document.querySelectorAll(".buy-btn");
const closeModal = document.getElementById("close-modal");

buyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function closeModalFunction() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeModal.addEventListener("click", closeModalFunction);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModalFunction();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModalFunction();
    }
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
const modalEmail = document.getElementById("modal-email");
const modalSubmit = document.getElementById("modal-submit");
const modalMessage = document.getElementById("modal-message");

modalSubmit.addEventListener("click", () => {
    if (modalEmail.value === "") {
        modalMessage.style.color = "red";
        modalMessage.textContent = "Please enter your email";
    } else {
        modalMessage.style.color = "green";
        modalMessage.textContent = "Free Trial Started!";
        modalEmail.value = "";
    }
});