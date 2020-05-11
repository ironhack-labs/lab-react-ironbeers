import React, { Component } from 'react';

import './App.css';
import Allbeers from './components/Allbeers';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import OneBeers from './components/OneBeer';

class App extends Component {
  render() {
    return (
      <div>
        <Landing></Landing>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/beers" component={Allbeers} />
          <Route exact path="/beer/:id" component={OneBeers} />
          {/* <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
           */}
        </Switch>
      </div>
    );
  }
}

export default App;
