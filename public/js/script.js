// INTERSECTION OBSERVER
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // 1. Counters
            if (entry.target.classList.contains('counter')) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }

            // 2. City Pills Container (New Logic)
            if (entry.target.classList.contains('areas-container')) {
                entry.target.classList.add('visible'); // Adds the class that triggers CSS stagger
                observer.unobserve(entry.target);
            }

            // 3. General Scroll Animations
            if (entry.target.classList.contains('animate-on-scroll')) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Function to animate numbers (Keep this as is)
function runCounter(el) {
    const target = +el.getAttribute('data-target');
    const duration = 2000;
    const increment = target / (duration / 16);

    let current = 0;
    const update = () => {
        current += increment;
        if (current < target) {
            el.innerText = Math.ceil(current);
            requestAnimationFrame(update);
        } else {
            el.innerText = target;
        }
    };
    update();
}

// Start observing
document.addEventListener('DOMContentLoaded', () => {
    // Observe Counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => observer.observe(counter));

    // Observe Area Pills Container
    const areaContainer = document.querySelector('.areas-container');
    if (areaContainer) observer.observe(areaContainer);

    // Observe Scroll Animations (New)
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(el => observer.observe(el));
});

// ===============================
// IMAGE LIGHTBOX (PROJECT GALLERY)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (!lightbox || !lightboxImg) return;

    document.querySelectorAll('.detail-gallery img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    // Close on click
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});
// ===============================
// CONTACT FORM → WHATSAPP (PREFILLED)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        const whatsappNumber = "919000446586"; // YOUR NUMBER (no +)

        const text = `
New Enquiry — Sai Saman Infra

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
        `.trim();

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, '_blank');
    });
});

// ===============================
// CAREERS FORM → WHATSAPP (PREFILLED)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    const careersForm = document.getElementById('careersForm');
    if (!careersForm) return;

    careersForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const role = document.getElementById('role').value.trim();
        const portfolio = document.getElementById('link').value.trim();
        const resumeLink = document.getElementById('resumeLink').value.trim();


        const whatsappNumber = "919000446586"; // HR / Company WhatsApp (no +)

        const text = `
New Career Application — Sai Saman Infra

Name: ${name}
Email: ${email}
Role / Specialization: ${role}
Portfolio / LinkedIn:
${portfolio || "Not provided"}

Resume (Drive link):
${resumeLink || "Not provided"}
        `.trim();

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, '_blank');
    });
});
// ===============================
// MOBILE HAMBURGER MENU
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
});

// ===============================
// CURTAIN NAVBAR LOGIC (DETAIL PAGES)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    // Logic: If the navbar already has the class 'curtain-hidden' (from server), 
    // we just need to handle the toggle.

    // Or we can keep the detection backup
    const navbar = document.querySelector('.navbar');
    const toggleBtn = document.getElementById('curtainToggle');

    if (navbar && toggleBtn) {
        // Toggle Click Event
        toggleBtn.addEventListener('click', () => {
            navbar.classList.toggle('curtain-hidden');

            // Optional: If opened, maybe remove the bounce animation?
            // The bounce is on .navbar.curtain-hidden .toggle-arrow
            // So removing .curtain-hidden stops the bounce automatically.
        });
    }
});
