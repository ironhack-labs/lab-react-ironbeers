import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import List from './components/List';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Home></Home>;
              }}
            />
            <Route
              exact
              path="/beers"
              render={() => {
                return <List></List>;
              }}
            />
            <Route
              exact
              path="/:beerID"
              render={() => {
                return <Card></Card>;
              }}
            />
            <Route
              path="/random-beer"
              render={() => {
                return <Card></Card>;
              }}
            />

            <Route
              path="/new-beer"
              render={() => {
                return <Card></Card>;
              }}
            />
          </Switch>
        
      </div>
    );
  }
}

export default App;
