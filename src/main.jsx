import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Routes
import {BrowserRouter as Router} from "react-router-dom"
//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css";
import './index.scss';
import { ToastContainer } from 'react-toastify'
import axios from "axios";



axios.defaults.baseURL = " https://nt-devconnector.onrender.com/api";
axios.defaults.headers.common["Content-Type"] = "application/json";
let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["x-auth-token"] =` Bearer ${token}`


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <ToastContainer theme="colored" />
    </Router>
  </React.StrictMode>
);

