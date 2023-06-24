import React from "react";
import { useNavigate } from "react-router-dom";
import "./success.css"; // Import the CSS file
import successOrderImage from "./success-order.gif"; // Import the GIF image

const Success = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/techstore");
  };

  return (
    <div className="container">
      <div className="text-2xl font-bold">Thanks for shopping with us!</div>
      <div className="text-lg font-bold mt-2">
        Your order has been placed successfully.
      </div>
      <div className="success-image">
        <img src={successOrderImage} alt="Success Order" />
      </div>
      <div className="box-container">
        <div className="box" onClick={handleContinueShopping}>
          Continue Shopping
        </div>
      </div>
    </div>
  );
};

export default Success;
