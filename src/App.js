import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Header from './components/Header';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/beers">
            <Header />
            <AllBeers />
          </Route>
          <Route exact path="/beers/:beerId" component={SingleBeer} />
          <Route exact path="/random-beer">
            <SingleBeer isRandom={true} />
          </Route>
          <Route exact path="/new-beer">
            <Header />
            new
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
