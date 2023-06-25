import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import DetailBeer from './components/DetailBeer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/beers/:id' element={<DetailBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
