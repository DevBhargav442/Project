import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CSS/Menu.css";
import Navbar from "./Navbar";
import { useCart } from "./CartContext";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://yummy-food-xup0.onrender.com/api/foodItems")
        .then((response) => {
          setMenuData(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  const filterData = menuData.filter((item) =>
    item.itemName.toLowerCase().includes(searchItem.toLowerCase())
  );

  const groupedData = {};
  filterData.forEach((item) => {
    if (!groupedData[item.category]) {
      groupedData[item.category] = [];
    }
    groupedData[item.category].push(item);
  });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div className="menu-container">
          <h1 className="menu-title">Menu</h1>
          <input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="search-input"
          />

          {Object.keys(groupedData).map((category) => (
            <div key={category} className="category-container">
              <h2 className="category-title">{category}</h2>
              <ul className="menu-list">
                {groupedData[category].map((item) => (
                  <li key={item.id} className="menu-item">
                    <img
                      src={item.img}
                      alt={item.itemName}
                      className="menu-item-img"
                    />
                    <div className="content">
                      <h2 className="name">{item.itemName}</h2>
                      <p>{item.category}</p>
                      <p>{item.price}</p>

                      <Link
                        to={`/item/${item.id}`}
                        className="view-description-btn"
                      >
                        View Description
                      </Link>
                      <button onClick={() => addToCart(item)}>
                        Add to Cart
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
