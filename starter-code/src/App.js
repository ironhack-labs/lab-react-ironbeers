import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link} from 'react-router-dom';

import Home from './components/Home'
import BeersList from './components/BeersList';


class App extends Component {
  render() {
    return (
      <div>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeersList} />
         </Switch>
      </div>
    );
  }
}

export default App;
