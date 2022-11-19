import './App.css';
import Home from './Pages/Home';
import React, { useState, useEffect } from 'react';
import Beers from './Pages/Beers';
import { Route, Routes } from 'react-router-dom';
import BeerDetails from './Pages/BeerDetails';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beerDetails/:beerId' element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
