import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AddBeerPage from './pages/AddBeerPage/AddBeerPage';
import BeerListPage from './pages/BeerListPage/BeerListPage';
import BeerDetailsPage from './pages/BeerDetailsPage/BeerDetailsPage';
import RandomBeerPage from './pages/RandomBeerPage/RandomBeerPage';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-beer" element={<AddBeerPage />} />
        <Route path="/beers" element={<BeerListPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/beers/random/" element={<RandomBeerPage />} />      
    </Routes>

    </div>
  );
}

export default App;
