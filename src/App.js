import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Homepage'
import Beers from './Components/Beers'
import BeersDetails from './Components/BeersDetails'
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path="/beers/:beerId" element={<BeersDetails />} />
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
