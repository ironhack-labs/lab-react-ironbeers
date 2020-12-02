import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home.js';
import Beers from './components/Beers/Beers.js';
import Randombeer from './components/Randombeer/Randombeer.js';
import Newbeer from './components/Newbeer/Newbeer.js';
import BeerDetails from './components/Beers/BeerDetails.js';

const App = () => {
  return (
    <section className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/random-beer" component={Randombeer} />
        <Route path="/new-beer" component={Newbeer} />
        <Route exact path="/beers/:id" component={BeerDetails} />
      </Switch>
    </section>
  );
};

export default App;
