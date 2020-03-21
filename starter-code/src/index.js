import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/index.css";
import "../public/styles/App.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
