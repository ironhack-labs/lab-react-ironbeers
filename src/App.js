import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">

      <header>
        
        <Link to= "/">
        <img src="./logo.svg"/>
        </Link>

      </header>

      


      <Routes>

      <Route   path="/" element= {<HomePage/>}/>
        <Route   path="/beers" element= {<AllBeers/>}/>
        <Route   path="/beers/:beerId" element={<BeerDetails/>}/>
        <Route   path="/random-beer" element={<RandomBeer/>}/>
        <Route   path="/new-beer" element={<NewBeer/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
