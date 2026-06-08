// JavaScript riêng cho trang chi tiết sản phẩm

/**
 * Danh mục sản phẩm mẫu dùng để hiển thị chi tiết.
 * Mỗi mục chứa `id`, `name`, `image`, `priceText`, `price`, `description`, `specs`.
 */
const productCatalog = {
    iphone15pro: {
        id: 'iphone15pro',
        category: 'apple',
        name: 'iPhone 15 Pro Max',
        image: '../assets/images/iphone-15-pro.jpg',
        priceText: '30.490.000 ₫',
        price: 30490000,
        description: 'iPhone 15 Pro Max sở hữu chip A17 Pro, camera 48MP, màn hình 6.7 inch và thân titanium sang trọng.',
        specs: {
            chip: 'Apple A17 Pro',
            ram: '8GB',
            storage: '256GB',
            screen: '6.7 inch OLED',
            camera: '48MP + 12MP + 12MP',
            battery: '4422mAh',
            os: 'iOS 17'
        }
    },
    iphone15: {
        id: 'iphone15',
        category: 'apple',
        name: 'iPhone 15',
        image: '../assets/images/iphone-15.jpg',
        priceText: '25.990.000 ₫',
        price: 25990000,
        description: 'iPhone 15 nổi bật với chip A17 Pro, camera 48MP và màn hình Dynamic Island mượt mà.',
        specs: {
            chip: 'Apple A17 Pro',
            ram: '8GB',
            storage: '128GB',
            screen: '6.1 inch OLED',
            camera: '48MP + 12MP',
            battery: '3349mAh',
            os: 'iOS 17'
        }
    },
    iphone14: {
        id: 'iphone14',
        category: 'apple',
        name: 'iPhone 14',
        image: '../assets/images/iphone-14.jpg',
        priceText: '19.490.000 ₫',
        price: 19490000,
        description: 'iPhone 14 có chip A16 Bionic, camera kép 12MP và thiết kế nhỏ gọn tiện lợi.',
        specs: {
            chip: 'Apple A16 Bionic',
            ram: '6GB',
            storage: '128GB',
            screen: '6.1 inch OLED',
            camera: '12MP + 12MP',
            battery: '3279mAh',
            os: 'iOS 16'
        }
    },
    s24ultra: {
        id: 's24ultra',
        category: 'samsung',
        name: 'SS Galaxy S24 Ultra',
        image: '../assets/images/samsung-s24-ultra.jpg',
        priceText: '28.990.000 ₫',
        price: 28990000,
        description: 'Samsung S24 Ultra mang đến camera 200MP, bút S Pen tích hợp và sức mạnh Snapdragon 8 Gen 3.',
        specs: {
            chip: 'Snapdragon 8 Gen 3',
            ram: '12GB',
            storage: '256GB',
            screen: '6.8 inch Dynamic AMOLED',
            camera: '200MP + 12MP + 10MP + 10MP',
            battery: '5000mAh',
            os: 'Android 14'
        }
    },
    s24: {
        id: 's24',
        category: 'samsung',
        name: 'Samsung Galaxy S24',
        image: '../assets/images/samsung-s24.jpg',
        priceText: '22.490.000 ₫',
        price: 22490000,
        description: 'Samsung Galaxy S24 có hiệu năng mạnh, camera AI và màn hình đẹp cho trải nghiệm cao cấp.',
        specs: {
            chip: 'Snapdragon 8 Gen 3',
            ram: '12GB',
            storage: '256GB',
            screen: '6.2 inch Dynamic AMOLED',
            camera: '50MP + 12MP + 10MP',
            battery: '4000mAh',
            os: 'Android 14'
        }
    },
    a50: {
        id: 'a50',
        category: 'samsung',
        name: 'Samsung Galaxy A50',
        image: '../assets/images/samsung-a50.jpg',
        priceText: '8.990.000 ₫',
        price: 8990000,
        description: 'Galaxy A50 là lựa chọn giá tốt với pin lâu, camera 48MP và hiệu năng ổn định.',
        specs: {
            chip: 'Exynos 9610',
            ram: '4GB',
            storage: '128GB',
            screen: '6.4 inch Super AMOLED',
            camera: '48MP + 8MP + 5MP',
            battery: '4000mAh',
            os: 'Android 12'
        }
    },
    xiaomi14ultra: {
        id: 'xiaomi14ultra',
        category: 'xiaomi',
        name: 'Xiaomi 14 Ultra',
        image: '../assets/images/xiaomi-14-ultra.jpg',
        priceText: '24.990.000 ₫',
        price: 24990000,
        description: 'Xiaomi 14 Ultra có camera Leica 50MP, sạc 90W và hiệu năng mạnh mẽ.',
        specs: {
            chip: 'Snapdragon 8 Gen 3',
            ram: '12GB',
            storage: '256GB',
            screen: '6.73 inch AMOLED',
            camera: '50MP + 50MP + 50MP',
            battery: '5200mAh',
            os: 'Android 14'
        }
    },
    xiaomi13: {
        id: 'xiaomi13',
        category: 'xiaomi',
        name: 'Xiaomi 13',
        image: '../assets/images/xiaomi-13.jpg',
        priceText: '13.490.000 ₫',
        price: 13490000,
        description: 'Xiaomi 13 nổi bật với camera Leica, hiệu năng cao và sạc nhanh 120W.',
        specs: {
            chip: 'Snapdragon 8 Gen 2',
            ram: '8GB',
            storage: '256GB',
            screen: '6.36 inch AMOLED',
            camera: '50MP + 13MP + 10MP',
            battery: '4500mAh',
            os: 'Android 13'
        }
    },
    redmi12: {
        id: 'redmi12',
        category: 'xiaomi',
        name: 'Xiaomi Redmi Note 12',
        image: '../assets/images/xiaomi-redmi.jpg',
        priceText: '7.490.000 ₫',
        price: 7490000,
        description: 'Redmi Note 12 là smartphone giá mềm với pin 5000mAh và camera 50MP.',
        specs: {
            chip: 'MediaTek Helio G88',
            ram: '6GB',
            storage: '128GB',
            screen: '6.67 inch AMOLED',
            camera: '50MP + 8MP + 2MP',
            battery: '5000mAh',
            os: 'Android 13'
        }
    },
    oppofindx7: {
        id: 'oppofindx7',
        category: 'oppo',
        name: 'OPPO Find X7',
        image: '../assets/images/oppo-find-x7.jpg',
        priceText: '18.990.000 ₫',
        price: 18990000,
        description: 'OPPO Find X7 trang bị camera 50MP, chip Snapdragon thế hệ mới và thiết kế cao cấp.',
        specs: {
            chip: 'Snapdragon 8 Gen 3',
            ram: '12GB',
            storage: '256GB',
            screen: '6.7 inch AMOLED',
            camera: '50MP + 50MP + 50MP',
            battery: '5000mAh',
            os: 'Android 14'
        }
    },
    oppireno8: {
        id: 'oppireno8',
        category: 'oppo',
        name: 'OPPO Reno 8',
        image: '../assets/images/oppo-reno.jpg',
        priceText: '10.490.000 ₫',
        price: 10490000,
        description: 'OPPO Reno 8 có thiết kế mỏng nhẹ, camera AI và sạc nhanh 80W.',
        specs: {
            chip: 'MediaTek Dimensity 7050',
            ram: '8GB',
            storage: '256GB',
            screen: '6.43 inch AMOLED',
            camera: '50MP + 8MP + 2MP',
            battery: '4500mAh',
            os: 'Android 13'
        }
    },
    oppoa76: {
        id: 'oppoa76',
        category: 'oppo',
        name: 'OPPO A76',
        image: '../assets/images/oppo-a76.jpg',
        priceText: '5.990.000 ₫',
        price: 5990000,
        description: 'OPPO A76 là lựa chọn thân thiện với ngân sách, pin 5000mAh và camera 13MP.',
        specs: {
            chip: 'Snapdragon 680',
            ram: '6GB',
            storage: '128GB',
            screen: '6.56 inch IPS LCD',
            camera: '13MP + 2MP',
            battery: '5000mAh',
            os: 'Android 12'
        }
    }
};

/**
 * Lấy `id` sản phẩm từ query string của URL. Nếu không có trả về 'iphone15' mặc định.
 * @returns {string} productId
 */
function getProductIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'iphone15';
}

/**
 * Trả về đối tượng sản phẩm hiện tại dựa trên `id` từ URL.
 * Nếu `id` không hợp lệ, trả về sản phẩm mặc định.
 * @returns {object} product
 */
function getCurrentProduct() {
    const productId = getProductIdFromQuery();
    return productCatalog[productId] || productCatalog['iphone15'];
}

/**
 * Cập nhật DOM với thông tin sản phẩm (tên, ảnh, giá, mô tả, thông số).
 */
function setProductDetails() {
    const product = getCurrentProduct();
    document.title = `${product.name} - Chi tiết sản phẩm`;

    document.getElementById('productName').textContent = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
    document.getElementById('productPrice').textContent = product.priceText;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('specChip').textContent = product.specs.chip;
    document.getElementById('specRam').textContent = product.specs.ram;
    document.getElementById('specStorage').textContent = product.specs.storage;
    document.getElementById('specScreen').textContent = product.specs.screen;
    document.getElementById('specCamera').textContent = product.specs.camera;
    document.getElementById('specBattery').textContent = product.specs.battery;
    document.getElementById('specOS').textContent = product.specs.os;
}

/**
 * Lấy danh sách sản phẩm trong giỏ từ `localStorage`.
 * @returns {Array} cartItems
 */
// Cart helpers are provided by `js/common.js` (getCartItems/saveCartItems)

/**
 * Lấy giá trị số lượng người dùng nhập, đảm bảo tối thiểu 1.
 * @returns {number}
 */
function getQuantity() {
    const input = document.getElementById('quantity');
    const value = parseInt(input?.value, 10);
    if (!value || value < 1) {
        if (input) input.value = 1;
        return 1;
    }
    return value;
}

/**
 * Thêm sản phẩm đang xem vào giỏ, hoặc tăng số lượng nếu đã tồn tại.
 * Cập nhật `localStorage` và hiển thị thông báo.
 */
function addToCart() {
    const product = getCurrentProduct();
    const quantity = getQuantity();
    const cartItems = getCartItems();
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image
        });
    }

    saveCartItems(cartItems);
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
    alert(`Đã thêm ${quantity} x ${product.name} vào giỏ hàng!`);
}

/**
 * Thêm sản phẩm vào giỏ rồi chuyển hướng người dùng sang trang giỏ hàng.
 */
function buyNow() {
    const product = getCurrentProduct();
    const quantity = getQuantity();
    const cartItems = getCartItems();
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image
        });
    }

    saveCartItems(cartItems);
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
    alert(`Đã thêm ${quantity} x ${product.name} vào giỏ hàng! Chuyển đến giỏ hàng...`);
    window.location.href = 'gio-hang.html';
}

/**
 * Gắn sự kiện cho các nút trên trang chi tiết (Mua ngay, Thêm vào giỏ).
 */
function attachDetailEvents() {
    const buyNowBtn = document.getElementById('buyNowBtn');
    const addToCartBtn = document.getElementById('addToCartBtn');

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            buyNow();
        });
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            addToCart();
        });
    }

    const quantityInput = document.querySelector('.quantity-selector input');
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            if (parseInt(this.value, 10) < 1) {
                this.value = 1;
            }
        });
    }
}

/**
 * Khởi tạo hiệu ứng xuất hiện (animate) khi phần tử vào vùng nhìn thấy bằng IntersectionObserver.
 */
function initAnimations() {
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

    document.querySelectorAll('.product-card').forEach(el => {
        observer.observe(el);
    });
}

// Khi DOM sẵn sàng, thiết lập thông tin và các sự kiện cho trang chi tiết
document.addEventListener('DOMContentLoaded', function() {
    setProductDetails();
    attachDetailEvents();
    initAnimations();
});
