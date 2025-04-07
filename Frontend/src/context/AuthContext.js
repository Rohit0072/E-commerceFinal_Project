import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  const login = (userToken) => {
    setToken(userToken);
    localStorage.setItem("token", userToken);
  };

  const logout = async () => {
    try {
      await fetch("https://backend-onef.onrender.com/api/logout", {
        method: "POST",
        credentials: "include",
      });
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        console.warn("No token found, skipping fetchUser");
        return;
      }

      try {
        
        const response = await fetch("https://backend-onef.onrender.com/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok && data.success && data.user) {
          setUser(data.user);
        } else {
          console.error("Failed to fetch user data:", data.message);
          setUser(null);
        }
        
        if (response.ok && data.success && data.user) {
          setUser(data.user);
        }
        
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };

    fetchUser();
    
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
