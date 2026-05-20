import React from 'react';
import './AuthForm.css';

const RegisterForm = () => {
  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        {/* Cột trái: Form đăng ký */}
        <form className="auth-form">
          <h2>Đăng Ký</h2>
          <input type="text" placeholder="Họ tên" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mật khẩu" required />
          <button type="submit">Đăng Ký</button>
          <p className="auth-switch">
            Đã có tài khoản? <a href="/login">Đăng nhập</a>
          </p>
        </form>

        {/* Cột phải: Logo + giới thiệu */}
        <div className="auth-info">
          <img src="/Vivu.jpg" alt="Logo" className="auth-logo" />
          <h3>Gia nhập cộng đồng Vivu Fashion</h3>
          <p>Đăng ký ngay để nhận nhiều ưu đãi, cập nhật xu hướng và khuyến mãi hấp dẫn!</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
