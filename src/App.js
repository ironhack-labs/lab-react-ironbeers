import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Beers from './pages/Beers';
import Home from './pages/Home';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import OneBeer from './pages/OneBeer';
// import header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/beers/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
