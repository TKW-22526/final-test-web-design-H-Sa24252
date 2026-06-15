# THSPhone - Cửa Hàng Smartphone Online

## Giới thiệu

THSPhone là website bán điện thoại trực tuyến được xây dựng trong khuôn khổ học phần Thiết kế Web. Dự án mô phỏng một cửa hàng smartphone trực tuyến với các chức năng cơ bản như xem sản phẩm, tìm kiếm sản phẩm, xem chi tiết sản phẩm, quản lý giỏ hàng và gửi thông tin liên hệ.

Website được phát triển nhằm vận dụng các kiến thức đã học về HTML5, CSS3, JavaScript và Bootstrap Framework để xây dựng một hệ thống web hoàn chỉnh có giao diện thân thiện và khả năng tương thích trên nhiều thiết bị.

## Mục tiêu dự án

* Xây dựng website bán điện thoại trực tuyến đơn giản.
* Áp dụng kiến thức HTML, CSS và JavaScript vào thực tế.
* Thiết kế giao diện đáp ứng (Responsive Design).
* Thực hiện chức năng tìm kiếm sản phẩm.
* Xây dựng giỏ hàng bằng LocalStorage.
* Triển khai website trên GitHub Pages.

## Công nghệ sử dụng

### Front-end

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 5

### Công cụ phát triển

* Visual Studio Code
* Git
* GitHub
* GitHub Pages
* Figma

## Chức năng chính

### Trang chủ

* Hiển thị banner quảng cáo.
* Giới thiệu sản phẩm nổi bật.
* Điều hướng đến các trang chức năng.

### Trang sản phẩm

* Hiển thị danh sách điện thoại.
* Tìm kiếm sản phẩm theo tên.
* Lọc và xem thông tin sản phẩm.

### Trang chi tiết sản phẩm

* Hiển thị hình ảnh sản phẩm.
* Hiển thị giá bán và thông số cơ bản.
* Thêm sản phẩm vào giỏ hàng.

### Trang giỏ hàng

* Hiển thị danh sách sản phẩm đã chọn.
* Cập nhật số lượng sản phẩm.
* Xóa sản phẩm khỏi giỏ hàng.
* Tính tổng tiền đơn hàng.

### Trang giới thiệu

* Giới thiệu về cửa hàng THSPhone.
* Trình bày mục tiêu và định hướng phát triển.

### Trang liên hệ

* Form liên hệ khách hàng.
* Thu thập thông tin phản hồi.

## Cấu trúc thư mục

```text
final-test-web-design-H-Sa24252
│
├── assets
│   ├── images
│   └── thesis
│       └── logo.jpg
│
├── css
│   ├── chi-tiet.css
│   ├── gio-hang.css
│   ├── gioi-thieu.css
│   ├── index.css
│   ├── lien-he.css
│   ├── san-pham.css
│   └── style.css
│
├── html
│   ├── chi-tiet.html
│   ├── gio-hang.html
│   ├── gioi-thieu.html
│   ├── lien-he.html
│   └── san-pham.html
│
├── js
│   ├── chi-tiet.js
│   ├── common.js
│   ├── gio-hang.js
│   ├── index.js
│   ├── lien-he.js
│   ├── san-pham.js
│   └── script.js
│
├── index.html
│
└── README.md
```
#### Cấu trúc thư mục dự án

Dự án THSPhone được tổ chức theo mô hình phân tách giao diện, chức năng và tài nguyên nhằm giúp việc quản lý mã nguồn trở nên rõ ràng và thuận tiện hơn trong quá trình phát triển.

Thư mục assets được sử dụng để lưu trữ các tài nguyên của website. Trong đó, thư mục images chứa hình ảnh sản phẩm, banner và các hình ảnh phục vụ giao diện. Thư mục thesis chứa các tài nguyên phục vụ cho việc trình bày dự án, bao gồm logo và các hình ảnh minh họa liên quan.

Thư mục css chứa toàn bộ các tệp định dạng giao diện của website. Mỗi trang chức năng được xây dựng với một tệp CSS riêng nhằm giúp dễ dàng chỉnh sửa và bảo trì giao diện. Ngoài ra, tệp style.css được sử dụng để lưu trữ các định dạng dùng chung cho toàn bộ hệ thống.

Thư mục html chứa các trang chức năng của website như trang sản phẩm, trang chi tiết sản phẩm, trang giỏ hàng, trang giới thiệu và trang liên hệ.

Thư mục js chứa các tệp JavaScript dùng để xử lý dữ liệu và tương tác người dùng. Mỗi trang có một tệp JavaScript riêng để thực hiện các chức năng tương ứng. Tệp common.js được sử dụng để lưu trữ các hàm dùng chung trong toàn hệ thống.

Tệp index.html được đặt tại thư mục gốc và đóng vai trò là trang chủ của website. Đây cũng là điểm truy cập đầu tiên khi người dùng truy cập vào hệ thống.

Tệp README.md được sử dụng để mô tả thông tin dự án, hướng dẫn sử dụng và cung cấp các thông tin cần thiết cho người phát triển hoặc người đánh giá hệ thống.

## Cài đặt và chạy dự án

### Cách 1: Mở trực tiếp

Tải mã nguồn về máy tính và mở file:

```text
index.html
```

bằng trình duyệt web.

### Cách 2: Sử dụng Live Server

1. Mở dự án bằng Visual Studio Code.
2. Cài đặt tiện ích mở rộng Live Server.
3. Nhấp chuột phải vào file index.html.
4. Chọn "Open with Live Server".

## Triển khai trực tuyến

Website được triển khai bằng GitHub Pages.

Link truy cập:

Liên kết GitHub repository:https://github.com/TKW-22526/final-test-web-design-H-Sa24252.git  

Liên kết GitHub Pages:https://tkw-22526.github.io/final-test-web-design-H-Sa24252/

## Tác giả

Họ và tên:Thạch Hoàng Sa
Mã số sinh viên:110124252
Lớp:DA24TTC
Tên đề tài:THSPHONE-CỬA HÀNG SMART PHONE ONLINE
Trường: Đại học Trà Vinh
Học phần: Thiết kế Web

## Giảng viên hướng dẫn

Ths. Nguyễn Ngọc Đan Thanh

## Giấy phép

Dự án được phát triển với mục đích học tập và nghiên cứu trong học phần Thiết kế Web.

