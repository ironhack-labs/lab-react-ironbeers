import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import Beers from './views/Beers'
import NewBeer from './views/NewBeer'
import RandomBeer from './views/RandomBeer'
import SingleBeer from './views/SingleBeer'

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:beerId" component={SingleBeer} />
          <Route path="/newbeer" component={NewBeer} />
          <Route path="/random-beer" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
