import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import "./CSS/Navbar.css";

const Navbar = () => {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          {user ? (
            <>
              <span>Welcome, {user.userName}</span>
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        {user && <Link to="/cart">Cart</Link>}
      </ul>
    </nav>
  );
};

export default Navbar;
