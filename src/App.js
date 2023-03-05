
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListBeers from "./pages/ListBeers"
import Home from "./pages/Home"
import RandomBeer from "./pages/RandomBeer"
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listbeers" element={<ListBeers />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/singlebeer" element={<SingleBeer />} />
       
      </Routes>

    
    </div>
  );
}

export default App;
