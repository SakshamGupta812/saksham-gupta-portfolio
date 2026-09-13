

console.log("Saksham Gupta Portfolio Loaded");


const aiCard = document.querySelector(".ai-card");

document.addEventListener("mousemove", (event) => {

    if (!aiCard || window.innerWidth < 900) return;

    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    aiCard.style.transform = `
        translate(${x * 4}px, ${y * 4}px)
    `;
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-grid, " +
    ".about-stats, " +
    ".skills-layout, " +
    ".learning-bar, " +
    ".featured-project, " +
    ".project-card, " +
    ".other-work, " +
    ".experience-header, " +
    ".timeline-item, " +
    ".certifications, " +
    ".achievement-strip, " +
    ".contact-intro, " +
    ".contact-card, " +
    ".site-footer"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll(
    "#about, #skills, #projects, #experience, #contact"
);

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("open");
        mobileNav.classList.toggle("open");

        const isOpen = mobileNav.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });



    mobileNav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("open");
            mobileNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");



        });

    });

}