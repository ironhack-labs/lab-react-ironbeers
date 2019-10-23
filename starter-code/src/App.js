import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link} from 'react-router-dom';

import Home from './components/Home'
import BeersList from './components/BeersList';
import BeerDetail from './components/BeerDetail';

class App extends Component {
  render() {
    return (
      <div>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeersList} />
            <Route exact path="/beers/:id" component={BeerDetail} />
         </Switch>
      </div>
    );
  }
}

export default App;
