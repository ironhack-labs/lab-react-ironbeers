import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router";
import Home from './views/Home/Home';
import ListBeers from "./views/ListBeer/ListBeer";
import NewBeer from "./views/NewBeer/NewBeer";
import SingleBeer from './views/SingleBeer/SingleBeer';
import { beerList } from './services/BeerService';
import './App.scss';

function App() {
  const [beers, setBeers] = useState([])

 useEffect(() => {
    beerList()
      .then((response) => {
        setBeers(response)
      })
 }, [])



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers beers={beers} />} />
        <Route path="/beers/:id" element={<SingleBeer beers={beers} />} />
        <Route path="/random-beer" element={<SingleBeer beers={beers} />} />
        <Route path="/new-beer" element={<NewBeer /> } />
      </Routes>
      
    </div>
  );
}

export default App;
