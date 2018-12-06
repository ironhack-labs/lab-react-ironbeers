import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"
import Header from "./components/Header"

import { Link, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
           <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
          
            </Switch>
      </div>
    );
  }
}

export default App;
