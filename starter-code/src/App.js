import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import home from './components/home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={home} />
        </Switch>
      </div>
    );
  }
}

export default App;
