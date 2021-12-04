import React from 'react';
import './App.css';
import AddBeersPage from './pages/AddBeersPage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import HomePage from './pages/HomePage';
import RandomBeerPage from './pages/RandomBeerPage';


import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<AddBeersPage />} />
      </Routes>
    </div>
  );
}

export default App;
