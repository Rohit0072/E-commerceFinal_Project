import React from 'react'
import { useState, useEffect } from "react"
// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Home from '../src/components/Home/home';
import Navbar from '../src/components/navbar/navbar';
import Sidebar from './components/siderbar/sidebar';
// import Sidebar from './components/siderbar/si`debar';
import Login from '../src/components/Login/login';
import Signup from './components/Login/Signup';
import AddProduct from '../src/components/AddProduct/addproduct';
import UpdateProduct from './components/UpdateProduct/updateproduct';
import Produts from './components/Products/produts';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token)
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />
        } />

        {isAuthenticated && (
          <>
            <Route path="/" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <Produts/></>} />
            <Route path="/signup" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <Signup/></>} />
            <Route path="/addproduct" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <AddProduct/> </>} />
            <Route path="/updateproduct" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <UpdateProduct/> </>} />
            <Route path="/products" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <Produts/> </>} />
          </>
        )}
        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
      {/* <Routes>
        
        <Route path="/" element={<><Navbar /> <Sidebar /></>} />
        <Route path="/addproduct" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <AddProduct /> </>} />
        <Route path="/updateproduct" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <UpdateProduct /> </>} />
        <Route path="/products" element={<><Navbar setIsAuthenticated={setIsAuthenticated} /> <Produts /> </>} />
      </Routes> */}
    </>
  )
}

export default App

