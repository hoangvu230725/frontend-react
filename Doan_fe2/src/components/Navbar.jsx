import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy danh mục từ API
    axios.get('http://localhost/php-app/api.php?action=getCategories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("Lỗi khi lấy danh mục:", error);
      });
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      axios.get(`http://localhost/php-app/api.php?action=searchProducts&query=${searchQuery}`)
        .then(res => setSuggestions(res.data))
        .catch(err => console.error("Lỗi gợi ý:", err));
    }, 300); // chờ 300ms

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/products?searchQuery=${encodeURIComponent(searchQuery)}`);
      setSuggestions([]); // ẩn gợi ý khi nhấn tìm
    } else {
      navigate('/products');
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchQuery(name);
    setSuggestions([]);
    navigate(`/products?searchQuery=${encodeURIComponent(name)}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/Vivu.jpg" alt="logo" />
        </div>

        <ul className="nav-links">
          <li><a href="/">Trang Chủ</a></li>
          <li><a href="/products">Sản Phẩm</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" role="button">Danh Mục</a>
            <ul className="dropdown-menu">
              {categories.map(category => (
                <li
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {category.tendanhmuc}
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/contact">Liên Hệ</Link></li>
        </ul>

        <div className="nav-icons" style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="search-box"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Tìm kiếm</button>

          {/* Hiển thị gợi ý */}
          {suggestions.length > 0 && (
            <ul className="suggestion-box">
              {suggestions.map(product => (
                <li
                  key={product.id}
                  onClick={() => handleSuggestionClick(product.tensanpham)}
                  style={{ cursor: 'pointer' }}
                >
                  {product.tensanpham}
                </li>
              ))}
            </ul>
          )}

          <Link to="/cart"><FaShoppingCart className="icon" /></Link>

          <div className="auth-section">
            <Link to="/login" className="auth-link">Đăng Nhập</Link>
            <span style={{ margin: '0 5px' }}>/</span>
            <Link to="/register" className="auth-link">Đăng Ký</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
