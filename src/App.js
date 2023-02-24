import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/beers"
          element={<Beers />}
        />
        <Route
          path="/random"
          element={<RandomBeer />}
        />
        <Route
          path="/new"
          element={<NewBeer />}
        />
      </Routes>
    </div>
  );
}

export default App;
