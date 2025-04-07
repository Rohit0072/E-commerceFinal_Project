import React, { useEffect, useState } from "react";
import "./shopping-cart.css";
import axios from "axios";

function ShoppingCartComponent() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    cvv: "",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("https://backend-onef.onrender.com/api/cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCartItems(response.data.products || []);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    fetchCart();
  }, []);

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const response = await axios.put(
        `https://backend-onef.onrender.com/api/cart/${productId}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCartItems((prev) =>
        prev.map((item) =>
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error(
        "Failed to update quantity:",
        error?.response?.data || error
      );
    }
  };

  const removeItem = async (productId) => {
    try {
      await axios.delete(`https://backend-onef.onrender.com/api/cart/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCartItems((prev) => prev.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <div className="sc_shopping_cart_container">
      <div className="sc_shopping_cart_wrapper">
        {/* Cart Section */}
        <div className="sc_cart_section">
          <h2 className="sc_section_title">Shopping Cart.</h2>
          <table className="sc_cart_table">
            <thead>
              <tr>
                <th className="sc_product_header">Product</th>
                <th className="sc_quantity_header">Quantity</th>
                <th className="sc_price_header">Total Price</th>
                <th className="sc_remove_header"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="sc_cart_item">
                  <td className="sc_product_cell">
                    <div className="sc_product_info">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="sc_product_image"
                      />
                      <span className="sc_product_name">{item.name}</span>
                    </div>
                  </td>
                  <td className="sc_quantity_cell">
                    <div className="sc_quantity_controls">
                      <button
                        className="sc_quantity_btn sc_quantity_decrease"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="sc_quantity_value">
                        {item.quantity}
                      </span>
                      <button
                        className="sc_quantity_btn sc_quantity_increase"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="sc_price_cell">
                    <span className="sc_price_value">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </td>
                  <td className="sc_remove_cell">
                    <button
                      className="sc_remove_btn"
                      onClick={() => removeItem(item.productId)}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sc_cart_summary">
            <div className="sc_subtotal_row">
              <span className="sc_subtotal_label">Subtotal:</span>
              <span className="sc_subtotal_value">${calculateSubtotal()}</span>
            </div>
            <div className="sc_shipping_row">
              <span className="sc_shipping_label">Shipping:</span>
              <span className="sc_shipping_value">Free</span>
            </div>
            <div className="sc_total_row">
              <span className="sc_total_label">Total:</span>
              <span className="sc_total_value">${calculateSubtotal()}</span>
            </div>
          </div>

          <button className="sc_continue_shopping_btn">
            <span className="sc_continue_icon">←</span> Continue Shopping
          </button>
        </div>

        {/* Payment Section */}
        <div className="sc_payment_section">
          <h2 className="sc_sec_title_pay">Payment Info.</h2>
          <div className="sc_payment_method">
            <h3 className="sc_payment_method_title">Payment Method:</h3>
            <label className="sc_payment_option">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
              />
              <span className="sc_payment_option_label">Credit Card</span>
            </label>
            <label className="sc_payment_option">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <span className="sc_payment_option_label">PayPal</span>
            </label>
          </div>

          {paymentMethod === "creditCard" && (
            <div className="sc_credit_card_form">
              <div className="sc_form_group">
                <label className="sc_form_label">Name On Card</label>
                <input
                  type="text"
                  className="sc_form_input"
                  placeholder="Name"
                  value={cardInfo.name}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, name: e.target.value })
                  }
                />
              </div>
              <div className="sc_form_group">
                <label className="sc_form_label">Card Number</label>
                <input
                  type="text"
                  className="sc_form_input"
                  placeholder="**** **** **** 2123"
                  value={cardInfo.number}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, number: e.target.value })
                  }
                />
              </div>
              <div className="sc_form_group">
                <label className="sc_form_label">CVV</label>
                <input
                  type="text"
                  className="sc_form_input sc_cvv_input"
                  placeholder="156"
                  value={cardInfo.cvv}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, cvv: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          <button className="sc_checkout_btn">Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartComponent;
