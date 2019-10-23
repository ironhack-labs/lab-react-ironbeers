import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import Beers from './components/beers';
import BeersDetails from './components/singleBeer';
import RandomBeerDetails from './components/randomBeer';
import AddBeers from './components/addBeer';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers/:id' component={BeersDetails}/>
          <Route exact path='/new-beer' component={AddBeers}/>
          <Route exact path='/random-beer' component={RandomBeerDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
