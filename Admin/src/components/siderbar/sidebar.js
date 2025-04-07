import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
    // const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showSidenav, setShowSidenav] = useState(false);
    // const toggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    // };

    return (
        <>

            {/* <button
                onClick={toggleSidebar}
                type="button"
                className="toogle-btn-sidebar top-[78px] left-0 z-50 inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded-lg bg-trans shadow-md hover:bg-[#111827] dark:text-gray-400">
                <span className="sr-only">Toggle sidebar</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clipRule="evenodd"></path>
                </svg>
            </button> */}
            {/* <aside
                className={`fixed top-[125px] left-0 z-40 w-64 h-full bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/products" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addproduct" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Add Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/updateproduct" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Update Product</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside> */}

            <div>
                {/* Toggle Button */}
                {!showSidenav && (
                    <button
                        onClick={() => setShowSidenav(true)}
                        className="top-[68px] left-8 bg-slate-800 text-slate-100 rounded-[15px] m-2 p-3 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                )}

                {/* Sidebar */}
                <AnimatePresence>
                    {showSidenav && (
                        <motion.nav initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.3 }}
                            className="fixed z-40 top-[70px] h-[90%] bg-slate-800 w-72 text-slate-100 p-8 top-0 left-0">
                            <button onClick={() => setShowSidenav(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className="space-y-4 mt-3 text-lg font-medium">
                                <li className="hover:text-[#5C5F7F] cursor-pointer">
                                    <Link to="/products"> Products </Link>
                                </li>
                                <li className="hover:text-[#5C5F7F] cursor-pointer">
                                    <Link to="/addproduct"> Add Products </Link>
                                </li>
                                <li className="hover:text-[#5C5F7F] cursor-pointer">
                                    <Link to="/updateproduct"> Update Products </Link>
                                </li>
                            </ul>

                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>

        </>
    )
}

export default Sidebar
