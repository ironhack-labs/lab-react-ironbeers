import React from 'react';
import './App.css';
import Home from './Home';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import SingleBeer from './SingleBeer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function NotFound() {
  return <h4>Sorry, we don't have that...</h4>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
