import React from 'react';
import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';


import './App.css';
import AllBeers from './views/AllBeers/AllBeers';
import BeersList from './components/BeersList/BeersList';
import BeerDetail from './views/BeerDetail/BeerDetail';
import NewBeer from './components/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList/>} />
        <Route path="/beers/:id" element={<BeerDetail />} />
        <Route path="/newBeer" element={<NewBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
