import './App.css';
import { useState, useEffect } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import TheBeer from './pages/TheBeer';
import NewBeer from './pages/NewBeer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beer/:beerId" element={<TheBeer />} />
        <Route path="/newBeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
