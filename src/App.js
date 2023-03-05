import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import OneBeer from "./pages/OneBeer";
import RandomBeer from "./pages/RandomBeer";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Header />}>
          <Route path="/beers" element={<Beers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:id" element={<OneBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
