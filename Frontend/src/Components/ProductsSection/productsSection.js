import React, { useEffect, useState } from "react";
import "./fashion.css";
import { useNavigate } from "react-router-dom";

function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://backend-onef.onrender.com/api/products?category.name=Electronics"
        );
        const data = await res.json();
        setProducts(data.slice(1, 9));
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="products-section-container">
      {/* Header */}
      <div className="products-section-header">
        <div className="products-section-label">
          <span>Our Products</span>
        </div>
      </div>

      {/* Title and Navigation */}
      <div className="products-section-title-nav">
        <h2 className="products-section-heading">Explore Our Products</h2>
        <div className="products-section-nav"></div>
      </div>

      {/* Products Grid */}
      <div className="products-section-grid">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map((product, index) => (
            <div
              className="products-section-product"
              key={product._id || index}
              onClick={() => handleProductClick(product._id)}
              style={{ cursor: "pointer" }}
            >
              <div className="products-section-product-img-container">
                <img
                  src={product.images?.[0] || "https://placehold.co/150x150"}
                  alt={product.title}
                  className="products-section-product-img"
                />
                <div className="products-section-product-actions">
                  {/* You can add buttons/icons here if needed */}
                </div>
              </div>
              <h3 className="products-section-product-title">{product.title}</h3>
              <div className="products-section-product-price">
                <span>${product.price}</span>
              </div>
              <div className="products-section-product-rating">
                <div className="products-section-stars">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < (index % 5) + 1
                            ? "products-section-star-filled"
                            : "products-section-star-empty"
                        }`}
                      ></i>
                    ))}
                </div>
                <span className="products-section-review-count">
                  ({Math.floor(Math.random() * 200 + 20)} reviews)
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsSection;
