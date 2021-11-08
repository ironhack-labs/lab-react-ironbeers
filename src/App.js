import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import BeersList from './components/BeersList';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={BeersList} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
