import React from "react";
import ReactDOM from "react-dom";
import App from "./routes";
import "./styles/main.css";

// Hooks
import { AuthProvider } from "./hooks/auth";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
