import axios from "axios";

const API_URL = "https://backend-onef.onrender.com/api/cart";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getCart = () => axios.get(API_URL, authHeader());

export const addToCart = (productId, quantity = 1) =>
  axios.post(
    API_URL,
    { productId, quantity },
    authHeader()
  );

export const updateCartItem = (productId, quantity) =>
  axios.put(
    `${API_URL}/${productId}`,
    { quantity },
    authHeader()
  );

export const removeFromCart = (productId) =>
  axios.delete(`${API_URL}/${productId}`, authHeader());
