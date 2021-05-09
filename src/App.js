import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import BeerList from './component/BeerList';
import BeerDetails from './component/BeerDetails';
import RandomBeer from './component/RandomBeer';
import NewBeer from './component/NewBeer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class App extends Component {
  state = {
    beers: []
  }
  render() {
    return (
      <>
        <Header />
        <main>
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route exact path="/beers" component={ BeerList }></Route>
          <Route exact path="/beers/new" component={ NewBeer }></Route>
          <Route exact path="/beers/random" component={ RandomBeer }></Route>
          <Route exact path="/beers/:id" component={ BeerDetails }></Route>
        </Switch>
      </main>
      </>
    )
  }
}
