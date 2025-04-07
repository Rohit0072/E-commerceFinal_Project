
import { CheckCircle2, AlertCircle, X } from "lucide-react"
import { useState, useEffect } from "react"
import "./toast.css" // Import CSS file



export default function ToastNotification({ type, message, onClose, duration = 3000 }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onClose, 300) // Allow time for fade-out animation
        }, duration)
        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <div className={`toast-container ${isVisible ? "show" : "hide"} ${type}`}>
            {type === "success" ? (
                <CheckCircle2 className="icon success-icon" />
            ) : (
                <AlertCircle className="icon error-icon" />
            )}
            <span className="toast-message">{message}</span>
            <button
                onClick={() => {
                    setIsVisible(false)
                    setTimeout(onClose, 300)
                }}
                className="close-btn"
            >
                
            </button>
        </div>
    )
}