import "./App.css";
import React from "react";

import Home from "./components/Home";
import Beers from "./components/Beers";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/:beerId" element={<BeerDetails />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
