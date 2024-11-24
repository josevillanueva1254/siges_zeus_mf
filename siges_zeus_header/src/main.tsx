import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Busca el contenedor con id="root"
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("No se encontró el contenedor con id='root'");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
}
