// Show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLinks = document.querySelectorAll('.nav__link');

// Show menu on click
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu on close button click
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Hide menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});


// Show Scroll-Up Button
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 350) {
        // Add the show-scroll class when scrolled 350px or more
        scrollUp.classList.add('show-scroll');
    } else {
        // Remove the show-scroll class when scrolled less than 350px
        scrollUp.classList.remove('show-scroll');
    }
});


