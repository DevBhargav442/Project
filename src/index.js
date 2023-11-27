import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import { UserProvider } from "./Components/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <Root />
  </UserProvider>
);
