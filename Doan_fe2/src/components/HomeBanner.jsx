import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './HomeBanner.css';

const HomeBanner = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/php-app/api.php?action=getNewProducts')
      .then((res) => res.json())
      .then((data) => setNewProducts(data))
      .catch((err) => console.error('Lỗi khi tải sản phẩm mới:', err));
  }, []);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const fadeElements = document.querySelectorAll('.fade-in-scroll');
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // chạy lần đầu khi load

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="banner-container">

      <div className="name-store fade-in-scroll">
        <h1>Vivu Fashion</h1>
        <p>Phong cách lên ngôi, tự tin tỏa sáng !!</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide><img src="banner1.png" alt="Banner 1" className="banner-image" /></SwiperSlide>
        <SwiperSlide><img src="banner2.png" alt="Banner 2" className="banner-image" /></SwiperSlide>
        <SwiperSlide><img src="banner3.png" alt="Banner 3" className="banner-image" /></SwiperSlide>
      </Swiper>

      <section className="about-us fade-in-scroll">
        <div className="tieude">
          <h2>Giới thiệu về cửa hàng</h2>
          <p>
            Vivu Fashion là thương hiệu thời trang uy tín với hơn 5 năm kinh nghiệm. <br />
            Chúng tôi cung cấp các mẫu quần áo hiện đại, trẻ trung, hợp xu hướng dành cho giới trẻ.
          </p>
        </div>
        <div className="carousel">
          <div className="carousel__container">
            <img src="/img1.png" alt="Ảnh 1" />
            <img src="/img2.png" alt="Ảnh 2" />
            <img src="/img3.png" alt="Ảnh 3" />
            <img src="/img4.png" alt="Ảnh 4" />
            <img src="/img2.png" alt="Ảnh 5" />
            <img src="/img3.png" alt="Ảnh 6" />
          </div>
        </div>
      </section>

      <div className="new-products">
        <h2>🔥 Sản phẩm mới</h2>
        <div className="product-list">
          {newProducts.slice(0, 5).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.hinhanh} alt={product.tensanpham} />
              <h3>{product.tensanpham}</h3>
              <p>{product.gia} VND</p>
              <button><a href="/cart">🛒 Add to cart</a></button>
            </div>
          ))}
        </div>
      </div>

      <section className="why-us fade-in-scroll">
        <h2>💡 Vì sao chọn Vivu Fashion?</h2>
        <ul>
          <li>✔️ Chất liệu cao cấp, bền đẹp</li>
          <li>✔️ Miễn phí đổi trả trong 7 ngày</li>
          <li>✔️ Giao hàng toàn quốc</li>
          <li>✔️ Hỗ trợ tư vấn 24/7</li>
        </ul>
      </section>

      <section className="policy fade-in-scroll">
        <h2>📋 Chính sách nổi bật</h2>
        <div className="policy-boxes">
          <div className="policy-item">
            <h4>Miễn phí vận chuyển</h4>
            <p>Đơn hàng từ 500.000đ</p>
          </div>
          <div className="policy-item">
            <h4>Đổi trả dễ dàng</h4>
            <p>Trong vòng 7 ngày</p>
          </div>
          <div className="policy-item">
            <h4>Hỗ trợ khách hàng</h4>
            <p>Hotline 0909 123 456</p>
          </div>
        </div>
      </section>

      <section className="testimonials fade-in-scroll">
        <h2>💬 Đánh giá từ khách hàng</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"Sản phẩm đẹp, giao nhanh và nhân viên rất nhiệt tình!"</p>
            <strong>- Linh Trần</strong>
          </div>
          <div className="testimonial">
            <p>"Tôi rất hài lòng với chất lượng và dịch vụ của shop."</p>
            <strong>- Minh Phạm</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
