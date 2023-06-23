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
       <header>
      <Navbar />
      </header>
      
     
     <Routes>
          <Route path='/' element={<HomePage />}/> 
          <Route path='/random-beer' element={<RandomBeer />}/> 
          <Route path='/new-beer' element={<NewBeer />}/> 
          {/* <Route path='/' element={<HomePage />}/> 
          <Route path='/' element={<HomePage />}/>  */}
     </Routes>
      

    </div>
  );
}

export default App;
