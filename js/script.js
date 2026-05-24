// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Cảm ơn bạn đã đăng ký! Email: ' + email);
            this.reset();
        });
    }

    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current navigation link
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);

    // Initialize products if on products page
    if (document.body.classList.contains('products-page')) {
        initializeProducts();
    }
});

// Update active navigation link based on current page
function updateActiveNavLink() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === currentLocation || 
            item.getAttribute('href').includes(currentLocation.split('/').pop())) {
            item.classList.add('active');
        }
    });
}

// Product filter and search
function initializeProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const searchInput = document.getElementById('searchInput');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
}

function filterProducts() {
    const category = document.getElementById('categoryFilter')?.value || '';
    const maxPrice = parseInt(document.getElementById('priceFilter')?.value || '999999999');
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';

    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.dataset.category || '';
        const productPrice = parseInt(product.querySelector('.price').textContent.replace(/\D/g, ''));
        const productName = product.querySelector('h3').textContent.toLowerCase();

        const matchCategory = category === '' || productCategory === category;
        const matchPrice = productPrice <= maxPrice;
        const matchSearch = searchTerm === '' || productName.includes(searchTerm);

        if (matchCategory && matchPrice && matchSearch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Contact form validation
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const phone = this.querySelector('input[name="phone"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }

            if (!validateEmail(email)) {
                alert('Email không hợp lệ!');
                return;
            }

            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong 24 giờ.');
            this.reset();
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add to cart simulation
function addToCart(productId, productName, productPrice) {
    alert('Đã thêm ' + productName + ' vào giỏ hàng!\nGiá: ' + productPrice);
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-card, .feature-item').forEach(el => {
        observer.observe(el);
    });
});

// Scroll to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.onclick = scrollToTop;
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
});

// Initialize contact form
document.addEventListener('DOMContentLoaded', initializeContactForm);
