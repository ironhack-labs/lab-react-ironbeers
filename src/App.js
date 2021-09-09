import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import IdBeer from './components/IdBeer/IdBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

import './App.css';

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route path="/beers" component={Beers} exact/>
        <Route path="/beers/:beerId" component={IdBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
