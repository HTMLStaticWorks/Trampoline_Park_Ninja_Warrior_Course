document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Navbar ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // --- Dark Mode Toggle ---
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const body = document.body;

    // Check saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggles.forEach(btn => btn.innerHTML = '☀️');
    }

    themeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggles.forEach(b => b.innerHTML = isDark ? '☀️' : '🌙');
        });
    });

    // --- RTL Toggle ---
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    
    // Check saved direction
    const savedDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('dir', savedDir);

    rtlToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = document.documentElement.getAttribute('dir');
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            document.documentElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
        });
    });

    // --- Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // --- Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    };

    // Trigger counters when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // --- Testimonial Slider (Basic) ---
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;

    const showSlide = (n) => {
        slides.forEach(s => s.classList.remove('active'));
        slides[n].classList.add('active');
    };

    if (slides.length > 0) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
    // --- Back to Top Button ---
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
