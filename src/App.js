import './App.css';
import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";

import HomePage from './components/HomePage';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


function App() {
  return (
   
    <div className="App">
       

     
     <Routes>
          <Route path='/' element={<HomePage />}/> 
          <Route path='/beers' element={<ListBeers />}/> 
          <Route path='/new-beer' element={<NewBeer />}/> 
          <Route path='/random-beer' element={<RandomBeer />}/> 
          <Route path='/beers/:beerId' element={< SingleBeer/>}/>  
     </Routes>
      

    </div>
  );
}

export default App;
