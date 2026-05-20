// src/components/Cart.js

import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Dữ liệu mẫu tạm thời
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Cà phê sữa đá',
      price: 25000,
      quantity: 2,
      image: 'http://localhost/php-app/uploads/caphe.jpg',
    },
    {
      id: 2,
      name: 'Trà đào cam sả',
      price: 30000,
      quantity: 1,
      image: 'http://localhost/php-app/uploads/tradao.jpg',
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Giỏ Hàng Của Bạn</h2>
      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm trong giỏ hàng.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>Giá: {item.price.toLocaleString()} VNĐ</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>Xóa</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Tổng cộng: {total.toLocaleString()} VNĐ</h3>
        <button >
          <Link to="/payment" className="auth-link">Thanh Toán</Link>
      </button>
      </div>
    </div>
  );
};

export default Cart;
