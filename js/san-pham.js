// JavaScript riêng cho trang sản phẩm

// Cart helpers (get/save) are provided by `js/common.js` to avoid duplication.

/**
 * Thêm sản phẩm vào giỏ (hoặc tăng số lượng nếu đã tồn tại).
 * @param {string} id
 * @param {string} name
 * @param {string} priceText
 * @param {string} image
 */
function addToCart(id, name, priceText, image) {
    const cartItems = getCartItems();
    const existingItem = cartItems.find(item => item.id === id);
    const price = parseFloat(priceText.replace(/[\D]/g, ''));

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            id: id,
            name: name,
            price: price,
            quantity: 1,
            image: image || ''
        });
    }

    saveCartItems(cartItems);
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
    alert(`Đã thêm 1 x ${name} vào giỏ hàng!`);
}

/**
 * Danh sách sản phẩm hiển thị trên trang `san-pham`.
 */
const products = [
    {
        id: 'iphone15pro',
        category: 'apple',
        name: 'iPhone 15 Pro Max',
        price: 30490000,
        priceText: '30.490.000 ₫',
        description: 'Chip A17 Pro, camera 48MP, màn hình 6.7 inch, titanium',
        image: '../assets/images/iphone-15-pro.jpg',
        link: 'chi-tiet.html?id=iphone15pro'
    },
    {
        id: 'iphone15',
        category: 'apple',
        name: 'iPhone 15',
        price: 25990000,
        priceText: '25.990.000 ₫',
        description: 'Chip A17 Pro, camera 48MP, màn hình Dynamic Island',
        image: '../assets/images/iphone-15.jpg',
        link: 'chi-tiet.html?id=iphone15'
    },
    {
        id: 'iphone14',
        category: 'apple',
        name: 'iPhone 14',
        price: 19490000,
        priceText: '19.490.000 ₫',
        description: 'Chip A16 Bionic, camera kép 12MP, màn hình 6.1 inch',
        image: '../assets/images/iphone-14.jpg',
        link: 'chi-tiet.html?id=iphone14'
    },
    {
        id: 's24ultra',
        category: 'samsung',
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        priceText: '28.990.000 ₫',
        description: 'Snapdragon 8 Gen 3, camera 200MP, bút S Pen tích hợp',
        image: '../assets/images/samsung-s24-ultra.jpg',
        link: 'chi-tiet.html?id=s24ultra'
    },
    {
        id: 's24',
        category: 'samsung',
        name: 'Samsung Galaxy S24',
        price: 22490000,
        priceText: '22.490.000 ₫',
        description: 'Snapdragon 8 Gen 3, AI cạnh tranh, pin 4000mAh',
        image: '../assets/images/samsung-s24.jpg',
        link: 'chi-tiet.html?id=s24'
    },
    {
        id: 'a50',
        category: 'samsung',
        name: 'Samsung Galaxy A50',
        price: 8990000,
        priceText: '8.990.000 ₫',
        description: 'Exynos 9610, camera 48MP, pin 4000mAh, giá phổ thông',
        image: '../assets/images/samsung-a50.jpg',
        link: 'chi-tiet.html?id=a50'
    },
    {
        id: 'xiaomi14ultra',
        category: 'xiaomi',
        name: 'Xiaomi 14 Ultra',
        price: 24990000,
        priceText: '24.990.000 ₫',
        description: 'Snapdragon 8 Gen 3, camera Leica 50MP, sạc 90W',
        image: '../assets/images/xiaomi-14-ultra.jpg',
        link: 'chi-tiet.html?id=xiaomi14ultra'
    },
    {
        id: 'xiaomi13',
        category: 'xiaomi',
        name: 'Xiaomi 13',
        price: 13490000,
        priceText: '13.490.000 ₫',
        description: 'Snapdragon 8 Gen 2, camera Leica, sạc nhanh 120W',
        image: '../assets/images/xiaomi-13.jpg',
        link: 'chi-tiet.html?id=xiaomi13'
    },
    {
        id: 'redmi12',
        category: 'xiaomi',
        name: 'Xiaomi Redmi Note 12',
        price: 7490000,
        priceText: '7.490.000 ₫',
        description: 'MediaTek Helio G88, camera 50MP, pin 5000mAh',
        image: '../assets/images/xiaomi-redmi.jpg',
        link: 'chi-tiet.html?id=redmi12'
    },
    {
        id: 'oppofindx7',
        category: 'oppo',
        name: 'OPPO Find X7',
        price: 18990000,
        priceText: '18.990.000 ₫',
        description: 'Snapdragon 8 Gen 3, camera 50MP, sạc nhanh 100W',
        image: '../assets/images/oppo-find-x7.jpg',
        link: 'chi-tiet.html?id=oppofindx7'
    },
    {
        id: 'oppireno8',
        category: 'oppo',
        name: 'OPPO Reno 8',
        price: 10490000,
        priceText: '10.490.000 ₫',
        description: 'MediaTek Dimensity 7050, camera AI, thiết kế sang trọng',
        image: '../assets/images/oppo-reno.jpg',
        link: 'chi-tiet.html?id=oppireno8'
    },
    {
        id: 'oppoa76',
        category: 'oppo',
        name: 'OPPO A76',
        price: 5990000,
        priceText: '5.990.000 ₫',
        description: 'Snapdragon 680, camera 13MP, pin 5000mAh giá rẻ',
        image: '../assets/images/oppo-a76.jpg',
        link: 'chi-tiet.html?id=oppoa76'
    }
];

const productGrid = document.getElementById('productGrid');

/**
 * Tạo và chèn các card sản phẩm vào lưới `productGrid`.
 */
function renderProducts() {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card product-card h-100 shadow-sm';
        card.dataset.category = product.category;

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'product-image-wrapper';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/250x300?text=' + encodeURIComponent(product.name);
        };

        imageWrapper.appendChild(img);

        const body = document.createElement('div');
        body.className = 'card-body d-flex flex-column';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = product.name;

        const price = document.createElement('p');
        price.className = 'price text-primary fw-bold mb-2';
        price.textContent = product.priceText;

        const desc = document.createElement('p');
        desc.className = 'description text-muted mb-3';
        desc.textContent = product.description;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'd-grid gap-2 mt-auto';

        const detailLink = document.createElement('a');
        detailLink.href = product.link;
        detailLink.className = 'btn btn-outline-primary';
        detailLink.textContent = 'Xem chi tiết';

        const addButton = document.createElement('button');
        addButton.className = 'btn btn-primary';
        addButton.textContent = 'Thêm vào giỏ';
        addButton.addEventListener('click', function() {
            addToCart(product.id, product.name, product.priceText, product.image);
        });

        buttonContainer.appendChild(detailLink);
        buttonContainer.appendChild(addButton);
        body.appendChild(title);
        body.appendChild(price);
        body.appendChild(desc);
        body.appendChild(buttonContainer);
        card.appendChild(imageWrapper);
        card.appendChild(body);
        col.appendChild(card);
        productGrid.appendChild(col);
    });
}
//thêm chức năng lọc sản phẩm theo danh mục, giá và tìm kiếm
// Khởi tạo: render sản phẩm, gắn các bộ lọc và hiệu ứng khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();

    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const searchInput = document.getElementById('searchInput');
// Thêm sự kiện lọc khi thay đổi bộ lọc hoặc nhập tìm kiếm
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
//thêm nút tìm kiếm sản phẩm
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
});

/**
 * Lọc các card sản phẩm theo danh mục, giá tối đa và từ khóa tìm kiếm.
 */
function filterProducts() {
    const category = document.getElementById('categoryFilter')?.value || '';
    const maxPrice = parseInt(document.getElementById('priceFilter')?.value || '999999999');
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const noResultsMessage = document.getElementById('noProductsMessage');

    const columns = document.querySelectorAll('#productGrid .col');
    let visibleCount = 0;

    columns.forEach(column => {
        const product = column.querySelector('.product-card');
        if (!product) return;

        const productCategory = product.dataset.category || '';
        const productPrice = parseInt(product.querySelector('.price').textContent.replace(/\D/g, ''));
        const productName = (product.querySelector('.card-title') || product.querySelector('h3'))?.textContent.toLowerCase() || '';

        const matchCategory = category === '' || productCategory === category;
        const matchPrice = productPrice <= maxPrice;
        const matchSearch = searchTerm === '' || productName.includes(searchTerm);
        const visible = matchCategory && matchPrice && matchSearch;

        column.style.display = visible ? '' : 'none';
        if (visible) {
            visibleCount += 1;
        }
    });

    if (noResultsMessage) {
        noResultsMessage.classList.toggle('d-none', visibleCount > 0);
    }
}

