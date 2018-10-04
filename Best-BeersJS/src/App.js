import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {Home} from './components/homepage';
// import Beers from './components/beers';


class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      </div>
    );
  }
}

export default App;
