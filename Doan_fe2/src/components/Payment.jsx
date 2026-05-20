import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cod",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đã gửi thông tin thanh toán!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="payment-container">
      <h2>Thanh Toán</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        {/* Cột trái - Thông tin người dùng */}
        <div className="left-col">
          <div className="form-group">
            <label htmlFor="fullName">Họ và tên</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Nhập họ và tên"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Nhập email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Nhập số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Địa chỉ giao hàng</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Nhập địa chỉ"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Cột phải - Phương thức thanh toán + Ghi chú */}
        <div className="right-col">
          <div className="form-group">
            <label>Phương thức thanh toán</label>
            <div className="payment-methods">
              <label className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                />
                Thanh toán khi nhận hàng
              </label>
              <label className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === "credit"}
                  onChange={handleChange}
                />
                Thẻ tín dụng
              </label>
              <label className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                />
                Paypal
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="note">Ghi chú</label>
            <textarea
              id="note"
              name="note"
              rows="3"
              placeholder="Ghi chú thêm (nếu có)..."
              value={formData.note}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">Thanh Toán</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
