import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { BeerList } from './components/BeerList';
import { BeerDetail } from './components/BeerDetail';
import { RandomBeer } from './components/RandomBeer';
import { NewBeer } from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<BeerList />} />
          <Route path="/beers/:id" element={<BeerDetail />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
