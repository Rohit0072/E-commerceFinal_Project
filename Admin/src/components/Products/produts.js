import React, { useEffect, useState } from 'react';
import Sidebar from '../siderbar/sidebar';
import axios from 'axios';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Produts = () => {
    const navigate = useNavigate();
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        axios.get('https://backend-onef.onrender.com/api/products')
            .then(res => {
                setTechs(res.data);
            })
            .catch(err => {
                console.error("Error fetching tech products:", err);
                toast.error("❌ Failed to fetch products");
            });
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`https://backend-onef.onrender.com/api/products/${id}`);
                toast.success("✅ Product deleted successfully");
                setTechs(prevTechs => prevTechs.filter(tech => tech._id !== id));
            } catch (error) {
                console.error("Error deleting product:", error);
                toast.error("❌ Failed to delete product");
            }
        }
    };

    const handleEdit = async (id) => {
        navigate(`/updateproduct`);
        // Optionally: pass ID as query or state if needed later
    };

    return (
        <>
            <Sidebar />
            <div className="px-4">
                <div className="flex justify-between items-center my-4">
                    <h2 className="text-xl font-bold">Tech Products</h2>
                    <Link to="/addproduct"
                        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600">
                        <Plus size={18} /> <span>Add Product</span>
                    </Link>
                </div>

                <div className="overflow-y-auto border border-gray-300 rounded-lg">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 text-black">
                                <th className="border p-2">ID</th>
                                <th className="border p-2">Title</th>
                                <th className="border p-2">Price</th>
                                <th className="border p-2">Description</th>
                                <th className="border p-2">Image</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {techs.map(tech => (
                                <tr key={tech._id}>
                                    <td className="border p-2">{tech._id}</td>
                                    <td className="border p-2">{tech.title}</td>
                                    <td className="border p-2">{tech.price}</td>
                                    <td className="border p-2">{tech.description}</td>
                                    <td className="border p-2">
                                        <img
                                            src={tech.images?.[0] || tech.images?.[1]}
                                            alt={tech.title}
                                            className="w-16 h-16 object-cover"
                                        />
                                    </td>
                                    <td className="border p-2">
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                onClick={() => handleEdit(tech._id)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <Pencil size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(tech._id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default Produts;
