import React, { useState, useEffect } from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import "./fashion.css";

function Fashion() {
  const itemsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(1);
  const [fashionProducts, setFashionProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFashionProducts = async () => {
      try {
        const response = await fetch("https://backend-onef.onrender.com/api/products?category.name=Electronics");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        const filteredFashionProducts = data.filter(
          (product) => product.category?.toLowerCase() === "fashion"
        );

        setFashionProducts(filteredFashionProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFashionProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (fashionProducts.length === 0) return <p>No products available.</p>;

  const totalPages = Math.ceil(fashionProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = fashionProducts.slice(startIndex, endIndex);

  return (
    <div className="products-section-container">
      <div className="products-section-header">
        <div className="products-section-label">
          <span>Fashion Collection</span>
        </div>
      </div>

      <div className="products-section-grid">
        {currentProducts.map((product) => (
          <div className="products-section-product" key={product._id}>
            <div className="products-section-product-img-container">
              <img
                src={product.image}
                alt={product.name}
                className="products-section-product-img"
              />
              <div className="products-section-product-actions">
                <button className="products-section-action-btn">
                  <FaHeart />
                </button>
                <button className="products-section-action-btn">
                  <FaEye />
                </button>
              </div>
            </div>
            <h3 className="products-section-product-title">{product.name}</h3>
            <div className="products-section-product-price">
              <span>${product.price}</span>
            </div>
            <div className="products-section-product-rating">
              <div className="products-section-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i + 1 <= Math.round(product.rating)
                        ? "products-section-star-filled"
                        : "products-section-star-empty"
                    }
                  />
                ))}
              </div>
              <span className="products-section-review-count">
                ({product.reviews})
              </span>
            </div>
            <div className="products-section-buttons">
              <button className="buy-btn">Buy</button>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        )
          .filter((page) =>
            totalPages > 5
              ? page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 2
              : true
          )
          .map((page, i, arr) => (
            <React.Fragment key={page}>
              {i > 0 && page - arr[i - 1] > 1 && <span className="pagination-dots">...</span>}
              <button
                className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </React.Fragment>
          ))}

        <button
          className="pagination-btn"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

export default Fashion;
