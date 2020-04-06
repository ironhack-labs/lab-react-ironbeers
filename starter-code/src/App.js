import React, { Component } from 'react';
// import './App.css';
import Home from '../src/pages/home';
import { Switch, Route } from 'react-router-dom';
import beers from './pages/beers';
import AddBeer from './pages/AddBeer';
import BeerDetail from './pages/BeerDetail';
import LogIn from './pages/LogIn';
import AddBeerFile from './pages/AddBeerFile';
import RandomBeer from './pages/RandomBeer';
import SignUp from './pages/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={beers} />
          <Route path="/addbeer" component={AddBeer} />
          <Route path="/beer-detail/:beerId" component={BeerDetail} />
          <Route path="/login" component={LogIn} />
          <Route path="/addbeerfile" component={AddBeerFile} />
          <Route path="/randombeer" component={RandomBeer} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
