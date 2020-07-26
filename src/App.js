import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" render={(props) => <AllBeers {...props} />} />
      <Route
        path="/beers/:beerId"
        render={(props) => <SingleBeer {...props} />}
      />
      <Route path="/random-beer" component={RandomBeer} />
      <Route path="/new-beer" component={AddBeer} />
    </Switch>
  );
}

export default App;
