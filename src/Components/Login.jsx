import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    const user = userData.find(
      (u) => u.userName === userName && u.password === password
    );

    if (user) {
      login(user);
      // Redirect to the originally requested page if available, or "/home" as a fallback
      const redirectTo = localStorage.getItem("redirectTo") || "/home";
      localStorage.removeItem("redirectTo");
      navigate(redirectTo);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="page-container">
      <div>
        <pre>Are You Feeling Hungry?</pre>
      </div>
      <div className="signup-container">
        <div className="container">
          <h2>Login</h2>
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
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            {error && <p>{error}</p>}
            Not Registered Yet? <Link to="/signup">Signup</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
