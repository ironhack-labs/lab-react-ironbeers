import React from 'react';
import { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import BeersList from './Pages/Beers';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beers' element={<BeersList/>}/>
    </Routes>
    </div>
  );
}

export default App;
