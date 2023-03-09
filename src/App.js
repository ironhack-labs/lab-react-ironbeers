import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Homepage'
import Beers from './Components/Beers'
import BeersDetails from './Components/BeersDetails'
import RandomBeer from './Components/RandomBeer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path="/beers/:beerId" element={<BeersDetails />} />
        <Route path='/random-beer' element={<RandomBeer/>}/>

      </Routes>
    </div>
  );
}

export default App;
