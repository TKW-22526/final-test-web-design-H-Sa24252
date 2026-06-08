// JavaScript riêng cho trang liên hệ

// Email validation provided by `js/common.js` as `validateEmail(email)`.

/**
 * Gắn sự kiện cho form liên hệ: kiểm tra các trường và validate email trước khi gửi.
 */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const dob = this.querySelector('input[name="dob"]').value;
        const gender = this.querySelector('select[name="gender"]').value;
        const message = this.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !dob || !gender || !message) {
            alert('Vui lòng điền đầy đủ họ tên, email, ngày sinh, giới tính và nội dung!');
            return;
        }

        if (typeof validateEmail !== 'function' || !validateEmail(email)) {
            alert('Email không hợp lệ!');
            return;
        }

        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.');
        this.reset();
    });
});
