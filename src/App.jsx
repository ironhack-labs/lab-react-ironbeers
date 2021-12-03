import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Beer } from './components/Beer';
import { Beers } from './components/Beers';
import { CreateBeer } from './components/CreateBeer';

function App() {
  return (
    <div className="App">
      {<Header />}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<Beer random={true} />} />
        <Route path="/new-beer" element={<CreateBeer />} />
        <Route path="/beers/:id" element={<Beer />} />
      </Routes>
    </div>
  );
}

export default App;
