import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Beers from "./Pages/Beers";
import BeerDetails from "./Pages/BeerDetails";
import RandomBeer from "./Pages/RandomBeers";
import NewBeer from "./Pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
