import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import WithHeader from './components/WithHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={WithHeader} />
        </Switch>
      </div>
    );
  }
}

export default App;
