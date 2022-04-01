import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './views/Home/Home';
import AllBeers from './views/AllBeers/AllBeers';
import SingleBeer from './views/SingleBeer/SingleBeer';
import BeerForm from './views/BeerForm/BeerForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />}/>
        <Route path="/beers/:id" element={<SingleBeer />}/>
        <Route path="/beers/random-beer" element={<SingleBeer />}/>
        <Route path="/new-beer" element={<BeerForm />}/>
      </Routes>
    </div>
  );
};

export default App;
