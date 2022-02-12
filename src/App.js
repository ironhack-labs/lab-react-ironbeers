import Router from "./Router";
import { useState, useEffect } from "react";
import { NavBar } from "./components";
const axios = require("axios");

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router></Router>
    </div>
  );
}

export default App;
