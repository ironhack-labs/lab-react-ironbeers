import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from './components/Home';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

const App = () => {
  return (
    <section className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allbeers" component={AllBeers} />
        <Route path="/newbeer" component={NewBeer} />
        <Route path="/randombeer" component={RandomBeer} />

      </Switch>
    </section>
  );
};

export default App;
