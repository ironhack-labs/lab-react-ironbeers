
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeersDetails from './pages/BeersDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';









function App() {
  

  return (
    <div className="App">

        
  

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:id" element={<BeersDetails/>} />
      <Route path="/random" element={<RandomBeer />} />
      <Route path="/new" element={<NewBeer />} />
      

    </Routes>
      
    </div>
  );
}

export default App;
