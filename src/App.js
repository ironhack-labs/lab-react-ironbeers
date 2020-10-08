import React from 'react';
import Beers from './Pages/Beers';
import NewBeer from './Pages/NewBeer';
import OneBeer from './Pages/OneBeer';
import RandomBeer from './Pages/RandomBeer';
import Homepage from './Pages/Homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
