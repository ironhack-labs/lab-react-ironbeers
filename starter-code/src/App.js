import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import BeersList from './components/BeersList'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import BeerForm from './components/CreateNewBeer'


class App extends Component {
  render() {
    return (
      <>
      
      <Switch>
      <Route exact path="/" render={() => <Home/>} />
        <Route exact path="/beers" render={() => <BeersList/>} />
        <Route path="/details/:id" render={match => <BeerDetails {...match} />} />
        <Route exact path="/random-beers" render={() => <RandomBeer/>} />
        <Route exact path="/new-beer" render={() => <BeerForm/>} />
      </Switch>
      </>
    );
  }
}

export default App;
