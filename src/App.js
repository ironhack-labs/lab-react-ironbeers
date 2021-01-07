import React from 'react';
import './App.css';
import NavMain from './components/NavMain';
import Home from './views/Home';
import Beers from './views/Beers';
import Newbeer from './views/Newbeer';
import Randombeer from './views/Randombeer';
import OneBeer from './views/OneBeer';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/create" component={Newbeer} />
        <Route exact path="/beers/:id" component={OneBeer} />
        <Route exact path="/beers/random-beer" component={Randombeer} />
      </Switch>
    </div>
  );
}

export default App;
