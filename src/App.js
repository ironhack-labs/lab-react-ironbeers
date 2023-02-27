import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/beers" element={<Beers />} />
        <Route exact path="/random-beer" element={<RandomBeer />} />
        <Route exact path="/new-beer" element={<NewBeer />} />
        <Route path="/:id" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
