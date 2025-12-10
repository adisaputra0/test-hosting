// Animate On Scroll
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 600
    });
}

// Loading
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.querySelector('.progress-bar');
    loadingBar.style.width = '100%';

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 500);
    // Remove from DOM after transition
    setTimeout(() => {
        loadingScreen.remove();
    }, 1000);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Back to top button show
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu function
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

// Typed JS (Hero Section)
if (typeof Typed !== "undefined") {
    if (window.innerWidth <= 768) {
        document.getElementById("typed-element").textContent = "AI-driven.";
    } else {
        var typed = new Typed("#typed-element", {
            strings: [
                "AI-driven.",
                "intelligent.",
                "adaptive.",
                "unbreakable.",
                "invisible.",
                "always-on.",
                "future-ready.",
                "bulletproof.",
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
        });
    }
}

// GSAP (Hero Section)
if (typeof gsap !== "undefined") {
    if (document.querySelector(".shield-container")) {
        gsap.to(".shield-container", {
            y: -20,
            rotation: 5,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
    }
    if (document.querySelector(".packets-container")) {
        gsap.to(".packets-container", {
            y: -20,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
    }
    document.querySelectorAll(".floating-element").forEach((el) => {
        function floatRandom() {
            gsap.to(el, {
                x: gsap.utils.random(-20, 20),
                y: gsap.utils.random(-30, 10),
                duration: gsap.utils.random(2, 4),
                ease: "sine.inOut",
                onComplete: floatRandom,
            });
        }
        floatRandom();
    });
}


// Swiper JS (Partner Section)
if (typeof Swiper !== "undefined") {
    new Swiper('.logos-swiper', {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 5000,
        breakpoints: {
            1024: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 4,
            },
            480: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            }
        }
    });

    new Swiper(".swiper-screenshot", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });

}

// Billing Toggle Functionality (Products Section)
document.addEventListener('DOMContentLoaded', function () {
    const billingSwitch = document.getElementById('billing-switch');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');

    if (billingSwitch) {
        billingSwitch.addEventListener('change', function () {
            if (this.checked) {
                // Show yearly prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                yearlyPrices.forEach(price => price.style.display = 'inline');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'inline');
                yearlyPrices.forEach(price => price.style.display = 'none');
            }
        });
    }
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        // Simulate form submission
        const button = this.querySelector('button');
        const originalHTML = button.innerHTML;

        button.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i>';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = '<i class="bx bx-check"></i>';
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.disabled = false;
                this.reset();
            }, 2000);
        }, 1000);

        console.log('Newsletter subscription:', email);
    });
}

// Register
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        const targetId = icon.getAttribute('data-target');
        const input = document.getElementById(targetId);

        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("bx-hide");
            icon.classList.add("bx-show");
        } else {
            input.type = "password";
            icon.classList.remove("bx-show");
            icon.classList.add("bx-hide");
        }
    });
});

//Validate password and confirm password
if (document.getElementById("register-form")) {
    const modal = document.getElementById("error-modal");
    const closeBtn = document.getElementById("close-error");

    document.getElementById("register-form").addEventListener("submit", function (event) {
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        if (password !== confirmPassword) {
            event.preventDefault();

            // Show Modal
            modal.classList.add("show");
            gsap.set(".modal-content", {
                scale: 0.8,
                opacity: 0
            });
            gsap.to(".modal-content", {
                duration: 0.4,
                scale: 1,
                opacity: 1,
                ease: "power2.out"
            });
        }
    });

    // Close Modal
    closeBtn.addEventListener("click", () => {
        gsap.to(".modal-content", {
            duration: 0.3,
            scale: 0.8,
            opacity: 0,
            ease: "power2.in",
            onComplete: () => {
                modal.classList.remove("show");
            }
        });
    });
}

//Login with Google or Microsoft
if (document.querySelector(".social-login")) {
    document.querySelectorAll(".social-login button").forEach(element => {
        element.addEventListener("click", () => {
            window.location.href = "dashboard.html";
        });
    });
}

//Fancybox in detail products
if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {
        Thumbs: true,
    });
}

//FAQ in detail products
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current item
    if (isActive) {
        faqItem.classList.remove('active');
    } else {
        faqItem.classList.add('active');
    }
}
if (document.getElementById("profileToggle")) {
    const profileToggle = document.getElementById("profileToggle");
    const profileDropdown = document.getElementById("profileDropdown");

    profileToggle.addEventListener("click", () => {
        profileDropdown.style.display =
            profileDropdown.style.display === "flex" ? "none" : "flex";
    });

    // Click the outside area -> close dropdown
    document.addEventListener("click", (e) => {
        if (!profileToggle.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.style.display = "none";
        }
    });
}

// Checkout Page
// Payment method switching
if (document.querySelectorAll('input[name="payment"]')) {
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', function () {
            // Hide all payment forms
            document.querySelectorAll('.card-form').forEach(form => {
                form.classList.remove('active');
            });

            // Show relevant form
            if (this.id === 'credit-card') {
                document.getElementById('card-details').classList.add('active');
            } else {
                document.getElementById('license-agreement').classList.add('active');
            }
        });
    });
}

// Billing toggle
function toggleBilling(type) {
    const toggle = document.getElementById('billing-toggle');
    const monthlyLabel = document.querySelector('.toggle-label.monthly');
    const yearlyLabel = document.querySelector('.toggle-label.yearly');
    const basePrice = document.getElementById('base-price');
    const discount = document.getElementById('discount');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    if (type === 'yearly') {
        toggle.checked = true;
        monthlyLabel.classList.remove('active');
        yearlyLabel.classList.add('active');

        // Update prices for yearly
        basePrice.textContent = 'Rp 2.388.000';
        discount.textContent = '-Rp 477.600';
        tax.textContent = 'Rp 240.000';
        total.textContent = 'Rp 2.150.400';
    } else {
        toggle.checked = false;
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');

        // Update prices for monthly
        basePrice.textContent = 'Rp 199.000';
        discount.textContent = '-Rp 0';
        tax.textContent = 'Rp 20.000';
        total.textContent = 'Rp 219.000';
    }
}

// Toggle functionality
if (document.getElementById('billing-toggle')) {
    document.getElementById('billing-toggle').addEventListener('change', function () {
        if (this.checked) {
            toggleBilling('yearly');
        } else {
            toggleBilling('monthly');
        }
    });
}