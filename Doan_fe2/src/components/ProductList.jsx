import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';  // Sử dụng useLocation để lấy searchQuery từ URL
import './ProductList.css';
import { Link } from 'react-router-dom';


const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const location = useLocation();  // Dùng useLocation để lấy query string từ URL
  const searchQuery = new URLSearchParams(location.search).get('searchQuery'); // Lấy giá trị searchQuery từ URL

  const fetchAllProducts = () => {
    axios.get('http://localhost/php-app/api.php?action=getProducts')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Có lỗi khi lấy sản phẩm:", error));
  };

  const fetchProductsByCategory = (categoryId) => {
    axios.get(`http://localhost/php-app/api.php?action=getProductsByCategory&categoryId=${categoryId}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Có lỗi khi lấy sản phẩm:", error));
  };

  const fetchProductsBySearch = (query) => {
    axios.get(`http://localhost/php-app/api.php?action=searchProducts&query=${encodeURIComponent(query)}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Có lỗi khi tìm kiếm sản phẩm:", error));
  };

  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      fetchProductsBySearch(searchQuery); // Ưu tiên tìm kiếm
    } else if (categoryId) {
      fetchProductsByCategory(categoryId);  // Lọc theo danh mục nếu có categoryId
    } else if (selectedCategory !== null) {
      fetchProductsByCategory(selectedCategory);  // Lọc theo selectedCategory nếu có
    } else {
      fetchAllProducts();  // Nếu không có gì, hiển thị tất cả
    }
  }, [categoryId, selectedCategory, searchQuery]);

  return (
    <div>
      <h2>Sản phẩm</h2>
      <div className="product-list">
        {products.length > 0 ? (
  products.map(product => (
    <div key={product.id} className="product-item">
      <img src={`http://localhost/php-app/uploads/${product.hinhanh}`} alt={product.tensanpham} />
      <h3>{product.tensanpham}</h3>
      <p>{product.mota}</p>
      <p>{product.gia} VNĐ</p>

      {/* Nút xem chi tiết sản phẩm */}
    <button><Link to={`/product/${product.id}`}>Xem Chi Tiết</Link></button>


      {/* Nút thêm vào giỏ hàng nếu bạn muốn vẫn giữ */}
      <button><a href="/cart">Thêm Vào Giỏ Hàng</a></button>
    </div>
  ))
) : (
  <p>Không có sản phẩm nào.</p>
)}
      </div>
    </div>
  );
};

export default ProductList;
