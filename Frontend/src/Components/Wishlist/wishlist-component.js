import React, { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "../../api/wishlistApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import './wishlist-component-styles.css';

const WishlistComponent = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const data = await getWishlist();
        setWishlistItems(data.products);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await removeFromWishlist(productId, token);

      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item.productId !== productId)
      );
    } catch (error) {
      console.error("Failed to remove item from wishlist:", error);
    }
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">Your Wishlist</h2>
      <div className="product-list">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div key={item._id} className="product-card">
              <button
                className="cancel-btn"
                onClick={() => handleRemove(item.productId)}
                title="Remove from wishlist"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name || "Product"}
                className="product-image"
              />
              <h3 className="product-title">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <p className="product-price">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="no-products">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistComponent;
