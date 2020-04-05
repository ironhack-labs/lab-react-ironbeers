import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import home from './components/home';
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={home} />
          </Switch>
      </div>
    );
  }
}

export default App;
