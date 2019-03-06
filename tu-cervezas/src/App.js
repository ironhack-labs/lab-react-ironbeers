import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/' component={App}/>
        </Switch>
      </div>
    );
  }
}

export default App;
