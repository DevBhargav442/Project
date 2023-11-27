import React from "react";
import { useCart } from "./CartContext";
import "./CSS/Cart.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();

  const increaseQuantity = (itemId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: itemId });
  };

  const decreaseQuantity = (itemId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: itemId });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const calculateTotal = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const isCartEmpty = state.cartItems.length === 0;

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2 className="header">Your Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td className="buttons">
                  <button
                    className="add-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="total">Total: {calculateTotal()}</p>
        {!isCartEmpty && <Link to="/adress">Place Order</Link>}
      </div>
    </div>
  );
};

export default Cart;
