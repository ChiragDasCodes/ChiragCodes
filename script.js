document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll('.nav-item');

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight current section in navigation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    }, { threshold: 0.7 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Smooth movement of underline box on hover
    let activeItem = document.querySelector('.nav-item.active');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            moveUnderline(item);
        });
    });

    function moveUnderline(item) {
        const underline = document.querySelector('.animation');
        const nav = document.querySelector('.nav-links');

        const activeLink = activeItem.querySelector('a');
        const nextLink = item.querySelector('a');

        const leftPos = nextLink.offsetLeft - nav.scrollLeft;
        const width = nextLink.offsetWidth;

        underline.style.width = `${width}px`;
        underline.style.transform = `translateX(${leftPos}px)`;

        activeItem.classList.remove('active');
        item.classList.add('active');
        activeItem = item;
    }

    // Animations on scroll using IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');

    const fadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });

    const slideUpObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    slideUpElements.forEach(el => {
        slideUpObserver.observe(el);
    });
});
