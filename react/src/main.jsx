import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PaisesRecientesProvider } from "./context/PaisesRecientesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PaisesRecientesProvider>
    <App />
  </PaisesRecientesProvider>
);
