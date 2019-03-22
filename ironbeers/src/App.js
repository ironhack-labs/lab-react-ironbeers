import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css'

import Homebar from './Components/Homebar'
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homebar />

        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App