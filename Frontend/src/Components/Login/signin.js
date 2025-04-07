import React, { useState } from "react";
import { ArrowUpRight, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const API_BASE_URL = "https://backend-onef.onrender.com"; 

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); 

  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      showToast("Account created successfully! Please login.");
      navigate("/login"); 
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  return (
    <div className="sign_in_page ecom__login__card ecom__login__card--light">
      <div className="ecom__login__icon__circle ecom__login__icon__circle--dark">
        <ArrowUpRight className="ecom__login__icon" />
      </div>
      <div className="ecom__login__form__container">
        <h3 className="ecom__login__form__title">Sign Up</h3>
        <form onSubmit={handleSignup}>
          <div className="ecom__login__input__group">
            <label className="ecom__login__label">Name & Email</label>
            <div className="ecom__login__input__wrapper">
              <User className="ecom__login__input__icon" />
              <input
                type="text"
                className="ecom__login__input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="ecom__login__input__wrapper">
              <User className="ecom__login__input__icon" />
              <input
                type="email"
                className="ecom__login__input"
                placeholder="Email"
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
                type={showSignupPassword ? "text" : "password"}
                className="ecom__login__input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="ecom__login__input__group">
            <label className="ecom__login__label">Confirm Password</label>
            <div className="ecom__login__input__wrapper">
              <Lock className="ecom__login__input__icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="ecom__login__input"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="ecom__login__submit__button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
