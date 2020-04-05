import React, { Component } from 'react';
// import './App.css';
import Home from '../src/pages/home';
import { Switch, Route } from 'react-router-dom';
import beers from './pages/beers';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={beers} />
        </Switch>
      </div>
    );
  }
}

export default App;
