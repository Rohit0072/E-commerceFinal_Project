import React, { useState } from "react";
import { ArrowUpRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
import "./login.css";
const API_BASE_URL = "https://backend-onef.onrender.com"; 

export default function Login() {
  const { login } = useAuth(); 
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      login(data.token); 
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="ecom__login__container">
      <div className="ecom__login__cards__container">
        <div className="ecom__login__card ecom__login__card--dark">
          <div className="ecom__login__icon__circle ecom__login__icon__circle--gold">
            <ArrowUpRight className="ecom__login__icon" />
          </div>
          <div className="ecom__login__form__container">
            <h3 className="ecom__login__form__title">Login</h3>
            {error && <p className="ecom__login__error">{error}</p>}
            <form onSubmit={handleLogin}> {/* Use form submission */}
              <div className="ecom__login__input__group">
                <label className="ecom__login__label">Email</label>
                <div className="ecom__login__input__wrapper">
                  <Mail className="ecom__login__input__icon" />
                  <input
                    type="email"
                    className="ecom__login__input"
                    placeholder="email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="ecom__login__input__group">
                <label className="ecom__login__label">Password</label>
                <div className="ecom__login__input__wrapper">
                  <Lock className="ecom__login__input__icon" />
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    className="ecom__login__input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="ecom__login__password__toggle"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  >
                    {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="ecom__login__forgot__password">
                <Link to="#">Forgot password?</Link>
              </div>
              <button type="submit" className="ecom__login__submit__button"> {/* Change to type="submit" */}
                Login
              </button>
            </form>
          </div>
          <Link to="/signin" class="signin_link">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
