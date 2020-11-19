import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="container">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers/:id" component={BeerDetails} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
