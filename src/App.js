import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Switch>
          {/* <Route path='/beers' component={Home} />
          <Route path='/random-beer' component={Home} />
          <Route path='/new-beer' component={About} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
