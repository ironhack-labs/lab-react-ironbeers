import './App.css';
import Homepage from './pages/Homepage'
import Beer from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import Navbar from './components/Navbar'
import OneBeer from './pages/OneBeer'
import React from "react";

import { Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/beers' element={<Beer />} />
        <Route path="/beers/:id" element={<OneBeer />}/>
        <Route path='/randomBeer' element={<RandomBeer />} />
        <Route path='/newBeer' element={<NewBeer />} />
      
      
     
      </Routes>
    </div>
  );
}

export default App;
