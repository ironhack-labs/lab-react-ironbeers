import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/homepage";
import Beers from "./pages/beers";
import NewBeer from "./pages/new-beer";
import RandoBeer from "./pages/random-beer";
import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import SingleBeer from "./pages/singlebeer";
import AddBeer from "./pages/new-beer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<AddBeer />} />
        <Route path="/random-beer" element={<RandoBeer />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
