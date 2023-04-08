import React, { useState, useEffect } from 'react'
import beersService from './services/beers'
import BeersList from "./components/BeersList/BeersList";
import Home from "./components/Home/Home";

import { Navigate, Route, Routes } from 'react-router-dom';
import SingleBeer from './components/SingleBeer/SingleBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    beersService.list()
      .then((beers) => {
        setBeers(beers)
      })
      .catch(error => console.error(error))
  }, [])

  const addBeer = (beer) => {
    setBeers([beer, ...beers])
  }

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<BeersList beers={beers} /> } />
        <Route path='/beers/:beersId' element={<SingleBeer beers={beers} /> } />
        <Route path='/random' element={<RandomBeer beers={beers} /> } />
        <Route path='/new' element={<NewBeer addBeer={addBeer} /> } />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
