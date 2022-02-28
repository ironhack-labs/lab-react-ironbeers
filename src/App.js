import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<AllBeers/>} />
        <Route path="/random-beer" element={<RandomBeer/>} />
        <Route path="/new-beer" element={<NewBeer/>} />
        <Route path="/beers/:beerId" element={<BeerDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
