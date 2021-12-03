import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBeerPage from './pages/AddBeerPage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/details/:beerId" element={<BeerDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
