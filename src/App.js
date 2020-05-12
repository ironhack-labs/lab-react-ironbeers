import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './components/home.jsx';
import Beers from './components/beers.jsx';
import RandomBeer from './components/randombeer.jsx';
import NewBeer from './components/newbeer.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />;
        <Route exact path="/beers" component={Beers} />;
        <Route exact path="/randombeer" component={RandomBeer} />;
        <Route exact path="./newbeer" component={NewBeer} />;
      </Switch>
    </div>
  );
}

export default App;
