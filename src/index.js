import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <CartProvider>
        <FilterProvider>
          <ToastContainer />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
