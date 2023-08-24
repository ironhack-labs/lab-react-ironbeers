// src/main.jsx
import React from 'react'
import ReactDOM from "react-dom/client"

import App from "./components/App"

import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Router>
    <App />
  </Router>
)
