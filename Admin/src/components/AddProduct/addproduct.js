import Sidebar from '../siderbar/sidebar';
import './addproduct.css';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addproduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        title: product.title,
        price: product.price,
        description: product.description,
        images: [product.image],
      };

      const res = await axios.post('https://backend-onef.onrender.com/api/products', productData);
      toast.success('✅ Product added successfully!');
      console.log(res.data);

      // Reset form fields
      setProduct({
        title: '',
        price: '',
        image: '',
        description: '',
      });
    } catch (error) {
      console.error('❌ Error adding product:', error);
      toast.error('❌ Failed to add product');
    }
  };

  return (
    <>
      <Sidebar />
      <div className="AddProduct-container">
        <form id="addProductForm" onSubmit={handleSubmit}>
          <div className="AddProduct-grid">
            <div>
              <label htmlFor="title" className="AddProduct-label">Product Title</label>
              <input
                type="text"
                id="title"
                className="AddProduct-input"
                value={product.title}
                onChange={handleChange}
                placeholder="The Gramercy Tavern Burger-4 Pack"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="AddProduct-label">Price</label>
              <input
                type="text"
                id="price"
                className="AddProduct-input"
                value={product.price}
                onChange={handleChange}
                placeholder="149.99"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="AddProduct-label">Image URL</label>
              <input
                type="url"
                id="image"
                className="AddProduct-input"
                value={product.image}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/photo..."
                required
              />
            </div>
          </div>

          <div className="AddProduct-field-group">
            <label htmlFor="description" className="AddProduct-label">Description</label>
            <textarea
              id="description"
              className="AddProduct-input"
              placeholder="Enter product description"
              rows="4"
              value={product.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="AddProduct-button">Add Product</button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Addproduct;
