import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <footer className="Footer-main">
                <div className="Footer-container">
                    <div className="Footer-grid">
                        <div className="Footer-column">
                            <h3 className="Footer-title">Exclusive</h3>
                            <p className="Footer-text">Subscribe</p>
                            <p className="Footer-text">Get 10% off your first order</p>
                            <div className="Footer-subscribe">
                                <input type="email" placeholder="Enter your email" className="Footer-input" />
                                <button className="Footer-button">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                        <div className="Footer-column">
                            <h3 className="Footer-title">Support</h3>
                            <p className="Footer-contact">111 CKM Cholk,Jaipur</p>
                            <p className="Footer-contact">Rajasthan, India.</p>
                            <p className="Footer-contact">exclusive@gmail.com</p>
                            <p className="Footer-contact">+88015-88888-9999</p>
                        </div>
                        <div className="Footer-column">
                            <h3 className="Footer-title">Account</h3>
                            <ul className="Footer-links">
                                <li><a href="/login" className="Footer-link">My Account</a></li>
                                <li><a href="/login" className="Footer-link">Login / Register</a></li>
                                <li><a href="/cart" className="Footer-link">Cart</a></li>
                                <li><a href="/wishlist" className="Footer-link">Wishlist</a></li>
                                <li><a href="/" className="Footer-link">Shop</a></li>
                            </ul>
                        </div>
                        <div className="Footer-column">
                            <h3 className="Footer-title">Quick Link</h3>
                            <ul className="Footer-links">
                                <li><a href="#" className="Footer-link">Privacy Policy</a></li>
                                <li><a href="#" className="Footer-link">Terms Of Use</a></li>
                                <li><a href="#" className="Footer-link">FAQ</a></li>
                                <li><a href="#" className="Footer-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer-bottom">
                        <p className="Footer-copyright">© Copyright @Rohit 2025. All right reserved</p>
                        <div className="Footer-social">
                            <a href="https://github.com/Rohit0072" target="_blank" className="Footer-social-link"><i className="fab fa-github"></i></a>
                            <a href="#" target="_blank" className="Footer-social-link"><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" className="Footer-social-link"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/rohit-singh-b74377239/" target="_blank" className="Footer-social-link"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer
