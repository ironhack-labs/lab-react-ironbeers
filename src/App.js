import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import EveryBeer from './components/EveryBeer';
import RandomBeer from './components/RandomBeer';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/every-beer" render={() => <EveryBeer />} />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" render={() => <NewBeer />} />
          <Route
            exact
            path="/beers/:id"
            render={(props) => <SingleBeer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
