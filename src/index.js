// React Util
import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// JSX Components
import { Home } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
