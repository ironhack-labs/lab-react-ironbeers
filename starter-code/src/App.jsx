import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Beers from './Components/Beers';
import RandomBeer from './Components/RandomBeer';
import SingleBeer from './Components/SingleBeer';
import NewBeer from './Components/NewBeers';


import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
useParams
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Switch>
      <Route path='/beers/:id' component={SingleBeer} />
      <Route path='/newbeer' component={NewBeer} />
      <Route path='/beers' component={Beers} />
      <Route path='/random-beer' component={RandomBeer} />
      <Route path='/' component={HomePage} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
