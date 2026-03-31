import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import { PaisesRecientesProvider } from "./context/PaisesRecientesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PaisesRecientesProvider>
    <App />
  </PaisesRecientesProvider>
=======

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
);
