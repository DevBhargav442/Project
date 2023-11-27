import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CSS/ItemDetails.css";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = () => {
      axios
        .get(`https://yummy-food-xup0.onrender.com/api/foodItems/${itemId}`)
        .then((response) => {
          setItemDetails(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchItemDetails();
  }, [itemId]);

  return (
    <div>
      <h1 className="heading">Item Details</h1>
      {itemDetails && (
        <div className="details-container">
          <h2 className="item-name">{itemDetails.itemName}</h2>
          <img
            className="image"
            src={itemDetails.img}
            alt={itemDetails.itemName}
          />
          <p className="description">{itemDetails.description}</p>
          <p className="category">Category: {itemDetails.category}</p>
          <p className="price">Price: {itemDetails.price}</p>
          <Link to="/menu">Go back to Menu</Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
