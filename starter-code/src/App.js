import React, { Component } from 'react';
import Home from '../src/pages/home';
import { Switch, Route } from 'react-router-dom';
import beers from './pages/beers';
import AddBeer from './pages/AddBeer';
import BeerDetail from './pages/BeerDetail';
import Login from './pages/Login';
import AddBeerFile from './pages/AddBeerFile';
import RandomBeer from './pages/RandomBeer';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={beers} />
          <Route path="/addbeer" component={AddBeer} />
          <Route path="/beer-detail/:beerId" component={BeerDetail} />
          <Route path="/login" component={Login} />
          <Route path="/addbeerfile" component={AddBeerFile} />
          <Route path="/randombeer" component={RandomBeer} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
