import React from "react";
import "./payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();

    return (
        <div className="payment-container">
            <h2>Scan & Pay</h2>
            <p>Scan the QR code below to complete your payment.</p>
            <img src="../Assests/QRCode.jpeg" alt="QR Code" className="qr-image" />
            <button className="back-button" onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
};

export default Payment;
