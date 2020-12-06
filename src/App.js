import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import AllBeers from './pages/allbeers/AllBeers';
import singleBeer from './pages/singleBeer/singleBeer';
import randomBeer from './pages/randomBeer/randomBeer';
import newBeer from './pages/newBeer/newBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:id" component={singleBeer} />
        <Route exact path="/random-beer" component={randomBeer} />
        <Route exact path="/new-beer" component={newBeer} />
      </Switch>
    </div>
  );
}

export default App;
