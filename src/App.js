import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Beers from "./pages/Beers/Beers";
import Beer from "./pages/Beer/Beer";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import NewBeer from "./pages/NewBeer/NewBeer";
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/:id" component={Beer} />
      </Switch>
    </div>
  );
}

export default App;
