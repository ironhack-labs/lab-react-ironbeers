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

      <div>
        <div>
        <img src="./assets/beers.png"/>

        <Link to= "/beers">All Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       
        </div>
        <div>
        <img src="./assets/random-beer.png" />
        <Link to= "/random-beer">Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
        <img src="./assets/new-beer.png" />
        <Link to= "/new-beer">New Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>


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
