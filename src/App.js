import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import from './Pages/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/randomBeer';
import NewBeer from './components/newBeer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="AllBeers" element={<AllBeers />} />
      <Route path="RandomBeer" element={<RandomBeer />} />
      <Route path="NewBeer/:id" element={<NewBeer />} />
    </Routes>
  </BrowserRouter>
</div>
);
} 
         
     
  
export default App;
