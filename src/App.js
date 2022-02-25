import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from './components/HomePage';
import BeersList from './components/BeersList';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';


function App() {
  return (
    <div className="App">

     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
    </Routes>
    
    </div>
  );
}

export default App;
