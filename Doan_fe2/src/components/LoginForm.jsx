import React from 'react';
import './AuthForm.css';

const LoginForm = () => {
  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        {/* Cột trái: Form */}
        <form className="auth-form">
          <h2>Đăng Nhập</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mật khẩu" required />
          <button type="submit">Đăng Nhập</button>
          <p className="auth-switch">
            Chưa có tài khoản? <a href="/register">Đăng ký</a>
          </p>
        </form>

        {/* Cột phải: Logo + mô tả */}
        <div className="auth-info">
          <img src="/Vivu.jpg" alt="Logo" className="auth-logo" />
          <h3>Chào mừng đến với Vivu Fashion!</h3>
          <p>Khám phá phong cách thời trang hiện đại, cá tính và tự tin mỗi ngày.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
