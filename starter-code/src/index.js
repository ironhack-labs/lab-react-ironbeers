import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
