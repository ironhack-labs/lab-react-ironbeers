import React, { Component } from 'react';
import ListBeers from './components/ListBeers'
import BeerCardDetails from './components/BeerCardDetails'
import BeerNavegation from './components/navegation/BeerNavegation'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <BeerNavegation />} />
          <Route path="/beers" render={() => <ListBeers />} />
          <Route path={`/beers/:id`} render={match => <BeerCardDetails {...match} />} />

        </Switch>
      </>
    );
  }
}

export default App;
