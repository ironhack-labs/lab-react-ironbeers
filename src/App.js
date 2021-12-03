import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import BeersPage from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="/beers">Beers</Link>
      <br />
      <Link to="/random-beer">Random Beer</Link>
      <br />
      <Link to="/new-beer">New Beer</Link>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/beers" element={ <BeersPage />} />
        <Route exact path="/random-beer" element={ <RandomBeer />} />
        <Route exact path="/new-beer" element={ <NewBeer />} />
        <Route element={ <Error />} />
      </Routes>
    </div>
  );
}

export default App;
