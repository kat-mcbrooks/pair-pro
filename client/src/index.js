import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common["Authorization"] = localStorage.userToken
  ? `Bearer ${localStorage.userToken}`
  : null;

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
