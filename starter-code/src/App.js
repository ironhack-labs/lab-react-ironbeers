import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
