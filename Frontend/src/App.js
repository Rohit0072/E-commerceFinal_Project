import logo from './logo.svg';
import './App.css'
import Home from './Components/Pages/home'
import About from './Components/Pages/about'
import Contact from './Components/Pages/contact'
import Error from './Components/Pages/error'
import Login from './Components/Pages/login'
import Signin from './Components/Pages/signin'
import Fashion from './Components/Pages/fashion'
import Cart from './Components/Pages/cart'
import WishList from './Components/Pages/wishlist'
import Profile from './Components/Pages/profile'
import ProductPage from './Components/Pages/productpage'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import { ToastContainer } from "react-toastify";

function App() {
  const { token, user } = useAuth();

  const router = createBrowserRouter([
    { path: '/', element: <ProtectedRoute><Home/></ProtectedRoute> },
    { path: '/about', element: <About/> },
    { path: '/contact', element: <Contact/> },
    { path: '/login', element: token ? <Navigate to="/profile" replace /> : <Login/> },
    { path: '/signin', element: <Signin/> },
    { path: '/fashion', element: <ProtectedRoute><Fashion/></ProtectedRoute> },
    { path: '/wishlist', element: <ProtectedRoute><WishList/></ProtectedRoute> },
    { path: '/cart', element: <ProtectedRoute><Cart/></ProtectedRoute> },
    { path: '/profile', element: <ProtectedRoute><Profile user={user} /></ProtectedRoute> },
    { path: '/product/:id', element: <ProtectedRoute><ProductPage/></ProtectedRoute> },
    { path: '*', element: <Error/> }
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
