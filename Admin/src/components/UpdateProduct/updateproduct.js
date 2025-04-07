import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../siderbar/sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    rating: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://backend-onef.onrender.com/api/foods/${formData.id}`, formData);
      toast.success('✅ Product updated successfully!');
      console.log(res.data);
    } catch (error) {
      toast.error('❌ Failed to update product.');
      console.error(error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="max-w-2xl mx-auto shadow-md px-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Update Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="id"
              placeholder="Enter Product ID to update"
              className="AddProduct-input w-full border p-2 rounded"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="AddProduct-input w-full border p-2 rounded"
              onChange={handleChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="AddProduct-input w-full border p-2 rounded"
              onChange={handleChange}
            />
            <input
              type="url"
              name="image"
              placeholder="Image URL"
              className="AddProduct-input w-full border p-2 rounded"
              onChange={handleChange}
            />
            <input
              type="number"
              step="0.1"
              name="rating"
              placeholder="Rating"
              className="AddProduct-input w-full border p-2 rounded"
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="AddProduct-input w-full border p-2 rounded"
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              className="AddProduct-input w-full border p-2 rounded"
              rows="4"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default UpdateProduct;
