import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './home/Home';
import './App.css';
import Beers from './componets/beers/Beers';
import RandomBeer from './componets/randombeer/RandomBeer';
import NewBeer from './componets/newbeer/NewBeer';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>

  );
}

export default App;
