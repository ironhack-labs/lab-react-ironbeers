import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Logout from './pages/Logout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/beers' component = {Beers}/>
          <Route path = '/beer/:id' component = {BeerDetail}/>
          <Route path = '/random-beer' component = {RandomBeer}/>
          <Route path = '/new-beer' component = {NewBeer}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/signup' component = {SignUp}/>
          <Route path = '/profile' component = {Profile}/>
          <Route path = '/logout' component = {Logout}/>
        </Switch>
      </div>
    );
  }
}

export default App;