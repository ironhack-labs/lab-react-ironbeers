import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import Beerdetails from './components/Beerdetails';
import Randombeer from './components/Randombeer';
import Newbeer from './components/Newbeer';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/beers" element={ <Beers />} />
          <Route path="/beers/:beerId" element={ <Beerdetails /> } />
          <Route path="/beers/Randombeer" element={ <Randombeer /> } />
          <Route path="/beers/Newbeer" element={ <Newbeer /> } />
        </Routes>
    </div>
  );
}

export default App;
