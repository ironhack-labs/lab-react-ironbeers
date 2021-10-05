import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllBeers from './pages/All-beers';
import RandomBeer from './pages/Random-beer';
import NewBeer from './pages/New-beer';
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import BeerDetails from './pages/Beer-Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
      <Home/>
      </header>
      <div className="Content">
      <Route exact path='/beers' component={AllBeers} />
      <Route exact path='/random-beer' component={RandomBeer} />
      <Route exact path='/new-beer' component={NewBeer} />
      <Route exact path="/beers/:id" component={BeerDetails} />
</div>
    </div>
  );
}

export default App;
