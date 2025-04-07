import React, { useState, useEffect } from 'react';
import './login.css';

// Toast notification component
const LoginToast = ({ type, message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`login-toast login-toast-${type}`}>
            <span>{message}</span>
            <button className="login-toast-close" onClick={onClose}>&times;</button>
        </div>
    );
};

// Main Login Component
function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    // Check if user is already authenticated
    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            setIsAuthenticated && setIsAuthenticated(true);
            window.location.href = '/';
        }
    }, [setIsAuthenticated]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const showToast = (type, message) => {
        setToast({ show: true, type, message });
    };

    const closeToast = () => {
        setToast({ show: false, type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            showToast('error', 'Please fill all fields!');
            return;
        }

        if (!validateEmail(email)) {
            showToast('error', 'Please enter a valid email address');
            return;
        }

        try {
            setIsLoading(true);

            const response = await fetch('https://backend-onef.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 204) {
                throw new Error('Login failed: No content returned.');
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            localStorage.setItem('authToken', data.token);
            showToast('success', 'Login Successful!');

            setTimeout(() => {
                setIsAuthenticated && setIsAuthenticated(true);
                window.location.href = '/';
            }, 1500);

        } catch (error) {
            showToast('error', error.message || 'Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="login-overlay">
            <div className="login-form-container">
                <div className="login-toast-container">
                    {toast.show && (
                        <LoginToast
                            type={toast.type}
                            message={toast.message}
                            onClose={closeToast}
                        />
                    )}
                </div>

                <p className="login-title">Login</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-sign"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
