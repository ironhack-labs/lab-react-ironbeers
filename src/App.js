import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar.component';
import RandomBeer from './components/RandomBeer.component';
import NewBeer from './components/NewBeer.component';
import AllBeers from './components/AllBeers.component';
import Home from './components/Home.component';
import SingleBeer from './components/SingleBeer.component';

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <NavBar>
            <Route exact path="/beers" component={AllBeers} />
            <Route path="/beers/:id" component={SingleBeer} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} />
          </NavBar>
        </Switch>
      </>
    );
  }
}
