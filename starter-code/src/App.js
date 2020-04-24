import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/beers' component={AllBeers} />
          </Switch>
      </div>
    );
  }
}

export default App;
