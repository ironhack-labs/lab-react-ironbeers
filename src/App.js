import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./views/Home/Home";
import Header from "./Components/Header/Header.jsx";
import BeerList from "./views/Beers/Beers";
import BeerDetail from "./views/Beers/BeerDetail";
import RandomBeer from "./views/Beers/RandomBeer";
import NewBeer from "./views/Beers/NewBeer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:id" element={<BeerDetail />} />
        <Route path="/beers/random" element={<RandomBeer />} />
        <Route path="/beers/new-beer" element={<NewBeer/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
