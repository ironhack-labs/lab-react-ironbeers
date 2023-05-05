import './App.css';
import React from 'react';
import Header from "./components/Header.js"
import { Routes, Route, } from "react-router-dom"
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Home from './pages/Home';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/beers" element={<Beers />} />
            <Route path="/" element={<Home />} />
            <Route path="/newBeer" element={<NewBeer />} />
            <Route path="/randomBeer" element={<RandomBeer />} />
            <Route path="/beers/:beerid" element={<SingleBeer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
