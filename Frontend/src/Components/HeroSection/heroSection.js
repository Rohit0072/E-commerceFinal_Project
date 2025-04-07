import React from 'react'
import './heroSection.css'
import firstImage from '../../assets/heroSection.jpeg';
import { Link } from 'react-router-dom';
function HeroSection() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">Discover the Latest Trends</h1>
                            <p className="hero-description">Shop our exclusive collection of fashion, electronics, and more with
                                amazing deals.</p>
                            <a href="#" className="hero-button">Shop Now</a>
                        </div>
                        <div className="hero-image-container">
                            <img src={firstImage} alt="Hero Image" className="hero-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Featured Categories --> */}
            <section className="categories-section">
                <div className="categories-container">
                    <h2 className="categories-title">Featured Categories</h2>
                    <div className="categories-grid">
                        <Link to='/fashion' className="category-item">
                            <div className="category-icon-container">
                                <i className="fas fa-tshirt category-icon"></i>
                            </div>
                            <h2 className="category-name">Fashion</h2>
                        </Link>
                        <Link to='/fashion' className="category-item">
                            <div className="category-icon-container">
                                <i className="fas fa-mobile-alt category-icon"></i>
                            </div>
                            <h3 className="category-name">Electronics</h3>
                        </Link>
                        <Link to='/fashion' className="category-item">
                            <div className="category-icon-container">
                                <i className="fas fa-couch category-icon"></i>
                            </div>
                            <h3 className="category-name">Home & Living</h3>
                        </Link>
                        <Link to='/fashion' className="category-item">
                            <div className="category-icon-container">
                                <i className="fas fa-heartbeat category-icon"></i>
                            </div>
                            <h3 className="category-name">Health & Beauty</h3>
                        </Link>
                    </div>
                </div>
            </section>

            {/* <!-- Featured Products --> */}
            <section className="products-section">
                <div className="products-container">
                    <div className="products-header">
                        <h2 className="products-title">Featured Products</h2>
                        <a href="#" className="products-view-all">View All</a>
                    </div>
                    <div className="products-grid">
  {/* <!-- Product 1 --> */}
  <Link to="/product/67f2be87a5c5279344a1aa37" className="product-card">
    <div className="product-image-container">
      <img src="https://unstd.in/cdn/shop/files/SAGE-GREEN-2.jpg?v=1734507963&width=800" alt="Product" className="product-image" />
      <div className="product-wishlist">
        <i className="far fa-heart"></i>
      </div>
    </div>
    <div className="product-details">
      <h3 className="product-title">Premium T-Shirt</h3>
      <div className="product-price">
        <span className="product-current-price">$45.00</span>
        <span className="product-original-price">$60.00</span>
      </div>
      <div className="product-rating">
        <div className="product-stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <span className="product-reviews">(45)</span>
      </div>
    </div>
  </Link>

  {/* <!-- Product 2 --> */}
  <Link to="/product/67f3435b26934098929c7718" className="product-card">
    <div className="product-image-container">
      <img src="https://shopatsc.com/cdn/shop/products/CH520_1000x1000_Black_G.jpg?v=1681194265" alt="Product" className="product-image" />
      <div className="product-wishlist">
        <i className="far fa-heart"></i>
      </div>
    </div>
    <div className="product-details">
      <h3 className="product-title">Wireless Headphones</h3>
      <div className="product-price">
        <span className="product-current-price">$120.00</span>
        <span className="product-original-price">$150.00</span>
      </div>
      <div className="product-rating">
        <div className="product-stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <span className="product-reviews">(32)</span>
      </div>
    </div>
  </Link>

  {/* <!-- Product 3 --> */}
  <Link to="/product/67f3452b26934098929c771a" className="product-card">
    <div className="product-image-container">
      <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MC7K4ref_FV99_VW_34FR+watch-case-46-titanium-gold-cell-s10_VW_34FR+watch-face-46-titanium-gold-s10_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1725645630838" alt="Product" className="product-image" />
      <div className="product-wishlist">
        <i className="far fa-heart"></i>
      </div>
    </div>
    <div className="product-details">
      <h3 className="product-title">Smart Watch</h3>
      <div className="product-price">
        <span className="product-current-price">$225.00</span>
        <span className="product-original-price">$280.00</span>
      </div>
      <div className="product-rating">
        <div className="product-stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <span className="product-reviews">(59)</span>
      </div>
    </div>
  </Link>

  {/* <!-- Product 4 --> */}
  <Link to="/product/67f346eb26934098929c771f" className="product-card">
    <div className="product-image-container">
      <img src="https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lock---go---M22311_PM2_Front%20view.png?wid=730&hei=730" alt="Product" className="product-image" />
      <div className="product-wishlist">
        <i className="far fa-heart"></i>
      </div>
    </div>
    <div className="product-details">
      <h3 className="product-title">Designer Handbag</h3>
      <div className="product-price">
        <span className="product-current-price">$180.00</span>
        <span className="product-original-price">$220.00</span>
      </div>
      <div className="product-rating">
        <div className="product-stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <i className="far fa-star"></i>
        </div>
        <span className="product-reviews">(28)</span>
      </div>
    </div>
  </Link>
</div>
                </div>
            </section>

            {/* <!-- Services Section --> */}
            <section className="Services-section">
                <div className="Services-container">
                    <div className="Services-grid">
                        <div className="Services-item">
                            <div className="Services-icon-container">
                                <i className="fas fa-truck Services-icon"></i>
                            </div>
                            <h3 className="Services-title">FREE AND FAST DELIVERY</h3>
                            <p className="Services-description">Free delivery for all orders over $140</p>
                        </div>
                        <div className="Services-item">
                            <div className="Services-icon-container">
                                <i className="fas fa-headset Services-icon"></i>
                            </div>
                            <h3 className="Services-title">24/7 CUSTOMER SERVICE</h3>
                            <p className="Services-description">Friendly 24/7 customer support</p>
                        </div>
                        <div className="Services-item">
                            <div className="Services-icon-container">
                                <i className="fas fa-shield-alt Services-icon"></i>
                            </div>
                            <h3 className="Services-title">MONEY BACK GUARANTEE</h3>
                            <p className="Services-description">We return money within 30 days</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
