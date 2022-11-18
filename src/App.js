import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import HomePage from './pages/HomePage';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import axios from 'axios';

function App() {


  return (
    <div className="App">

      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/beers' element={<AllBeers/>} />
        <Route path='/random' element={<RandomBeer/>} />
        <Route path='/onebeer/:beerId' element={<BeerDetails />} />  
      </Routes>
    </div>
  );
}

export default App;
