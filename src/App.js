import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Beer from './pages/Beer/Beer';
import Beers from './pages/Beers/Beers';
import Home from './pages/Home/Home';
import NewBeer from './pages/NewBeer/NewBeer';
import RandomBeer from './pages/RandomBeer/RandomBeer';

function App() {
  console.log('hola')
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/:id" component={Beer} />       
      </Switch>
    </div>
  );
}

export default App;
