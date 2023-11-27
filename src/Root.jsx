import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";
import "./index.css";

import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import ItemDetails from "./Components/ItemDetails";
import Cart from "./Components/Cart";
import AddressForm from "./Components/AdressForm";
import PageNotFound from "./Components/PageNotFound";

const Root = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adress" element={<AddressForm />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default Root;
