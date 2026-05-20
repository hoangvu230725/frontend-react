import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Vivu Fashion</h3>
          <p>
            Chúng tôi cung cấp những sản phẩm thời trang chất lượng, đa dạng mẫu mã,
            giúp bạn tự tin thể hiện phong cách của mình.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Liên hệ</h4>
          <p>Email: support@vivufashion.com</p>
          <p>Điện thoại: 0123 456 789</p>
          <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Vivu Fashion. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
};

export default Footer;
