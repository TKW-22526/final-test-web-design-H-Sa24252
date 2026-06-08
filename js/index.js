// JavaScript riêng cho trang chủ

// Dùng hàm chung `initAnimations` để khởi tạo hiệu ứng và tránh trùng lặp.
document.addEventListener('DOMContentLoaded', function() {
    if (typeof initAnimations === 'function') {
        initAnimations('.product-card, .feature-item');
    }
    // Newsletter handling is in script.js (kept minimal)
});
