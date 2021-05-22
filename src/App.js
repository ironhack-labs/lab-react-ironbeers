import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import BeerList from './components/pages/BeerList';
import BeerDetail from './components/pages/BeerDetail';
import RandomBeer from './components/pages/RandomBeer';
import NewBeer from './components/pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/beers/:beerId" component={BeerDetail} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
