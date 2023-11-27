import React, { useState } from "react";
import "./CSS/Adress.css";

import { Link } from "react-router-dom";
const AddressForm = () => {
  const [formData, setFormData] = useState({
    recipientName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    useAsBilling: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveAddress = () => {
    const newErrors = {};
    if (!formData.recipientName.trim())
      newErrors.recipientName = "Recipient name is required";
    if (!formData.addressLine1.trim())
      newErrors.addressLine1 = "Address Line 1 is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP Code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="container">
      <h2>Shipping Address</h2>

      <form className="form">
        <div className="inputGroup">
          <label htmlFor="recipientName">Recipient's Name:</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleInputChange}
          />
          {errors.recipientName && (
            <p className="errorMessage">{errors.recipientName}</p>
          )}
        </div>

        <div className="inputGroup">
          <label htmlFor="addressLine1">Address Line 1:</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
          />
          {errors.addressLine1 && (
            <p className="errorMessage">{errors.addressLine1}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleSaveAddress}
          className="saveButton"
        >
          Save Address
        </button>
      </form>

      <div className="billingAddress">
        <h2>Billing Address</h2>

        <div className="inputGroup">
          <input
            type="checkbox"
            id="useAsBilling"
            name="useAsBilling"
            checked={formData.useAsBilling}
            onChange={handleInputChange}
          />
          <label htmlFor="useAsBilling" style={{ marginLeft: "8px" }}>
            Use shipping address as billing address
          </label>
        </div>
      </div>

      <button
        type="button"
        onClick={handlePlaceOrder}
        className="placeOrderButton"
      >
        Place Order
      </button>
      <Link to="/menu">menu</Link>
    </div>
  );
};

export default AddressForm;
