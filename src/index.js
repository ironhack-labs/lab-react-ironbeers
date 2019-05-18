import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


