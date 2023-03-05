import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from "./components/NewBeer";
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/beers" element={<AllBeers/>}></Route>
        <Route path="/beers/random-beer" element={<RandomBeer/>}></Route>
        <Route path="beers/:beerId" element={<BeerDetails/>}></Route>
        <Route path="beers/new-beer" element={<NewBeer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
