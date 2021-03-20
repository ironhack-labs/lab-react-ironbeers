import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Views/Home';
import ListBeers from './Views/ListBeers';
import RandomBeer from './Views/RandomBeer';
import NewBeer from './Views/NewBeer';
import Header from './Components/Header';
import SingleBeer from './Views/SingleBeer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:beerId" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
