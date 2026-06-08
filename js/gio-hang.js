// JavaScript riêng cho trang giỏ hàng

let cartItems = [];

/**
 * Tải giỏ hàng từ `localStorage` vào biến `cartItems` và render nội dung.
 */
function loadCart() {
    const savedCart = localStorage.getItem('thsphone-cart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        renderCart();
    }
}

/**
 * Lưu trạng thái `cartItems` vào `localStorage`.
 */
function saveCart() {
    localStorage.setItem('thsphone-cart', JSON.stringify(cartItems));
}

/**
 * Thêm một sản phẩm vào giỏ. Nếu sản phẩm đã tồn tại thì tăng số lượng.
 * @param {string} id
 * @param {string} name
 * @param {string} price (chuỗi có ký tự tiền tệ)
 * @param {string} image (đường dẫn ảnh)
 */
function addItemToCart(id, name, price, image) {
    const existingItem = cartItems.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            id: id,
            name: name,
            price: parseFloat(price.replace(/[^\d]/g, '')),
            quantity: 1,
            image: image
        });
    }
    
    saveCart();
    if (typeof updateCartCount === 'function') updateCartCount();
    renderCart();
    alert('Đã thêm ' + name + ' vào giỏ hàng!');
}

/**
 * Xóa sản phẩm khỏi giỏ theo `id`.
 * @param {string} id
 */
function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    saveCart();
    if (typeof updateCartCount === 'function') updateCartCount();
    renderCart();
}

/**
 * Cập nhật số lượng cho một mục trong giỏ và render lại.
 * Đảm bảo số lượng tối thiểu là 1.
 * @param {string} id
 * @param {number} quantity
 */
function updateQuantity(id, quantity) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        saveCart();
        if (typeof updateCartCount === 'function') updateCartCount();
        renderCart();
    }
}

/**
 * Tính các giá trị tạm tính, phí vận chuyển, thuế và tổng cộng.
 * Trả về một đối tượng chứa `subtotal`, `shipping`, `tax`, `total`.
 * @returns {object}
 */
function calculateTotals() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cartItems.length > 0 ? 30000 : 0; // phí vận chuyển 30k
    const tax = subtotal * 0.1; // thuế 10%
    const total = subtotal + shipping + tax;
    
    return {
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total
    };
}

// `formatCurrency` is provided by `js/common.js` to avoid duplication.

/**
 * Hiển thị nội dung giỏ hàng vào DOM, bao gồm danh sách mục và tóm tắt đơn hàng.
 * Nếu giỏ trống thì hiển thị thông báo tương ứng.
 */
function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    const summaryContainer = document.querySelector('.cart-summary');
    
    if (!cartContainer) return;
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Giỏ hàng của bạn trống</h2>
                <p>Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy tiếp tục mua sắm!</p>
                <a href="../html/san-pham.html" class="btn btn-primary">Tiếp tục mua sắm</a>
            </div>
        `;
        
        if (summaryContainer) {
            summaryContainer.innerHTML = `
                <h3>Tóm tắt đơn hàng</h3>
                <p class="text-center text-muted">Chưa có sản phẩm</p>
            `;
        }
        return;
    }
    
    let html = '<h2>Giỏ hàng của bạn</h2>';
    
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        html += `
            <div class="cart-item">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p class="item-price">${formatCurrency(item.price)}</p>
                </div>
                <div class="item-quantity">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" onchange="updateQuantity('${item.id}', this.value)" min="1">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <div class="item-total">
                    <p>${formatCurrency(itemTotal)}</p>
                    <a class="remove-item" onclick="removeFromCart('${item.id}')">Xóa</a>
                </div>
            </div>
        `;
    });
    
    cartContainer.innerHTML = html;
    
    // Cập nhật tóm tắt
    if (summaryContainer) {
        const totals = calculateTotals();
        summaryContainer.innerHTML = `
            <h3>Tóm tắt đơn hàng</h3>
            <div class="summary-item">
                <span class="summary-label">Tạm tính:</span>
                <span class="summary-value">${formatCurrency(totals.subtotal)}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Phí vận chuyển:</span>
                <span class="summary-value">${formatCurrency(totals.shipping)}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Thuế (10%):</span>
                <span class="summary-value">${formatCurrency(totals.tax)}</span>
            </div>
            <div class="summary-total">
                <span class="summary-label">Tổng cộng:</span>
                <span class="summary-value">${formatCurrency(totals.total)}</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Thanh toán</button>
            <a href="../html/san-pham.html" class="continue-shopping-btn">Tiếp tục mua sắm</a>
        `;
    }
}

/**
 * Xử lý thanh toán mô phỏng: thông báo và xóa giỏ hàng.
 */
function checkout() {
    if (cartItems.length === 0) {
        alert('Giỏ hàng của bạn trống!');
        return;
    }
    alert('Cảm ơn bạn! Đơn hàng của bạn sẽ được xử lý trong 1-2 ngày làm việc.');
    cartItems = [];
    saveCart();
    if (typeof updateCartCount === 'function') updateCartCount();
    renderCart();
}

// Khi DOM sẵn sàng, tải giỏ hàng từ localStorage
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
});
