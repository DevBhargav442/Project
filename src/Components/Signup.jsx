import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CSS/Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];

    if (!userName || !mobile || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (userData.some((u) => u.userName === userName)) {
      alert("Username is already taken");
      return;
    }

    userData.push({ userName, mobile, password });
    localStorage.setItem("userData", JSON.stringify(userData));

    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="signup-container">
        <div className="container">
          <h2 className="title">Signup</h2>
          <form className="form">
            <div className="inputGroup">
              <label className="label">Username:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label className="label">Mobile:</label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label className="label">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </div>
            <button type="button" onClick={handleSignup} className="button">
              Signup
            </button>
          </form>
          <p className="loginLink">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
