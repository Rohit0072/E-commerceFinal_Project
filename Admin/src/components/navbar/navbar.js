import React, { useState, useEffect } from 'react';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const Navbar = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        setIsAuthenticated(false)
        navigate("/login")
    };
    return (
        <>
            {/* <nav className="bg-white z-[9999] dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap items-center justify-between p-4">
                    <div className="flex justify-between md:order-2space-x-3  md:space-x-0 rtl:space-x-reverse">
                        
                        <Link to="/login" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
                    </div>
                    <button className='navbar-btn' onClick={handleLogout}>Logout</button>
                </div>
            </nav> */}
            <header className='flex border-b py-4 px-4 sm:px-10 bg-[#fff] font-sans min-h-[70px] tracking-wide relative z-50'>
                <div className='flex items-center justify-between w-full'>

                    {/* Left side - Login */}
                    <div>
                        <Link to={'/signup'}
                            className='px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'>
                            Sign-up
                        </Link>
                    </div>

                    {/* Right side - Logout */}
                    <div>
                        <button
                            className='px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'
                            onClick={handleLogout}>
                            Logout
                        </button>
                    </div>

                </div>
            </header>

        </>
    );
};

export default Navbar;
