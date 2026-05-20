import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Lấy chi tiết sản phẩm
    axios.get(`http://localhost/php-app/api.php?action=getProductDetail&id=${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));

    // Lấy sản phẩm gợi ý (cùng danh mục hoặc sản phẩm mới)
    axios.get(`http://localhost/php-app/api.php?action=getNewProducts`)
      .then(res => setRelatedProducts(res.data.filter(p => p.id !== parseInt(id)).slice(0, 4)))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div className="product-detail-wrapper">
      <div className="product-main">
        <img
          className="product-image"
          src={`http://localhost/php-app/uploads/${product.hinhanh}`}
          alt={product.tensanpham}
        />
        <div className="product-info">
          <h1 className="product-title">{product.tensanpham}</h1>
          <p className="product-description">{product.mota}</p>
          <p className="product-price">{product.gia.toLocaleString('vi-VN')} VNĐ</p>
          <button className="buy-button"><a href="/cart">Mua Ngay</a></button>
        </div>
      </div>

      <div className="related-products-section">
        <h3>Sản phẩm gợi ý</h3>
        <div className="related-products-list">
          {relatedProducts.length > 0 ? relatedProducts.map(p => (
            <Link to={`/product/${p.id}`} key={p.id} className="related-product-item">
              <img
                src={`http://localhost/php-app/uploads/${p.hinhanh}`}
                alt={p.tensanpham}
                className="related-product-image"
              />
              <p className="related-product-name">{p.tensanpham}</p>
              <p className="related-product-price">{p.gia.toLocaleString('vi-VN')} VNĐ</p>
            </Link>
          )) : <p>Không có sản phẩm gợi ý</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
