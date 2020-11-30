import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
// import NotFound from '';

const App = () => {
  return (
    <section className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </section>
  );
};

export default App;
