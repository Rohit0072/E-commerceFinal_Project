const API_URL = "https://backend-onef.onrender.com/api/wishlist";

export const fetchWishlist = async (token) => {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch wishlist");
  return res.json();
};

export const addToWishlist = async (productId, token) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId }),
  });
  if (!res.ok) throw new Error("Failed to add to wishlist");
  return res.json();
};

export const removeFromWishlist = async (productId, token) => {
  const res = await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to remove from wishlist");
  return res.json();
};
export const getWishlist = async () => {
    const token = localStorage.getItem("token");
  
    const res = await fetch("https://backend-onef.onrender.com/api/wishlist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch wishlist");
    }
  
    const data = await res.json();
    return data;
  };
  
