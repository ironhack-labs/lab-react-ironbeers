import React, { Component } from 'react';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import BeerList from './components/BeerList/BeerList';
import BeerInfo from './components/BeerList/BeerInfo/BeerInfo';
import RandomBeer from './components/BeerList/RandomBeer/RandomBeer';
import AddBeer from './components/AddBeer/AddBeer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/beers" component={ BeerList } />
        <Route path="/beers/:id" component={ BeerInfo }/>
        <Route path="/random-beer" component={ RandomBeer } />
        <Route path="/new-beer" component={ AddBeer } />
      </Switch>
    );
  }
}

export default App;
