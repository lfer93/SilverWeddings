import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

/* Importamos estilos globales (fuentes + variables + base) */
import "./styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
