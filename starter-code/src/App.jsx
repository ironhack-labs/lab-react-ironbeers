import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

import AppRoutes from "./routes";
import Navbar from "./Components/Navbar";
import Home from "./views/home";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    );
  }
}

export default App;
