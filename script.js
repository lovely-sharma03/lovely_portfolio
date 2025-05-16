// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Toggle the hamburger menu animation
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('animate'));
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');

            // Remove animation from bars
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('animate'));

            // Set active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dark/Light mode toggle
    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('click', function() {
            body.classList.toggle('dark-mode');

            // Update icon
            if (body.classList.contains('dark-mode')) {
                this.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark-mode');
            } else {
                this.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.removeItem('theme');
            }
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    // Function to handle form submission via mailto
    window.sendEmail = function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Format the email body
        const body = `Name: ${name}%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        // Create the mailto link
        const mailtoLink = `mailto:Lsharma15626@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open the email client
        window.location.href = mailtoLink;

        // Reset the form
        document.getElementById('contactForm').reset();

        return false;
    };

    // Add animation to timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Add animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');

    const skillObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        skillObserver.observe(item);
    });

    // Add animation to certification items
    const certItems = document.querySelectorAll('.cert-item');

    const certObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    certItems.forEach(item => {
        certObserver.observe(item);
    });

    // Update active navigation link based on scroll position
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Add animation to the menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const bars = this.querySelectorAll('.bar');

            if (this.classList.contains('active')) {
                // Animate to X
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                // Reset to hamburger
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
});

// Add CSS animations for timeline items
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
    });
});
