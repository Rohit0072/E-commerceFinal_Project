import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./fashion.css"; 
import { addToWishlist } from "../../api/wishlistApi";
import { addToCart } from "../../api/cartApi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Electronics = () => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://backend-onef.onrender.com/api/products?category.name=Electronics")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error("Error fetching electronics:", error));
    }, []);

    const handleWishlist = async (productId) => {
        if (!token) {
            alert("Please login to use the wishlist");
            return;
        }

        try {
            await addToWishlist(productId, token);
            setWishlist((prev) => [...prev, productId]);
        } catch (error) {
            console.error("Failed to add to wishlist:", error);
        }
    };

    const handleAddToCart = async (productId) => {
        if (!token) {
            alert("Please login to add to cart");
            return;
        }

        try {
            await addToCart(productId, token);
            setCart((prev) => [...prev, productId]);
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="category-container">
            <h2 className="category-title">Electronics</h2>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            <div
                                className="product-clickable"
                                onClick={() => handleProductClick(product._id)}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={product.images?.[0] || "https://via.placeholder.com/150"}
                                    alt={product.title}
                                    className="product-image"
                                />
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">${product.price}</p>
                            </div>
                            <div className="product-buttons">
                                <button
                                    className="buy-btn"
                                    onClick={() => handleAddToCart(product._id)}
                                >
                                    {cart.includes(product._id) ? "Added" : "Buy"}
                                </button>
                                <button
                                    className="wishlist-btn"
                                    onClick={() => handleWishlist(product._id)}
                                >
                                    {wishlist.includes(product._id) ? (
                                        <FaHeart color="red" />
                                    ) : (
                                        <FaRegHeart />
                                    )}
                                    Wishlist
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No electronics products found.</p>
                )}
            </div>
        </div>
    );
};

export default Electronics;
