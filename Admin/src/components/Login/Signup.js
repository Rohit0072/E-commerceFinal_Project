import React, { useState } from 'react'
import './signup.css'
import Login from './login.js'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import ToastNotification from '../toast-notification/toast.js';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [toast, setToast] = useState({ show: false, type: "", message: "" })
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setToast({ show: true, type: "error", message: "Please fill all fields!" })
            return
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setToast({ show: true, type: "error", message: "Enter Valid Email." })
            return
        }
        if (password.length < 6) {
            setToast({ show: true, type: "error", message: "Password must be at least 6 characters." });
            return;
        }
        if (password !== confirmPassword) {
            setToast({ show: true, type: "error", message: "Passwords do not match." })
            return;
        }
        try {
            await axios.post("https://backend-onef.onrender.com/api/auth/register", {
                name,
                email,
                password
            });
            setToast({ show: true, type: "success", message: "User registered successfully!" })
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            console.error("Signup Error:", error.response?.data || error.message);
            setToast({ show: true, type: "error", message: "Error registering user." })
        }
    }
    return (
        <>
            <div className='overlay-login'>
                <div className="login-form-container">
                    {toast.show && (
                        <ToastNotification
                            type={toast.type}
                            message={toast.message}
                            onClose={() => setToast({ show: false })} />
                    )}
                    <p className="login-title">Sign Up</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="login-input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" value={name} autoComplete="username"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="Email" placeholder="" autoComplete="email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" autoComplete="password"
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="Confirm-password">Confirm Password</label>
                            <input type="password" name="Confirm-password" id="Confirm-password" autoComplete="confirm-password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login-sign Sign-up-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Signup
