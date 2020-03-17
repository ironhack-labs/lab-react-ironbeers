import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
