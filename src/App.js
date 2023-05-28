import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import BeersList from './Pages/Beers';
import BeerDetails from './Components/BeerDetails';
import BeerDetailsPage from './Pages/BeerDetailsPage';
import RandomBeer from './Pages/RandomBeer';
import AddBeer from './Pages/NewBeer';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beers' element={<BeersList/>}/>
      <Route path='/beers/:beerId' element={<BeerDetailsPage/>}/>
      <Route path='/random' element={<RandomBeer/>}/>
      <Route path='/new-beer' element={<AddBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
