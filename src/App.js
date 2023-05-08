import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/beers" component={BeersList} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/:id" component={BeerDetails} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;