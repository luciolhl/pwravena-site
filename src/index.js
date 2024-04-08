import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
