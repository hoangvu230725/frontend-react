// src/components/Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>📞 Liên Hệ Với Chúng Tôi</h2>
      <p>Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ!</p>

      <form className="contact-form">
        <input type="text" placeholder="Họ và tên" required />
        <input type="email" placeholder="Email của bạn" required />
        <textarea placeholder="Nội dung liên hệ..." rows="5" required></textarea>
        <button type="submit">Gửi Liên Hệ</button>
      </form>

      <div className="contact-info">
        <h4>Thông tin cửa hàng</h4>
        <p>📍 123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
        <p>📧 support@f2coffee.vn</p>
        <p>📱 0909 123 456</p>
      </div>
    </div>
  );
};

export default Contact;
