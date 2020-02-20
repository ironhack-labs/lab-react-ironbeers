import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Home from './views/Home'
import AllBeers from './views/AllBeers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
        </Switch>

      </div>
    );
  }
}

export default App;
