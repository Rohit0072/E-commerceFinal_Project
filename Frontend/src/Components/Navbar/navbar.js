import React, { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import './navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <header className="header-border">
                <div className="header-container">
                    <Link to="/" className="header-logo">Exclusive</Link>
                    <nav className="header-nav nav_linkes" style={{
                        display: window.innerWidth >= 768 ? "flex" : isMenuOpen ? "flex" : "none",
                        position: window.innerWidth < 768 ? "absolute" : "static",
                        top: "60px",
                        left: "0",
                        right: "0",
                        backgroundColor: "white",
                        flexDirection: window.innerWidth < 768 ? "column" : "row",
                        padding: "1rem",
                        boxShadow: window.innerWidth < 768 ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
                        zIndex: "50",
                    }}>
                        <Link to="/" className="header-nav-link">Home</Link>
                        <Link to="/contact" className="header-nav-link">Contact</Link>
                        <Link to="/about" className="header-nav-link">About</Link>
                    </nav>

                    <div className="header-actions">
                        <div className="header-search">
                            <input type="text" placeholder="What are you looking for?" className="header-search-input" />
                            <button className="header-search-button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <Link to="/wishlist" className="header-icon"><i className="fas fa-heart"></i></Link>

                        <Link to="/cart" className="header-icon"><i className="fas fa-shopping-cart"></i></Link>
                        <Link to="/login" className="header-icon"><i className="far fa-user"></i></Link>
                        <button className="header-menu-toggle">        
                            <FaBars className="menu-icon" onClick={toggleMenu} style={{ fontSize: "24px", cursor: "pointer" }} />
                        </button>
                    </div>
                </div>
            </header>


        </>
    )
}

export default Navbar
