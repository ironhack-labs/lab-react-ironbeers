import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/HomePage';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
