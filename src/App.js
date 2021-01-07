import React from 'react';
import logo from './logo.svg';
import './App.css';

import homePage from './views/homePage';
import beers from './views/beers';
import newbeer from './views/newbeer';
import Randombeer from './views/randombeer';
import onebeer from './views/onebeer';
import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route  path="/new-beer" component={newbeer} />
        <Route  path="/beers" component={beers} />
        <Route  path="/random-beer" component={Randombeer} />
        <Route  exact path="/beers/:id" component={onebeer} />
      </Switch>
    </div>
  );
}

export default App;
