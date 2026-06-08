document.addEventListener('DOMContentLoaded', initCommonScripts);
/**
 * common.js
 * Các hàm tiện ích dùng chung trong toàn bộ project để tránh lặp mã.
 * - Quản lý giỏ hàng (LocalStorage)
 * - Định dạng tiền tệ
 * - Navbar active
 * - Badge đếm giỏ hàng
 * - Kiểm tra email
 * - Nút cuộn lên đầu và animation helper
 */

/**
 * Lấy danh sách giỏ hàng từ `localStorage`.
 * @returns {Array}
 */
function getCartItems() {
    const saved = localStorage.getItem('thsphone-cart');
    return saved ? JSON.parse(saved) : [];
}

/**
 * Lưu danh sách giỏ hàng vào `localStorage`.
 * @param {Array} items
 */
function saveCartItems(items) {
    localStorage.setItem('thsphone-cart', JSON.stringify(items));
}

/**
 * Định dạng số thành chuỗi tiền tệ `vi-VN` với ký hiệu ₫.
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
    return Number(amount).toLocaleString('vi-VN') + ' ₫';
}

/**
 * Cập nhật bộ đếm sản phẩm trong navbar (phần tử có id `cartCountBadge`).
 */
function updateCartCount() {
    const badge = document.getElementById('cartCountBadge');
    if (!badge) return;
    const items = getCartItems();
    const total = items.reduce((s, it) => s + (Number(it.quantity) || 0), 0);
    badge.textContent = total;
}

/**
 * Cập nhật trạng thái `active` cho các liên kết điều hướng dựa trên đường dẫn hiện tại.
 */
function updateActiveNavLink() {
    const current = location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
    menuItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href') || '';
        if (href === location.pathname || href.includes(current)) {
            item.classList.add('active');
        }
    });
}

/**
 * Kiểm tra định dạng email cơ bản.
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Cuộn trang về đầu một cách mượt mà.
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Thêm nút "scroll to top" nếu chưa có.
 */
function addScrollToTopButton() {
    if (document.querySelector('.scroll-to-top')) return;
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'scroll-to-top';
    btn.onclick = scrollToTop;
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
}

/**
 * Khởi tạo hiệu ứng xuất hiện khi phần tử vào vùng nhìn thấy.
 * @param {string} selector CSS selector của phần tử cần animate
 */
function initAnimations(selector = '.product-card, .feature-item') {
    try {
        const opts = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
        const obs = new IntersectionObserver((entries, o) => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    en.target.classList.add('animate');
                    o.unobserve(en.target);
                }
            });
        }, opts);
        document.querySelectorAll(selector).forEach(el => obs.observe(el));
    } catch (e) {
        // older browsers: ignore
    }
}

/**
 * Khởi tạo các script dùng chung cho toàn site.
 */
function initCommonScripts() {
    updateActiveNavLink();
    addScrollToTopButton();
    updateCartCount();
    initAnimations();
}

document.addEventListener('DOMContentLoaded', initCommonScripts);
