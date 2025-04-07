import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  ShoppingCart,
  Heart,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { addToWishlist } from "../../api/wishlistApi";
import { addToCart } from "../../api/cartApi";
import "./productpage.css";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Yellow", "Red", "Black"];

  const handleSizeSelect = (size) => setSelectedSize(size);
  const handleColorSelect = (color) => setSelectedColor(color);
  const handleThumbnailClick = (index) => setCurrentImage(index);
  const handleScrollThumbnails = (direction) => {};

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://backend-onef.onrender.com/api/products/${id}`
        );
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Failed to load product", error);
        toast.error("Failed to load product");
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Please login to use wishlist.");

    try {
      await addToWishlist(product._id, token);
      toast.success("Added to wishlist!");
    } catch (error) {
      console.error("Wishlist error:", error);
      toast.error("Failed to add to wishlist");
    }
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Please login to add to cart.");

    try {
      await addToCart(product._id, 1);
      toast.success("Added to cart!");
    } catch (error) {
      console.error("Cart error:", error);
      toast.error("Failed to add to cart");
    }
  };

  const handleBuyNow = () => {
    toast.info("Proceeding to Buy...");
  };

  if (!product) return <div>Loading...</div>;

  const thumbnails =
    product.images?.length > 0 ? product.images : [product.image];
  const mainImage = thumbnails[currentImage] || "/placeholder.svg";

  return (
    <div className="product-detail__container">
      <div className="product-detail__breadcrumb">
        <span className="product-detail__breadcrumb-item">Home</span>
        <ChevronRight size={14} className="product-detail__breadcrumb-separator" />
        <span className="product-detail__breadcrumb-item">Shop</span>
        <ChevronRight size={14} className="product-detail__breadcrumb-separator" />
        <span className="product-detail__breadcrumb-item">
          {product.category || "Collection"}
        </span>
        <ChevronRight size={14} className="product-detail__breadcrumb-separator" />
        <span className="product-detail__breadcrumb-item product-detail__breadcrumb-item--active">
          {product.name}
        </span>
      </div>

      <div className="product-detail__content">
        <div className="product-detail__gallery">
          <div className="product-detail__thumbnails">
            <button
              className="product-detail__thumbnail-scroll-button"
              onClick={() => handleScrollThumbnails("up")}
            >
              <ChevronUp size={20} />
            </button>

            <div className="product-detail__thumbnails-container">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`product-detail__thumbnail-wrapper ${
                    currentImage === index
                      ? "product-detail__thumbnail-wrapper--active"
                      : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={thumb || "/placeholder.svg"}
                    alt={`Product view ${index + 1}`}
                    className="product-detail__thumbnail-image"
                  />
                </div>
              ))}
            </div>

            <button
              className="product-detail__thumbnail-scroll-button"
              onClick={() => handleScrollThumbnails("down")}
            >
              <ChevronDown size={20} />
            </button>
          </div>

          <div className="product-detail__main-image-container">
            <img
              src={mainImage}
              alt={product.title}
              className="product-detail__main-image"
            />
          </div>
        </div>

        <div className="product-detail__info">
          <h1 className="product-detail__title">{product.title}</h1>

          <div className="product-detail__rating">
            <div className="product-detail__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`product-detail__star ${
                    i < Math.floor(product.rating || 0)
                      ? "product-detail__star--filled"
                      : ""
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="product-detail__review-count">
              Rating: {product.rating || "N/A"}
            </span>
          </div>

          <div className="product-detail__pricing">
            <span className="product-detail__original-price">
            ${product.price + 500}
            </span>
            <span className="product-detail__sale-price">
            ${product.price}
            </span>
            <span className="product-detail__sale-tag">On Sale</span>
            <span className="product-detail__offer-ends">
              Offer ends April 27
            </span>
          </div>

          <div className="product-detail__options">
            <div className="product-detail__color-selector">
              <h3 className="product-detail__option-title">Color</h3>
              <div className="product-detail__color-options">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`product-detail__color-button product-detail__color-button--${color.toLowerCase()} ${
                      selectedColor === color
                        ? "product-detail__color-button--selected"
                        : ""
                    }`}
                    onClick={() => handleColorSelect(color)}
                  >
                    {color === selectedColor && (
                      <span className="product-detail__color-check">✓</span>
                    )}
                    <span className="product-detail__color-name">{color}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="product-detail__actions">
            <button
              className="product-detail__add-to-cart-button"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button
              className="product-detail__buy-now-button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

            <button
              className="product-detail__wishlist-button"
              onClick={handleAddToWishlist}
            >
              <Heart size={18} />
              Add to Wishlist
            </button>
          </div>

          <div className="product-detail__description-container">
            <h3 className="product-detail__description-title">Description</h3>
            <p className="product-detail__description-text">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastClassName="custom-toast"
/>
    </div>
  );
}
