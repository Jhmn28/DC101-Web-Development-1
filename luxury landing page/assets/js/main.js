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



// Get DOM elements
document.addEventListener('DOMContentLoaded', () => {
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const featuredGrid = document.getElementById('featured-grid');
    const featuredItems = Array.from(document.querySelectorAll('.featured__item'));
    const filterButton = document.getElementById('filter-button');
    const filterContainer = document.getElementById('filter-container');

    // Ensure elements exist before adding event listeners
    if (brandFilter) {
        brandFilter.addEventListener('change', () => {
            filterProducts(brandFilter.value, priceFilter?.value || 'all');
        });
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', () => {
            filterProducts(brandFilter?.value || 'all', priceFilter.value);
        });
    }

    if (filterButton) {
        filterButton.addEventListener('click', () => {
            const isHidden = filterContainer.style.display === 'none' || filterContainer.style.display === '';
            filterContainer.style.display = isHidden ? 'block' : 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (filterContainer && !filterContainer.contains(event.target) && event.target !== filterButton) {
            filterContainer.style.display = 'none'; // Hide filter panel if clicked outside
        }
    });

    function filterProducts(brand, price) {
        let filteredItems = featuredItems;

        // Filter by Brand
        if (brand !== 'all') {
            filteredItems = filteredItems.filter(item => item.getAttribute('data-brand') === brand);
        }

        // Sort by Price
        if (price === 'low-to-high') {
            filteredItems.sort((a, b) =>
                parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'))
            );
        } else if (price === 'high-to-low') {
            filteredItems.sort((a, b) =>
                parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'))
            );
        }

        // Update the grid with filtered and sorted items
        if (featuredGrid) {
            featuredGrid.innerHTML = ''; // Clear the grid
            filteredItems.forEach(item => featuredGrid.appendChild(item)); // Append filtered items
        }
    }
});

