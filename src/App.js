import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Link, NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers'
import NewBeer from './components/NewBeer'
import React, { useState, useEffect } from 'react';
import BeerDetails from './components/BeerDetails';



function App() {
  
  return (
    <div className="App">
    
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/beers' element={<Beers/>}/>
    <Route path='/beer/:beerId' element={<BeerDetails/>}/>
    <Route path='/randombeers' element={<RandomBeers/>}/>
    <Route path='/newbeers' element={<NewBeer/>}/>

   </Routes>

    
    </div>
  );
}

export default App;
